import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/NavBar/NavBar';
import Body from './components/Body/Body';
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact'
import About from './components/About/About';
import Artists from './components/Artists/Artists';
import ArtistDatabase from './components/ArtistDatabase/ArtistDatabase';
import ArtistId from './components/ArtistId/ArtistId';
import axios from 'axios';





export default function App() {
    


    const [artistDatabase, setArtistDatabase] = useState([])
    

  useEffect(() => {
    artists();
    
  }, [])

  function ScrollToTop() {
    const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
      return null;
    }
  
  

  function artists () {
  axios.get('http://188.166.240.15:4000/artists')
  .then(function (response) {
    console.log(response)
    setArtistDatabase(response.data.artistDatabase);
  })
  .catch(function (error) {
    console.log(error);
  });
}

    


 
    

  return ( 
    <Router>
      <ScrollToTop />
      <div className="content">
        <Header artistDatabase={artistDatabase}/>
        <Switch >
            <Route exact path="/" component={()=> <Body artistDatabase={artistDatabase}/> }/>
            <Route path="/about" component={About}/>
            <Route path="/artists" component={()=> <Artists artistDatabase={artistDatabase}/> }/>
            <Route path="/artistdatabase" component={()=> <ArtistDatabase artistDatabase={artistDatabase}/>} />
            <Route path="/contact" component={Contact}/>
            <Route exact path="/:id" component={()=> <ArtistId artist={artistDatabase}/>} />
            <Route path="/*" component={NotFound}/>
          </Switch>  
                       
      </div>
      
    </Router>  
  );

}

