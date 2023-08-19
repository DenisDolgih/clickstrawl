/**
 * Checks if a given URL is valid.
 *
 * @param {string} url - The URL to be validated.
 * @return {boolean} Returns true if the URL is valid, otherwise false.
 */
const isValidURL = (url: string) => {
    const urlRegex = /^(https?|ftp):\/\/(?:www\.)?([a-zA-Z0-9.-]+)\.[a-zA-Z]{2,}(?:\/[^\s?#]*)?(?:\?[^#\s]*)?(?:#[^\s]*)?$/i;
    return urlRegex.test(url);
}

export default isValidURL;