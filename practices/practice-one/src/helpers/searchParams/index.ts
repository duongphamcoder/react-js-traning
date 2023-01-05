type SearchParams = {
    [key: string]: string
}

/**
 * - Get all search parameters
 * @param search 
 * @returns 
 */
export const getSearchParams = (search: URLSearchParams): SearchParams => {
    const params: SearchParams = {};
    for (const [key, value] of search) {
        params[key] = value;
    }
    return params;
};