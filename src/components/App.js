import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";
import Routes from "../routes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
