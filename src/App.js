import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import Alert from "./Components/Alert";
function App() {
  const [mode,setMode] = useState("light");
  const [alert, setalert] = useState(null);

  function showAlert(message,type){
    setalert({
      msg:message,
      typeOfMsg:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  function togglefunc(){
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = 'rgb(32, 33, 36)' 
      document.body.style.color = 'white' 
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white' 
      document.body.style.color = 'black'
      showAlert("Dark Mode has been disabled","success") 
    }
    
  }
  return (
    <>
      <Navbar mode={mode} togglefunc = {togglefunc}/>
      <Alert alert = {alert}/>
      <div className="container">
        <TextArea title="Enter text to analyze" mode={mode} showAlert = {showAlert}/> 
      </div>
    </>
  );
}

export default App;
