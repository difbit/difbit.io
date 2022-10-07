import React from 'react';
import "./App.css";


var AnnualReport = () => {
    return (
      <div
        style={{
          //display: 'flex',
          justifyContent: 'Left',
          alignItems: 'Left',
          height: '10vh'
        }}
      >
        <h1>Here are some pictures</h1>
        <div className="app">
            <div className="img-container">
                <img src="https://picsum.photos/200" alt="" />
            </div>
        </div>
      </div>
    );
};

export default AnnualReport;
