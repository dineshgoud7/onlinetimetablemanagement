import React from 'react';
import { Button } from '@material-ui/core'; // Example import
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Navigation from './Components/Navigation';
// import TextBoxComponent from './component/TextBoxComponent';
// import Car from './component/Carinfo';
// import Sum from './component/Sum';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar } from '@material-ui/core';
import Demoaxios from './Components/Demoaxios';
import ShowCourses from './Components/ShowCourses';
import Timetable from './Components/TimeTable';
import Footer from './Components/Footer';
import Home from './Components/Home';

import Appnav from './Components/Appnav';
import AccountPage from './Components/AccoutPage';
import About from './Components/About';
import Contact from './Components/Contact';
import CalendarComponent from './Components/CalendarComponent';
import ParentComponent from './Components/ParentComponent';
import DisplayTimetable from './Components/DisplayTimetable';
import CourseList from './Components/CourseList';


function App() {
  
  return(
    <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" style={{ width:"40px", height:"40px" }} />&nbsp;
          <p>ONLINE TIME TABLE MANAGEMENT SYSTEM </p>
        </div >
        {/* <div align="center">
          <Car myLists={Cars}/>
        </div> */}
        <div className="App-body">
          <Container>
            
            <Navigation />&nbsp;&nbsp;&nbsp;
            {/* <TextBoxComponent /> */}
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/reg' element={<Registration />} />
               {<Route path='/add' element={<addCourse/>}/> }
                { <Route path='/log' element={<Login/>}/> }
                { <Route path='/logo' element={<Login/>}/> }
                { <Route path='/acco' element={<AccountPage/>}/> }
                <Route path='/abo' element={<About/>}/>
                <Route path='/dem' element={<Demoaxios/>}/> 
                <Route path='/con' element={<Contact/>}/> 
                
                <Route path='/cou' element={<ShowCourses/>}/>
                <Route path='/tim' element={<Timetable/>}/>
                <Route path='/app' element={<Appnav/>}/>
                <Route path='/cal' element={<CalendarComponent/>}/>
                <Route path='/par' element={<ParentComponent/>}/>
                <Route path='/dis' element={<DisplayTimetable/>}/>
                <Route path='/lis' element={<CourseList/>}/>
              </Routes>
            </BrowserRouter>
          </Container>
        </div>
        
      <Footer/>
    </div>
  );
}

export default App;