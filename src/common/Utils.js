export const getIdByQueryParam = (query) => {
    let index = query.indexOf("=");
    return query.slice(index+1);
}