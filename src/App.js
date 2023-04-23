import "./App.css";
// import AboutUs from "./Components/Aboutus";
import Navbar from "./Components/Navbar";
import Text from "./Components/Text";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
import Aboutus from "./Components/Aboutus"
import { Routes,Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')//dark mode on hai ki off hai wo dikhayega

const [alert, setAlert] = useState(null);

const showAlert =(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setInterval(() => {
    setAlert(null)
  }, 3000);
}
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#045e34';
      showAlert("Dark mode has been enable","success");
      document.title = 'TextUtile -Dark Mode';
    setInterval (()=>{
      document.title = 'TestUtile is Amazing'
    },2000)
    setInterval (()=>{
      document.title = 'Install Now TestUtile'
    },3000)
    }
    
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success");
      document.title = 'TextUtile -Light Mode';
    }
  }
  return (
  
      <>
       


        <Navbar title="Textutile" mode={mode} toggleMode={toggleMode}/>
        <Alert alert= {alert}/>
        
        <div className="container my-3" >
        <Routes>
           <Route  exact path="/" element={ <Text showAlert={showAlert} heading="Try Textutils , Word counter , Character counter , Remove extra spaces"  mode={mode}/> }>
           </Route>
          <Route exact path="/aboutus"  element={<Aboutus  title="About Us"  />} mode={mode} >
          </Route>
          </Routes>
        </div>
          
      </>
    
  );
}

export default App;
