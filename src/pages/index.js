import React from "react"
import Menubar from '../components/navbar';
import Featured from '../components/featured';
import About from '../components/about';
import Work from '../components/work';
import Skills from '../components/skills';
import Contact from '../components/contact';

export default function Home() {
  return(
    <div>
      <Menubar></Menubar>
      <Featured></Featured>
      <About></About>
      <Work></Work>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  ); 
}
