import React from "react";

import styles from "./SearchedIngredient.module.css";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const SearchedIngredient = ({ allSearchIngredient }) => {
  let navigate = useNavigate();

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.searched_ingredient_container}
    >
      {allSearchIngredient ? (
        <div className={styles.searched_ingredient_inner_container}>
          {allSearchIngredient.map((meal) => {
            return (
              <div
                className={styles.card_meal}
                key={meal.idMeal}
                onClick={() => {
                  navigate(`/lookup/${meal.idMeal}`);
                }}
              >
                <h3>{meal.strMeal}</h3>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <div className={styles.gradient}></div>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>No Results</h2>
      )}
    </motion.div>
  );
};

export default SearchedIngredient;
