import {useState,useEffect} from 'react'
import userConfig from "../config/userConfig.js"

export default function RecentCard(){

    function formatEvent(event) {

    const repoName = event.repo.name.split("/")[1];
    switch (event.type) {
    case "PushEvent":
      return `Pushed ${event.payload?.commits?.length || "a few"} commits to ${repoName}`;

    case "PullRequestEvent":
      return `Opened a pull request in ${repoName}`;

    case "WatchEvent":
      return `Starred ${repoName}`;

    case "CreateEvent":
      return `Created ${event.payload.ref_type} in ${repoName}`;

    default:
      return `Did ${event.type} in ${repoName}`;
  }
}

    const [RecentData, setRecentData] = useState([])

    //used thsi useEffect hook in order to fetch my Recent data
    useEffect(()=>{
    fetch(`https://api.github.com/users/${userConfig.githubUsername}/events`)
    .then((res)=>res.json())
    .then((res)=>setRecentData(res.slice(0, 5)))
    .catch((e)=>console.log("Could not fetch Recent activity Data,Error",e))
    },[])

    if (!RecentData || RecentData.length === 0) {
        return <p>Loading Recent Data...</p>;
    }

    console.log(RecentData)


    return(
    <div>

        {RecentData.map((event) => (
        <div key={event.id}>
          <p>{formatEvent(event)}</p>
        </div>
      ))}
    </div>

    )
}