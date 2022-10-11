import React from 'react'
import User from './User'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {News} from './Pages/News'
import {Links} from './Pages/Links'
import {Pics} from './Pages/Pics'
import {Vids} from './Pages/Vids'

export default function RouterComponent() {

  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<User/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/links" element={<Links/>}/>
                <Route path="/pics" element={<Pics/>}/>
                <Route path="/vids" element={<Vids/>}/>
            </Routes>
        </Router>
    </div>
  )
}

