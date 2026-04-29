import {useState,useEffect} from 'react'

export default function Card(){

    const [RepoData, setRepoData] = useState([])

    //used thsi useEffect hook in order to fetch data of my repos
    useEffect(()=>{
    fetch('https://api.github.com/users/DIVYATMAJ/repos')
    .then((res)=>res.json())
    .then((res)=>setRepoData(res))
    .catch((e)=>console.log("Could not fetch Github Repo Data,Error",e))
    },[])

    if (!RepoData || RepoData.length === 0) {
        return <p>Loading Repo Data...</p>;
    }


    return(
        <div>
            {
                RepoData.map((item)=>{
                    return <ul key={item.id}>
                            <li>{item.name}</li>
                            <li>{item.full_name}</li>
                            <li><a href={item.html_url} target="_blank" rel="noreferrer">View Project →</a></li>
                            </ul>
                })
            }
        </div>
    )
}