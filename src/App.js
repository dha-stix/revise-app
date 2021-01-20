import LoadingPage from "./components/LoadingPage"
import {lazy, Suspense} from "react"
import {Switch, Route} from "react-router-dom"
import FourOFour from "./components/FourOFour"
const Homepage =  lazy(()=> import("./components/Homepage"))
const GNS201 =  lazy(()=> import("./components/GNS201"))
const CSC205 =  lazy(()=> import("./components/CSC205"))
const CSC207 =  lazy(()=> import("./components/CSC207"))


function App() {

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
    <Route>
      <FourOFour />
    </Route>    
    </Switch>
    </Suspense>  
  );
}

export default App;
