import LoadingPage from "./components/LoadingPage"
import {lazy, Suspense} from "react"
import {Switch, Route} from "react-router-dom"
import FourOFour from "./components/FourOFour"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Homepage =  lazy(()=> import("./components/Homepage"))
const GNS201 =  lazy(()=> import("./components/GNS201"))
const CSC205 =  lazy(()=> import("./components/CSC205"))
const CSC207 =  lazy(()=> import("./components/CSC207"))
const CSC203 =  lazy(()=> import("./components/CSC203"))



function App() {
  AOS.init();
  return (
    <Suspense fallback={<LoadingPage/>}>
    <Switch>
    <Route exact path="/">
    <Homepage />
    </Route>

     <Route  path="/question/CSC205">
    <CSC205 />
    </Route>
    <Route  path="/question/CSC207">
      <CSC207/>
    </Route> 
    <Route  path="/question/GNS201">
      <GNS201 />
    </Route>  
    <Route  path="/question/CSC203">
      <CSC203 />
    </Route>  
    <Route>
      <FourOFour />
    </Route>    
    </Switch>
    </Suspense>  
  );
}

export default App;
