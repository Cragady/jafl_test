function stringIncludes(val){
    return val.includes('prdsrv+id=');
}

export const UrlParser = {
    getIdFromUrl(path) {
        path = path.split('/');
        path = path.filter(stringIncludes);
        return path[0].split('prdsrv+id=')[1];
    }
}