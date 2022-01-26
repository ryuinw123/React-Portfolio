
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Story from './components/Story';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import { StoryData,StoryData2 } from './components/StoryData';
import Toggle from './components/Toggle';
import { useContext,useEffect } from 'react';
import { ThemeContext } from './Context';
import Navbar from './components/Navbar';
import {ProductData1 , ProductData2 ,ProductData3} from './components/ProductData'
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  useEffect(() => {
    AOS.init();
    AOS.refresh();


  }, []);
  

  return (<>
  <Navbar />
    <div className ='app-wrapper' style = {{backgroundColor : darkMode ? "#222" : "white" , color: darkMode && "white" }}>
        <Toggle />
        
        <Intro/>
        <About/>
        <div className='story-container' id = "story">
          <div className = 'story-left' data-aos="fade-right">
            <Story pos = {"right"} data = { StoryData } />
          </div>
          <div className = 'story-right' data-aos="fade-left">
          <Story pos = {"left"} data = { StoryData2 } />
          </div>
        </div>
        <ProductList ProductTitle = {"Computer Engineering Project"} ProductDescription = {"ส่วนนี้จะเป็นโปรเจ็คที่ได้ทำไว้ในช่วงมหาวิทยาลัย เมื่อกดเข้าไปจะเป็นลิงค์ Github ของ Project นั้น ๆ สามารถดูรายละเอียดอื่น ๆ ได้ตามลิงค์เลย"} ProductData = {ProductData1} ProductID = "project" />
        <ProductList ProductTitle = {"Computer Engineering Certificate"} ProductDescription = {"ส่วนนี้จะเป็นประกาศนียบัตรของ Coursera ที่ได้ทำไว้ในช่วงที่มหาวิทยาลัยเปิดให้เรียนฟรี เมื่อกดเข้าไปจะเป็นลิงค์ยืนยัน ของ Certificate นั้น ๆ สามารถดูรายละเอียดอื่น ๆ ได้ตามลิงค์เลย"} ProductData = {ProductData2} ProductID = "certificate" />
        <ProductList ProductTitle = {"Secondary School Certificate"} ProductDescription = {"ส่วนนี้จะเป็นประกาศนียบัตร ที่ได้ทำไว้ในช่วงที่มัธยม"} ProductData = {ProductData3} ProductID = "certificate" />
        <Contact/>
    </div>
    </>
  );
}

export default App;
