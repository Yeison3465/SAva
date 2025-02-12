import React from 'react'
import { Route, Routes } from "react-router-dom";
import { App } from '../Pages/App';
import { Flower } from '../Pages/Flower';
import { End } from '../Pages/End';

export const MainRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="flores" element={<Flower/>} />
            <Route path="Final" element={<End/>} />
        </Routes>
    </div>
  )
}
