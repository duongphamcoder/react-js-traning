import { NotificationMessage } from 'constants/notification';
import { sendRequest } from 'helpers';

type CloudResponse = {
    error: boolean;
    data: {
        [key: string]: string | number;
    },
    message: string
}

/**
 * - Processing sending images to cloudinary
 * @param file 
 * @returns 
 */
export const cloudinaryUpload = async (file: File): Promise<CloudResponse> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', `${process.env.REACT_APP_CLOUD_PRESET}`);
    formData.append('api_key', `${process.env.REACT_APP_CLOUD_KEY}`);
    formData.append('api_secret', `${process.env.REACT_APP_CLOUD_SECRET}`);
    const response = await sendRequest.post(`${process.env.REACT_APP_CLOUD_URL}`, formData);
    if (response.status === 200) {
        const { public_id, url } = response.data;
        const resolveValue = {
            error: false,
            data: { public_id, url },
            message: NotificationMessage.SEND_REQUSET_SUCCESS
        };
        return Promise.resolve(resolveValue);
    }
    const rejectValue = {
        error: true,
        data: {},
        message: NotificationMessage.SEND_REQUSET_FAILED
    };
    return Promise.reject(rejectValue);
};
