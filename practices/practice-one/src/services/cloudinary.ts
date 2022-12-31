import { sendRequest } from "helpers";

type CloudResponse = {
    error: boolean;
    data: {
        [key: string]: string | number;
    }
}

export const cloudinaryUpload = (file: File): Promise<CloudResponse> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", `${process.env.REACT_APP_CLOUD_PRESET}`);
    formData.append("api_key", `${process.env.REACT_APP_CLOUD_KEY}`);
    formData.append("api_secret", `${process.env.REACT_APP_CLOUD_SECRET}`);
    const promise = new Promise<CloudResponse>(async (resolve, reject) => {
        const response = await sendRequest.post(`${process.env.REACT_APP_CLOUD_URL}`, formData)
        if (response.status === 200) {
            const { public_id, url } = response.data
            const resolveValue = {
                error: false,
                data: { public_id, url }
            }
            resolve(resolveValue)
        }
        const rejectValue = {
            error: true,
            data: {}
        }
        reject(rejectValue)
    })
    return promise
};
