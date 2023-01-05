import { months } from 'constants/month';

type ConvertDate = {
    time: string,
    date: string
}

/**
 * - Convert from number to date
 * @param date Date
 * @returns { ConvertDate }
 */
const convertDate = (date: Date): ConvertDate => {
    const parseDate = new Date(date);
    const month = parseDate.getMonth();
    const day = parseDate.getDate();
    const year = parseDate.getFullYear();
    const hours = parseDate.getHours();
    const currentHours = hours > 12 ? hours - 12 : hours;
    const minutes = parseDate.getMinutes();
    const timeStamp = hours > 12 ? 'PM' : 'AM';
    const currentTime = `${currentHours}:${minutes} ${timeStamp}`;
    const currentDate = `${months[month]} ${day}, ${year}`;
    return {
        time: currentTime,
        date: currentDate
    };
};

export default convertDate;
