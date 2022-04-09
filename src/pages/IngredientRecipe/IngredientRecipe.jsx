import React, { useEffect, useState } from "react";

import styles from "./IngredientRecipe.module.css";

import { useParams } from "react-router-dom";

import { motion } from "framer-motion";

const IngredientRecipe = () => {
  let params = useParams();

  const [mealInfo, setMealInfo] = useState([]);

  const [recipeFocus, setRecipeFocus] = useState("Ingredients");

  const focusStyleBtn = {
    backgroundColor: "#e85d04",
  };

  useEffect(() => {
    getMealInfo(params.id);
  }, []);

  const getMealInfo = async (id) => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await api.json();
    setMealInfo(data.meals[0]);
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.lookup_container}
    >
      <div className={styles.lookup_inner_container}>
        {mealInfo ? (
          <>
            <h2>{mealInfo.strMeal}</h2>
            <div className={styles.lookup_inner_grid_container}>
              <div className={styles.lookup_left}>
                <img
                  className={styles.meal_img}
                  src={mealInfo.strMealThumb}
                  alt=""
                />
                <div className={styles.left_content}>
                  <h3>
                    {mealInfo.strCategory} | {mealInfo.strArea}
                  </h3>
                  <h4>Tags: {mealInfo.strTags}</h4>
                  <a
                    className={styles.meal_YT_link}
                    href={mealInfo.strSource}
                    target="_blank"
                  >
                    About the Meal
                  </a>
                  <a
                    className={styles.meal_YT_link}
                    href={mealInfo.strYoutube}
                    target="_blank"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
              <div className={styles.lookup_right}>
                <div className={styles.button_container}>
                  <button
                    style={recipeFocus === "Ingredients" ? focusStyleBtn : {}}
                    onClick={() => {
                      setRecipeFocus("Ingredients");
                    }}
                  >
                    Ingredients
                  </button>
                  <button
                    style={recipeFocus === "Instructions" ? focusStyleBtn : {}}
                    onClick={() => {
                      setRecipeFocus("Instructions");
                    }}
                  >
                    Instructions
                  </button>
                </div>
                <div className={styles.right_content}>
                  {recipeFocus === "Ingredients" ? (
                    <div>
                      <h3>Ingredients</h3>
                      {mealInfo.strIngredient1 && (
                        <li>
                          {mealInfo.strMeasure1} - {mealInfo.strIngredient1}
                        </li>
                      )}
                      {mealInfo.strIngredient2 && (
                        <li>
                          {mealInfo.strMeasure2} - {mealInfo.strIngredient2}
                        </li>
                      )}
                      {mealInfo.strIngredient3 && (
                        <li>
                          {mealInfo.strMeasure3} - {mealInfo.strIngredient3}
                        </li>
                      )}
                      {mealInfo.strIngredient4 && (
                        <li>
                          {mealInfo.strMeasure4} - {mealInfo.strIngredient4}
                        </li>
                      )}
                      {mealInfo.strIngredient5 && (
                        <li>
                          {mealInfo.strMeasure5} - {mealInfo.strIngredient5}
                        </li>
                      )}
                      {mealInfo.strIngredient6 && (
                        <li>
                          {mealInfo.strMeasure6} - {mealInfo.strIngredient6}
                        </li>
                      )}
                      {mealInfo.strIngredient7 && (
                        <li>
                          {mealInfo.strMeasure7} - {mealInfo.strIngredient7}
                        </li>
                      )}
                      {mealInfo.strIngredient8 && (
                        <li>
                          {mealInfo.strMeasure8} - {mealInfo.strIngredient8}
                        </li>
                      )}
                      {mealInfo.strIngredient9 && (
                        <li>
                          {mealInfo.strMeasure9} - {mealInfo.strIngredient9}
                        </li>
                      )}
                      {mealInfo.strIngredient10 && (
                        <li>
                          {mealInfo.strMeasure10} - {mealInfo.strIngredient10}
                        </li>
                      )}
                      {mealInfo.strIngredient11 && (
                        <li>
                          {mealInfo.strMeasure11} - {mealInfo.strIngredient11}
                        </li>
                      )}
                      {mealInfo.strIngredient12 && (
                        <li>
                          {mealInfo.strMeasure12} - {mealInfo.strIngredient12}
                        </li>
                      )}
                      {mealInfo.strIngredient13 && (
                        <li>
                          {mealInfo.strMeasure13} - {mealInfo.strIngredient13}
                        </li>
                      )}
                      {mealInfo.strIngredient14 && (
                        <li>
                          {mealInfo.strMeasure14} - {mealInfo.strIngredient14}
                        </li>
                      )}
                      {mealInfo.strIngredient15 && (
                        <li>
                          {mealInfo.strMeasure15} - {mealInfo.strIngredient15}
                        </li>
                      )}
                      {mealInfo.strIngredient16 && (
                        <li>
                          {mealInfo.strMeasure16} - {mealInfo.strIngredient16}
                        </li>
                      )}
                      {mealInfo.strIngredient17 && (
                        <li>
                          {mealInfo.strMeasure17} - {mealInfo.strIngredient17}
                        </li>
                      )}
                      {mealInfo.strIngredient18 && (
                        <li>
                          {mealInfo.strMeasure18} - {mealInfo.strIngredient18}
                        </li>
                      )}
                      {mealInfo.strIngredient19 && (
                        <li>
                          {mealInfo.strMeasure19} - {mealInfo.strIngredient19}
                        </li>
                      )}
                      {mealInfo.strIngredient20 && (
                        <li>
                          {mealInfo.strMeasure20} - {mealInfo.strIngredient20}
                        </li>
                      )}
                    </div>
                  ) : (
                    <div>
                      <h3>Instructions</h3>
                      <p>{mealInfo.strInstructions}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1>No Results</h1>
        )}
      </div>
    </motion.div>
  );
};

export default IngredientRecipe;
