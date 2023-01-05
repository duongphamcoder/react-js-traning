export type Message = {
    [key: string]: string,
    message: string
}


export const showNotification = (error: Message, callback: (message: string) => void) => {
    const { message } = error;
    callback(message);
};
