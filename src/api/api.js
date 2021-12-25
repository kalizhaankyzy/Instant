async function getResponse(path, params){
    const response = await fetch(`https://api.unsplash.com/${path}?` + new URLSearchParams(params).toString(), {
        method: 'GET',
        headers: {"Authorization": "SI29yf8blkR2Qh3zvJ_6tu5WVjgPhdQOl_EtDkyJfmM"}
    });
    return await response.json();
}
export function getSearchResults(data) {
    const params = {
        query:data,
        client_id:"SI29yf8blkR2Qh3zvJ_6tu5WVjgPhdQOl_EtDkyJfmM"
    }
    return getResponse("search/photos", params);
}

export function getRandomImage() {
    const params = {
        orientation: "landscape",
        client_id: "SI29yf8blkR2Qh3zvJ_6tu5WVjgPhdQOl_EtDkyJfmM"
    }
    return getResponse("photos/random", params);
}
export function getImagesMainPage() {
    const params = {
        client_id:"SI29yf8blkR2Qh3zvJ_6tu5WVjgPhdQOl_EtDkyJfmM"
    }
    return getResponse("photos", params);
}