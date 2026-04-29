import { useState,useEffect } from 'react'
// import './App.css'
import RepoCard from './components/RepoCard.jsx'
import UserCard from './components/UserCard.jsx'
import RecentCard from './components/RecentCard.jsx'
import ReadMeCard from './components/ReadMeCard.jsx'

function App() {
  
  return (
    <>
    <RepoCard/>
    <UserCard/>
    <RecentCard/>
    <ReadMeCard/>
    </>
  )
}

export default App
