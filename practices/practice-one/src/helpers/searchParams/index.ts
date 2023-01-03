type SearchParams = {
    [key: string]: string
}

export const getSearchParams = (search: URLSearchParams): SearchParams => {
    const params: SearchParams = {};
    for (const [key, value] of search) {
        params[key] = value;
    }
    return params;
};