import React, { useContext } from "react";

import styleCat from "./Category.module.css";

import { motion } from "framer-motion";

import { AppContext } from "../../App";

import { useNavigate } from "react-router-dom";

const Category = () => {
  let navigate = useNavigate();

  const { categories } = useContext(AppContext);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styleCat.category_container}
    >
      {categories.map((type, i) => {
        return (
          <div
            className={styleCat.category_card}
            key={type.idCategory}
            onClick={() => {
              navigate(`/select/${type.strCategory}`);
            }}
          >
            <h3>{type.strCategory}</h3>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Category;
