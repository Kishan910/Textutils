import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from "./components/About";
import {useState} from "react";
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==="light"){
        setMode("dark");
        document.body.style.backgroundColor="#323435";
        showAlert("Dark mode has been enabled","success");
    }
    else{
      document.body.style.backgroundColor="white";
        setMode("light");
        showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      {/* <Router> */}
          <Navbar title={"Textutils"} mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}></Alert>
          <div className="container">
          <Textform heading="Enter your text to analyze" showAlert={showAlert} mode={mode} toggleMode={toggleMode} />
              {/* <Routes>
                <Route
                  path="/"
                  element={<Textform heading="Enter your text to analyze" showAlert={showAlert} mode={mode} toggleMode={toggleMode} />}>
                </Route> */}
                {/* <Route
                  path="/about"
                  element={<About></About>}>
                </Route>
              </Routes> */}
          </div>
      {/* </Router> */}
    </>
  );
}

export default App;
