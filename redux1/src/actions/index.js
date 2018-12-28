export function moviesList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1, name:"Avengers"},
            {id:2, name:"Deadpool"},
            {id:3, name:"Rambo"}
        ]
    }
}

export function artitsList(){
    return{
        type:'ARTIST_LIST',
        payload:[
            {id:1, name:"Avengers"},
            {id:2, name:"Deadpool"},
            {id:3, name:"Rambo"}
        ]
    }
}