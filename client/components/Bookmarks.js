import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

const Bookmarked = () => {
  const { user } = useSelector(selectUser);
  console.log("this is the user on the bookmark page", user)
  const { recipes } = user;

  return (
    <div>
      <h1 className="bookmarkTitle">Bookmarked Meals</h1>
        <div className="bookmarksContainer">
          {recipes.map((meal) => (
            <div className="bookmarkItem">
              <h2>
              <a href={`/recipe?recipeId=${meal.id}`}>{meal.title}</a>
              </h2>
              <img src={meal.image} alt={meal.title} />
            </div>
          ))}
        </div>
    </div>
  );
};
export default Bookmarked;
