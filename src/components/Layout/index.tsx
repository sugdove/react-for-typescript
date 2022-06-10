import React, { FC } from 'react'
import Header from './components/Header'
import Siderbar from './components/Siderbar'
import Main from './components/Main'
import Footer from './components/Footer'
import './index.scss'
const Layout: FC = () => {
  return (
    <div className="main_container">
      <Header></Header>
      <Siderbar></Siderbar>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}
export default Layout
