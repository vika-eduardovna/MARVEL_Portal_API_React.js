import React from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '../appHeader/AppHeader'
import AppBanner from '../appBanner/AppBanner'
import decoration from '../../resources/img/vision.png'

export default function Layout() {
  return (
    <>
        <AppHeader/>
        <AppBanner/>
        <main style={{'minHeight': '100vh'}}>
            <Outlet/>
        </main>
        <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  )
}
