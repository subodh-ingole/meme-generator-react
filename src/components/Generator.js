import React, { useState } from "react";
import MemeData from "./MemeData";

const Generator = (props) => {
  const memeArray = MemeData.data.memes;
  function randomMeme() {
    const newMeme = memeArray[Math.floor(Math.random() * memeArray.length)].url;
    return newMeme;
  }

  const [memeContent, setMemeContent] = useState({
    topText: "",
    bottomText: "",
    meme: "https://i.imgflip.com/30b1gx.jpg",
  });

  function handleChange(event) {
    const {name,value,type} = event.target;
    setMemeContent(prev => ({
      ...prev,
      [name]: type === "button" ? randomMeme() :  value,
    }))
  }

  return (
    <div className="generator">
      <div className="generator--input-and-button">
        <div className="generator--input">
          <input
            onChange={handleChange}
            placeholder="Top Text"
            type="text"
            class="meme-input"
            name="topText"
            value={memeContent.topText}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Bottom Text"
            class="meme-input"
            name="bottomText"
            value={memeContent.bottomText}
          />
        </div>
        <button type="button" onClick={handleChange} className="generate-button" name="meme">
          Click Me
        </button>
      </div>
      <h1 className="top-text">{memeContent.topText}</h1>
      <h1 className="bottom-text">{memeContent.bottomText}</h1>
      <img className="meme" src={memeContent.meme} alt="meme" />
    </div>
  );
};

export default Generator;
