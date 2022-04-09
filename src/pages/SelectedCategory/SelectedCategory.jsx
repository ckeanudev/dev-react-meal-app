import React, { useEffect, useState } from "react";

import styles from "./SelectedCategory.module.css";

import { useParams, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const SelectedCategory = () => {
  let navigate = useNavigate();
  let params = useParams();

  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    getSelectedCat(params);
  }, []);

  const getSelectedCat = async (type) => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${type.type}`
    );
    const data = await api.json();
    setAllCategory(data.meals);
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.selected_category_container}
    >
      <h1>{params.type}</h1>

      {allCategory ? (
        <div className={styles.selected_category_inner_container}>
          {allCategory.map((meal) => {
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

export default SelectedCategory;
