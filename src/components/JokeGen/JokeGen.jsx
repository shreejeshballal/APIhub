import React, { useState, useEffect } from "react";
import axios from "axios";

const JokeGen = () => {
  const [tagList, setTagList] = useState([]);
  const [tag, setTag] = useState(false);
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    getTagList();
    getJoke();
  }, []);

  const tags = {
    method: "GET",
    url: "https://random-stuff-api.p.rapidapi.com/joke/tags",
    headers: {
      Authorization: "q9Oh7Lg7J0Hd",
      "X-RapidAPI-Key": "7f697b625bmsha5c6f375ba12ab8p1d97eajsn3a3312f3aa9b",
      "X-RapidAPI-Host": "random-stuff-api.p.rapidapi.com",
    },
  };

  const jokes = {
    method: "GET",
    url: `https://random-stuff-api.p.rapidapi.com/joke/${tag ? tag : "random"}`,
    headers: {
      Authorization: "oM8XsUiH6CC4",
      "X-RapidAPI-Key": "7f697b625bmsha5c6f375ba12ab8p1d97eajsn3a3312f3aa9b",
      "X-RapidAPI-Host": "random-stuff-api.p.rapidapi.com",
    },
  };

  const getTagList = async () => {
    try {
      const response = await axios.request(tags);
      const newList = ["random", ...response.data];
      setTagList(newList);
    } catch (error) {
      console.log(error);
    }
  };

  const getJoke = async () => {
    try {
      const response = await axios.request(jokes);
      setJoke(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Joke Generator</h1>
        <p>
          Select the category of joke you would like and click on the generate
          button below!
        </p>
      </div>
      <div className="card">
        <h2>"{joke?.message}"</h2>
      </div>
      <div className="end">
        <div className="input">
          <label htmlFor="select">Category:</label>
          <select
            className="select"
            onChange={(e) => setTag(e.target.value)}
          >
            {tagList.map((tag, i) => {
              return (
                <option value={tag} key={i}>
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </option>
              );
            })}
          </select>
        </div>
        <button className="button" onClick={getJoke}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default JokeGen;
