import { baseUrl } from '../constant/BaseUrl';

export function latestNews(){
    const output = fetch(`${baseUrl}/articles?_end=3`,{
        method:'GET'
    })
    .then(response => response.json())

    return{
        type:'GET_LATEST',
        payload:output
    }
}

export function otherNews(){
    const output = fetch(`${baseUrl}/articles?_start=3&_end=10`,{
        method:'GET'
    })
    .then(response => response.json())

    return{
        type:'GET_OTHER',
        payload:output
    }
}


export function galleryNews(){
    const output = fetch(`${baseUrl}/galleries?_limit=2`,{
        method:'GET'
    })
    .then(response => response.json())

    return{
        type:'GET_GALLERY',
        payload:output
    }
}


////////////////////////
export function selectedNews(id){
    const output = fetch(`${baseUrl}/articles?id=${id}`,{
        method:'GET'
    })
    .then(response => response.json())

    return{
        type:'GET_SELECTED_NEWS',
        payload:output
    }
}

export function clearSelctedNews(){
    return{
        type:'CLEAR_SELECTED_NEWS',
        payload:[]
    }
}