import React from "react";
import Header from "./layout/Header";
import { BrowserRouter } from "react-router-dom";
import PageBody from "./pages/PageBody";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <PageBody />
      </BrowserRouter>
    </div>
  );
};

export default App;
