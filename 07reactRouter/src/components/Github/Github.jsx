import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(()=>{ //we have used useEffect cuz we want to fetch the api automatically on loading the github page
    //     fetch("https:api.github.com/users/priyanshuchoubey")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)            
    //     })
    // },[])

    const data = useLoaderData()
    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}  
                <img src={data.avatar_url} alt="Git picture" width={300} />
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/priyanshuchoubey")
    return response.json()
}
