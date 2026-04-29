import {useState,useEffect} from 'react'
import userConfig from "../config/userConfig.js"

export default function UserCard(){

    const [UserData, setUserData] = useState([])

    //used thsi useEffect hook in order to fetch my User data
    useEffect(()=>{
    fetch(`https://api.github.com/users/${userConfig.githubUsername}`)
    .then((res)=>res.json())
    .then((res)=>setUserData(res))
    .catch((e)=>console.log("Could not fetch Github User Data,Error",e))
    },[])

    if (!UserData || UserData.length === 0) {
        return <p>Loading User Data...</p>;
    }

    // console.log(UserData)


    return(
        <div>
            <h1>{UserData.login}</h1>
            <img src={UserData.avatar_url} alt="profile_pic"/>
            <h3>FOLLOWERS:{UserData.followers}</h3>
            <h3>FOLLOWING:{UserData.following}</h3>
            <h3><a href={UserData.public_repos}>VISIT REPOS</a></h3>
            <p><a href={UserData.html_url}>VISIT PROFILE</a></p>
        </div>

    )
}