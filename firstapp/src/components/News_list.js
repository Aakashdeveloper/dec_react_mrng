import React from 'react';


const NewsList = (props) => {
    console.log(props)

    const results = props.sendNews.map((data, index) => {
        return (
            <div key={data.id}>
                <h3>{data.title}</h3>
                <div>
                    {data.feed}
                </div>
            </div>
        )
    })


    return(
       <div>
           {results}
        </div>
    )
}

export default NewsList;