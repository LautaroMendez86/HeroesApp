import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { DCscreen } from "../components/DC/DCscreen";
import { HeroScreen } from "../components/hero/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/SearchScreen/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

export const AppRouters = () => {


  return (
    <>
      <HashRouter>
        <Navbar />

        <div className="container mt-5">
          <Routes>
            <Route path="/dc" element={<DCscreen />} />

            <Route path="/marvel" element={<MarvelScreen />} />

            <Route path="" element={<MarvelScreen />} />

            <Route path="/search" element={<SearchScreen />} />

            <Route path="hero/:heroId" element={<HeroScreen />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
};
