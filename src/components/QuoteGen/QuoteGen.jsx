import React, { useState, useEffect } from "react";
// import classes from "./QuoteGen.module.scss";
import axios from "axios";

const QuoteGen = () => {
  const [quote, setQuote] = useState();

  const quotes = {
    method: "GET",
    url: "https://quotes15.p.rapidapi.com/quotes/random/",
    headers: {
      "X-RapidAPI-Key": "7f697b625bmsha5c6f375ba12ab8p1d97eajsn3a3312f3aa9b",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };

  const getQuote = async () => {
    try {
      const response = await axios.request(quotes);
      setQuote(response.data);
      console.log(response.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Random Quote Generator</h1>
        <p>
          Presents a new quote every time you click on generate button below!
        </p>
      </div>
      <div className="card">
        <h2>" {quote?.content} "</h2>
        <p>-{quote?.originator?.name}</p>
      </div>
      <div className="end">
      <button onClick={getQuote} className="button">
        Generate!
        </button>
        </div>
    </div>
  );
};

export default QuoteGen;
