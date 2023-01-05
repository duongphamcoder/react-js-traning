export type Message = {
    [key: string]: string,
    message: string
}

/**
 * - Display a message when performing an action
 * @param error 
 * @param callback 
 */
export const showNotification = (error: Message, callback: (message: string) => void) => {
    const { message } = error;
    callback(message);
};
