
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/layout/Home";
import Footer from "./components/layout/Footer";
import Header from './components/layout/Header';
import Product from './components/layout/Product';



 function App() {
   return (
     <div className="App">
     <Router>
       <Header/>
       <Switch>
        <Route exact path='/'  component={Home}/> 
       </Switch>
      </Router>
      <Product/>
     <Footer/> 
     </div>
   )
 }

export default App;
