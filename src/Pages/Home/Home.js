import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Home = ({sidebar}) => {
  return (
    <React.Fragment>
    <Sidebar sidebar={sidebar}/>
    </React.Fragment>
  )
}

export default Home