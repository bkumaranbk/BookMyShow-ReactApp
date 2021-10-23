import './App.css';
import Header from './components/Header/Header';
import SliderImages from './components/SliderImage/SliderImages';
import CardsSlider from './components/CardsSlider';
import Premieres from './components/Premieres/Premieres';
import Footer from './components/Footer/Footer';
// import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
// import SingleMovie from './components/SingleMovie';
import SingleMovieFetch from './components/SingleMovieFetch';
import OnlineStream from './components/OnlineStream/OnlineStream';
import Outdoor from './components/Outdoor/Outdoor';
import PopularEvents from './components/PopularEvents/PopularEvents';
import LaguhterTherapy from './components/LaguhterTherapy/LaguhterTherapy';

import Registration from './components/Registration'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div>
        <Header />

        <Switch>


          <Route exact path="/">
            <SliderImages />
            <CardsSlider />
            <Premieres />
            <OnlineStream />
            <Outdoor />
            <PopularEvents />
            <LaguhterTherapy />
          </Route>

          <Route exact path="/movies">
            {/* <About /> */}
            <AllMoviesFetch />
          </Route>

          <Route exact path="/register">
            {/* <About /> */}
            <Registration />
          </Route>

          <Route exact path="/movies/:movid">
            {/* <About /> */}
            <SingleMovieFetch />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
