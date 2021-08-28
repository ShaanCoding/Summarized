import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import index from './Pages/Index';
import appMain from './Pages/AppMain';
import uploadVideo from './Pages/UploadVideo';
import viewVideo from './Pages/ViewVideo';
import summarizedVideo from './Pages/SummarizedVideo';

function App() {
  return (
    <Router>
      <Route exact path="/" component={index}/>
      <Route exact path="/appMain" component={appMain}/>
      <Route exact path="/uploadVideo" component={uploadVideo}/>
      <Route exact path="/viewVideo" component={viewVideo}/>
      <Route exact path="/summarizedVideo" component={summarizedVideo}/>

    </Router>
  );
}

export default App;
