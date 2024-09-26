/*  
    MainRouter.jsx
    Mauli Gandhi
    301486344
    2024-09-24
*/
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Project from './src/project'
import Layout from './components/layout'
import Services from './src/services'
const MainRouter = () => {
 return (
 // Creating Route/Nav bar
 <div>
    <Layout/>
    <Routes>
 
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/contact" element={<Contact />} />
 
    </Routes>
 </div>
 )
}
export default MainRouter
