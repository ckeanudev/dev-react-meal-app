import { createContext, useState, useEffect } from "react";

import "./App.css";
import { GiMeal } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";

import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

import Home from "./pages/Home/Home";
import SelectedCategory from "./pages/SelectedCategory/SelectedCategory";
import IngredientRecipe from "./pages/IngredientRecipe/IngredientRecipe";
import Credit from "./components/Credit/Credit";

export const AppContext = createContext();

function App() {
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState([]);

  const [showCredit, setShowCredit] = useState(false);

  useEffect(() => {
    getMealCategory();
  }, []);

  const getMealCategory = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const data = await api.json();
    setCategories(data.categories);
  };

  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        setShowCredit,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <nav>
            <div className="inner_nav">
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <div>
                  <GiMeal size={"1.6rem"} />
                  <h1>Meal App</h1>
                </div>
              </NavLink>

              <div
                className="credit"
                onClick={() => {
                  setShowCredit(true);
                }}
              >
                <MdOutlineDesignServices size={"1.5rem"} />
              </div>
            </div>
          </nav>
          {showCredit && <Credit />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select/:type" element={<SelectedCategory />} />
            <Route path="/lookup/:id" element={<IngredientRecipe />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
