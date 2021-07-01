import React from 'react'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}>
          <Home />
        </Route>
        <Route exact path='/about' component={About}>
          <About />
        </Route>
        <Route exact path='/cocktail/:id' component={SingleCocktail}>
          <SingleCocktail />
        </Route>
        <Route exact path='*' component={Error}>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
