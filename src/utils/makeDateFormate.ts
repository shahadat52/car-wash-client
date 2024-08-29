export const makeDateFormat = (date: Date) => {
    const newDate = new Date(date);

    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const day = String(newDate.getDate()).padStart(2, '0');

    // Formatting the date as yyyy-mm-dd
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}