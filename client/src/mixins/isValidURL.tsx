/**
 * Checks if a given URL is valid.
 *
 * @param {string} url - The URL to be validated.
 * @return {boolean} Returns true if the URL is valid, otherwise false.
 */
const isValidURL = (url: string) => {
    const urlRegex = /^(https?:\/\/)?(www\.)?([a-z0-9.-]+\.[a-z]{2,})(:[0-9]+)?(\/[^\s?#]*)?(\?[^?\s#]*)?(#.*)?$/i;
    return urlRegex.test(url);
}

export default isValidURL;