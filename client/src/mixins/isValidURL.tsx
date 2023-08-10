const isValidURL = (url: string) => {
    const urlRegex = /^(https?:\/\/)?(www\.)?([a-z0-9.-]+\.[a-z]{2,})(:[0-9]+)?(\/[^\s?#]*)?(\?[^?\s#]*)?(#.*)?$/i;
    return urlRegex.test(url);
}

export default isValidURL;