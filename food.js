import React, { useEffect, useState } from "react";
import "./App.css";
import "./food.css";
import "./text.css";

import data from "./Data";

function Food() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setMeals(data);
  }, []);
  const [values, setValues] = useState(0);
  const [mealArray, setMealArray] = useState([]);
  const [hide, setHide] = useState(false);
  function handleHide() {
    if (hide === false) {
      setHide(true);
    } else {
      setHide(false);
    }
  }

  const handleclick = (meal) => {
    const newMeal = data.find((m) => m.id === meal.id);
    if (!newMeal) {
      return alert("Meal already exists on cart");
    }
    setMealArray([...mealArray, newMeal]);
  };
  const handleDelete = (myprops) => {
    const Newlist = mealArray.filter((items) => items.id !== myprops.id);
    setMealArray(Newlist);
    console.log(Newlist);
  };
  const Toggle = () => {
    return (
      <div className="toggle">
        <nav>
          <div className="inside-navbar">
            <span>Home</span> <span>About Us</span> <span>Contact Us</span>
          </div>
          <div className="hide">
            <p onClick={handleHide}> x</p>
            {hide ? (
              <div className="cardList">
                {mealArray.map((item) => {
                  return (
                    <div className="itempucharse">
                      <img
                        key={item.id}
                        className="reserve-meals"
                        src={`./img/${item.url}`}
                        alt={item.name}
                      />

                      <button
                        className="remove"
                        onClick={() => handleDelete(item)}
                      >
                        {item.Remove}
                      </button>
                      <button>{values}</button>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    );
  };

  // const setting = () => {
  //   setHide(!hide);
  // };

  const mapping = meals.map((data) => {
    return (
      <div className="food" key={data.id}>
        <div className="container1">
          <img src={`./img/${data.url}`} alt={data.text1} />
          <p className="name">{data.text1}</p>
          <button onClick={() => handleclick(data)} className="buy">
            {data.text}
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Toggle />
      {mapping}
    </div>
  );
}

export default Food;
