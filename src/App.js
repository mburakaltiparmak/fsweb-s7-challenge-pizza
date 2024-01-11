import React from "react";
import Header from "./layout/Header";
import { BrowserRouter } from "react-router-dom";
import PageBody from "./pages/PageBody";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <PageBody />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
