import { BrowserRouter, Route, Routes } from "react-router-dom"

import Main from "./Main"
import SubCourse from "../subpage/SubCourse"
import SubMenu from "../subpage/SubMenu"
import SubNews from "../subpage/SubNews"
import SubReserve from "../subpage/SubReserve"

import SubArellgy from "../subpage/SubArellgy"
import SubContact from "../subpage/SubContact"
import SubPrivacy from "../subpage/SubPrivacy"
import SubSns from "../subpage/SubSns"

import NotFound from "../subpage/NotFound"

export function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/news/:id' element={<SubNewses/>} /> */}

                    {/* グローバルナビ */}
                    <Route path='/' element={<Main/>} />
                    <Route path='/course' element={<SubCourse/>} />
                    <Route path='/menu' element={<SubMenu/>} />
                    <Route path='/news' element={<SubNews/>} />
                    <Route path='/reserve' element={<SubReserve/>} />

                    <Route path='/arellgy' element={<SubArellgy/>} />
                    <Route path='/contact' element={<SubContact/>} />
                    <Route path='/privacy' element={<SubPrivacy/>} />
                    <Route path='/sns' element={<SubSns/>} />


                    <Route path='/*' element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}