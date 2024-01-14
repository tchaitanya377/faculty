import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'


const HomePage = () => {
  let {name} = useContext(AuthContext)
  return (
    <div>
      <h1>This a home to display a content</h1>
      <p>hello {name}</p>
    </div>
  )
}

export default HomePage
