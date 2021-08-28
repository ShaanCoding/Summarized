import React from "react";
import "./App.css";
import { Switch, Route, Link, useParams } from "react-router-dom";
import index from "./Pages/Index";
import appMain from "./Pages/AppMain";
import UploadVideo from "./Pages/UploadVideo";
import viewVideo from "./Pages/ViewVideo";
import summarizedVideo from "./Pages/SummarizedVideo";

function App() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/appMain" component={appMain} />
        <Route exact path="/uploadVideo" component={UploadVideo} />
        <Route exact path="/viewVideo" component={viewVideo} />
        <Route path={`/summarizedVideo/:id`} component={summarizedVideo} />
      </Switch>
    </div>
  );
}

export default App;
