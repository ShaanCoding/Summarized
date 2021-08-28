import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

import "../App.css";
import "../home-page.css";
import TitleProp from "../Components/TitleProp";
import IndexGrid from "../Components/IndexGrid";
import IndexExcitingFeatures from "../Components/IndexExcitingFeatures";
import Header from "../Components/Header";

import Timer from "../Images/Icons/timer.svg";
import Notes from "../Images/Icons/notes.svg";
import Cogs from "../Images/Icons/cogs.svg";
import IndexFlex from "../Components/IndexFlex";

const index = () => {
  return (
    <>
      <NavBar />

      <Header />

      <div className="content">
        <TitleProp
          title="QUALITY FEATURES"
          description="Meet exciting features of app"
        />
        <div className="quality-features">
          <IndexExcitingFeatures
            title="Automatic Video Generation"
            description="Recap your lectures at x10 speed through our data analytics solution, we find key points of your lecture and combine them into a summarized video."
            icon={Cogs}
          />
          <IndexExcitingFeatures
            title="Summarized Notes"
            description="Through GPT-3 and other heuristic-based training models we automatically summarize lecture notes through speech-to-text."
            icon={Notes}
          />
          <IndexExcitingFeatures
            title="Generate Flash Cards"
            description="Automatically generate revision questions and flash card decks, compatable with anki."
            icon={Timer}
          />
        </div>
      </div>

      <div className="how-it-works">
        <div className="title">
          <h2>WHATS THE FUNCTION</h2>
          <h1>Let's see how it works</h1>
        </div>
        <div>
          <div className="how-it-works-flex">
            <IndexFlex
              title="Title one"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur aperiam sequi, dolorum nostrum veniam sunt reprehenderit
                repellendus natus numquam repudiandae distinctio doloribus!
                Asperiores modi minima a pariatur optio consequuntur magni."
            />
            <IndexFlex
              title="Title one"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur aperiam sequi, dolorum nostrum veniam sunt reprehenderit
                repellendus natus numquam repudiandae distinctio doloribus!
                Asperiores modi minima a pariatur optio consequuntur magni."
            />
            <IndexFlex
              title="Title one"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur aperiam sequi, dolorum nostrum veniam sunt reprehenderit
                repellendus natus numquam repudiandae distinctio doloribus!
                Asperiores modi minima a pariatur optio consequuntur magni."
            />
            <IndexFlex
              title="Title one"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur aperiam sequi, dolorum nostrum veniam sunt reprehenderit
                repellendus natus numquam repudiandae distinctio doloribus!
                Asperiores modi minima a pariatur optio consequuntur magni."
            />
          </div>
        </div>
      </div>

      <div className="content">
        <TitleProp
          title="QUALITY FEATURES"
          description="Meet exciting features of app"
        />
        <div className="exciting-new-features">
          <IndexGrid
            title="Smart Features"
            description="Get your blood tests delivered at let home collect sample from the victory of the managments."
            icon={Timer}
          />
          <IndexGrid
            title="Smart Features"
            description="Get your blood tests delivered at let home collect sample from the victory of the managments."
            icon={Timer}
          />
          <IndexGrid
            title="Smart Features"
            description="Get your blood tests delivered at let home collect sample from the victory of the managments."
            icon={Timer}
          />
          <IndexGrid
            title="Smart Features"
            description="Get your blood tests delivered at let home collect sample from the victory of the managments."
            icon={Timer}
          />
          <IndexGrid
            title="Smart Features"
            description="Get your blood tests delivered at let home collect sample from the victory of the managments."
            icon={Timer}
          />
          <IndexGrid
            title="Smart Features"
            description="Get your blood tests delivered at let home collect sample from the victory of the managments."
            icon={Timer}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default index;
