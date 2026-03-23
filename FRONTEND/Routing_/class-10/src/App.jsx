import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Course from './pages/Course'
import Product from './pages/Product'
import Navbar from './Component/Navbar'
import NotFound from './pages/NotFound'
import Women from './Component/Women'
import Men from './Component/Men'
import RandomAbout from './pages/RandomAbout'
import CourseDetails from './pages/CourseDetails'
import AnyCourse from './pages/AnyCourse'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* {Normal routes} */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/courses" element={<Course />} />

        {/* {Nested routes} */}
        <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} />

        {/* {Dynamic routes} */}
        <Route path='/about/:id' element={<RandomAbout />} />

        {/* {Nested dynamic routes} */}
        <Route path='/courses/:courseId' element={<AnyCourse />} />
        <Route path='/courses/:courseId/detail' element={<CourseDetails />} />

        {/* {Page not found route} */}
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
