import React from 'react'
import Nav from './Nav'
import Footer from './Footer'


const LayOut = ({children}) => {
  return (
    <>
    <Nav/>
    {children}
    {/* <Footer/> */}

    </>
  )
}

export default LayOut