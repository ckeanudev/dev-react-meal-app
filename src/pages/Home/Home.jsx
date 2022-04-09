import React, { useState, useEffect, useCallback } from "react";

import styles from "./Home.module.css";

import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Category from "../../components/Category/Category";
import SearchedIngredient from "../../components/SearchedIngredient/SearchedIngredient";

import { motion } from "framer-motion";

const Home = () => {
  const [searchIngredient, setSearchIngredient] = useState("");
  const [allSearchIngredient, setAllSearchIngredient] = useState([]);

  const [showSearchedsIngredient, setShowSearchedsIngredient] = useState(false);

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      if (searchIngredient) {
        getSearchIngredient(searchIngredient).then(() => {
          setShowSearchedsIngredient(true);
        });
      }
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  const getSearchIngredient = async (search) => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
    );
    const data = await api.json();
    setAllSearchIngredient(data.meals);
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.home_container}
    >
      <div className={styles.home_inner_container}>
        {/* ------------------------- */}
        <div className={styles.search_container}>
          <div className={styles.search_inner_container}>
            <input
              type="text"
              placeholder="Enter an Ingredient"
              value={searchIngredient}
              onChange={(e) => {
                setSearchIngredient(e.target.value);
              }}
            />
            <button
              onClick={() => {
                if (searchIngredient) {
                  getSearchIngredient(searchIngredient).then(() => {
                    setShowSearchedsIngredient(true);
                  });
                }
              }}
            >
              <BiSearch color="white" />
            </button>
          </div>
        </div>
        {/* ------------------------- */}
        {showSearchedsIngredient ? (
          <button
            className={styles.back_category}
            onClick={() => {
              setShowSearchedsIngredient(false);
              setSearchIngredient("");
            }}
          >
            <AiOutlineArrowLeft /> Back
          </button>
        ) : (
          <h1 className={styles.h1_category}>Select a Category</h1>
        )}
        {showSearchedsIngredient ? (
          <SearchedIngredient allSearchIngredient={allSearchIngredient} />
        ) : (
          <Category />
        )}
      </div>
    </motion.div>
  );
};

export default Home;
