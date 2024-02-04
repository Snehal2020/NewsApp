import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsComp from './components/NewsComp'
// require('dotenv').config();


import PropTypes from 'prop-types'
import { Routes,Route, BrowserRouter } from 'react-router-dom'

export default function App(){
   let apikey=process.env.REACT_APP_NEWS_API
    return (
      <div>
          <Navbar ></Navbar>
          <Routes>
            <Route path="/"  element={<NewsComp apikey={apikey} key='general' country='us' category="general"></NewsComp>}/>
            <Route path="/science"  element={<NewsComp apikey={apikey} key='science' country='us' category="science"></NewsComp>}/>
            <Route path="/sports" element={<NewsComp apikey={apikey} key='sports' country='us' category="sports"></NewsComp>}/>
            <Route path="/business"  element={<NewsComp apikey={apikey} key='business' country='us' category="business"></NewsComp>}/>
            <Route path="/technology"  element={<NewsComp apikey={apikey} key='technology' country='us' category="technology"></NewsComp>}/>
            <Route path="/health"  element={<NewsComp apikey={apikey} key='health' country='us' category="health"></NewsComp>}/>
            <Route path="/entertainment" element={<NewsComp apikey={apikey} key='entertainment' country='us' category="entertainment"></NewsComp>}/>
          </Routes>
      
      </div>
    )
  
}
