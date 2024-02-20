import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {
  return (
    <React.Fragment>
    <Sidebar sidebar={sidebar}/>
    <div className={`container ${sidebar?"":'large-container'}`}>
      <Feed/>
    </div>
    </React.Fragment>
  )
}

export default Home