
import * as queryString from 'query-string'


export const queryParamsToObject = (params) => {
    let obj = queryString.parse(params);
    Object.entries(obj).map(([key, value]) => {
        obj[key] = Array.isArray(value) ? value : [value]

    })
    return obj

}

export const objectToQueryParams = (obj) => {
    let string = '?'
    string += queryString.stringify(obj);
    return string
}


export const buildFilterQuery = (filter) => {
    let query = {};
    for (let keys in filter) {
        if (filter[keys].constructor === Array && filter[keys].length > 0) {
            query[keys] = filter[keys];
        }
    }
    return query
}


export const filterList = (data, query) => {
    const filteredData = data.filter((item) => {
        for (let key in query) {
            if (item[key] === undefined) {
                return false;
            }
            if (!Array.isArray(item[key])) {
                if (!query[key].includes(item[key])) {
                    return false;
                }
            }
            if (Array.isArray(item[key])) {
                if(!item[key].some(r=> query[key].indexOf(r) >= 0)){
                    return false
                }
            }

        }
        return true;
    });
    return filteredData
}



