import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "../Layout";

const App = () => {
  return (
    <Router>
      <div>
        tomi puto
        <Routes>
          <Route exact path="/" component={Layout} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
