import React, { useState, useEffect } from "react";
// import classes from "./Trivia.module.scss";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const TriviaGen = () => {
  const [limit, setLimit] = useState(1);
  const [trivia, setTrivia] = useState([]);
  const [category, setCategory] = useState(null);
  const catString =
    "Select artliterature language sciencenature general fooddrink peopleplaces geography historyholidays entertainment toysgames music mathematics religionmythology sportsleisure";

  const catList = catString.split(" ");
  const options = {
    method: "GET",
    params: {
      category: category ? category : null,
      limit: limit ? limit : null,
    },
    url: "https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia",
    headers: {
      "X-RapidAPI-Key": "7f697b625bmsha5c6f375ba12ab8p1d97eajsn3a3312f3aa9b",
      "X-RapidAPI-Host": "trivia-by-api-ninjas.p.rapidapi.com",
    },
  };

  const getTrivia = async () => {
    try {
      const response = await axios.request(options);
      setTrivia(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTrivia();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Trivia Generator</h1>
        <p>
          Select the category and number of triva you would like and click on
          the generate button below!
        </p>
      </div>
      {/* <div className="card"> */}
      <Swiper
        className="card"
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        // simulateTouch={true}

        modules={[Pagination]}
      >
        {trivia.map((trivia, i) => {
          return (
            <SwiperSlide key={i} className="card-wrapper">
              <div className="question">
                <span>Question :</span>
                {"  "}
                {trivia.question}?
              </div>
              <div className="answer">
                <span>Answer : </span>
                {trivia.answer}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="end">
        <div className="input">
          <p htmlFor="select">Category:</p>
          <select
            className="select"
            onChange={(e) => setCategory(e.target.value)}
          >
            {catList.map((tag, i) => {
              return (
                <option value={tag} key={i}>
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </option>
              );
            })}
          </select>
        </div>
        <div className="input">
          <p htmlFor="select">Limit:</p>
          <input
            type="number"
            className="limit"
            min="1"
            placeholder="1-30"
            onChange={(e) => setLimit(e.target.value)}
          />
        </div>
        <button className="button" onClick={getTrivia}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default TriviaGen;
