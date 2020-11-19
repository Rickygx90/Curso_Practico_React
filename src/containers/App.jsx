import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState.js";

import "../assets/styles/App.scss";

const API = "http://localhost:3000/initialState";

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />

      {initialState.mylist && initialState.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends &&
            initialState.trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
        </Carousel>
      </Categories>

      {initialState.originals && initialState.originals.length > 0 && (
        <Categories title="Originales de Platzi Video">
          <Carousel>
            {initialState.originals &&
              initialState.originals.map((item) => (
                <CarouselItem key={item.id} {...item} />
              ))}
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Footer />
    </div>
  );
};

export default App;
