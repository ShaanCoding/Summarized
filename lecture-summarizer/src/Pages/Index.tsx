import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

import "../App.css";
import "../home-page.css";
import TitleProp from "../Components/TitleProp";
import IndexGrid from "../Components/IndexGrid";
import IndexExcitingFeatures from "../Components/IndexExcitingFeatures";
import Header from "../Components/Header";

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
            title="Smart Features"
            description="Get your blood tests delivered at let home collect sample from the victory of the managments."
          />
          <IndexExcitingFeatures
            title="Smart Features"
            description="Get your blood tests delivered at let home collect sample from the victory of the managments."
          />
          <IndexExcitingFeatures
            title="Smart Features"
            description="Get your blood tests delivered at let home collect sample from the victory of the managments."
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
            <div>
              <h3>Title one</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur aperiam sequi, dolorum nostrum veniam sunt reprehenderit
                repellendus natus numquam repudiandae distinctio doloribus!
                Asperiores modi minima a pariatur optio consequuntur magni.
              </p>
            </div>
            <div>
              <h3>Title one</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur aperiam sequi, dolorum nostrum veniam sunt reprehenderit
                repellendus natus numquam repudiandae distinctio doloribus!
                Asperiores modi minima a pariatur optio consequuntur magni.
              </p>
            </div>
            <div>
              <h3>Title one</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur aperiam sequi, dolorum nostrum veniam sunt reprehenderit
                repellendus natus numquam repudiandae distinctio doloribus!
                Asperiores modi minima a pariatur optio consequuntur magni.
              </p>
            </div>
            <div>
              <h3>Title one</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur aperiam sequi, dolorum nostrum veniam sunt reprehenderit
                repellendus natus numquam repudiandae distinctio doloribus!
                Asperiores modi minima a pariatur optio consequuntur magni.
              </p>
            </div>
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
          />
          <IndexGrid
            title="Smart Features"
            description="Get your blood tests delivered at let home collect sample from the victory of the managments."
          />
          <IndexGrid
            title="Smart Features"
            description="Get your blood tests delivered at let home collect sample from the victory of the managments."
          />
          <IndexGrid
            title="Smart Features"
            description="Get your blood tests delivered at let home collect sample from the victory of the managments."
          />
          <IndexGrid
            title="Smart Features"
            description="Get your blood tests delivered at let home collect sample from the victory of the managments."
          />
          <IndexGrid
            title="Smart Features"
            description="Get your blood tests delivered at let home collect sample from the victory of the managments."
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default index;
