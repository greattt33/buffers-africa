import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navabar"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Success from "./components/success"
import Failure from "./components/failure"
import SignUp from "./components/SignUp"
import GlobalStyle from "./GlobalStyle"

function App() {
  return (
    <div className="App">
      <Router>
         <GlobalStyle/>
         <Navbar/>
         <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/signup" element={<SignUp/>}/>
           <Route path="/success" element={<Success/>}/>
           <Route path="/failure" element={<Failure/>}/>
           
         </Routes>
         <Contact/>
      </Router>
    </div>
  );
}


export default App;
