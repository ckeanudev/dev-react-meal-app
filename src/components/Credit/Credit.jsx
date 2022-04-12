import React, { useContext } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";

import styles from "./Credit.module.css";

import { AppContext } from "../../App";

import { motion } from "framer-motion";

const Credit = () => {
  const { setShowCredit } = useContext(AppContext);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.credit_container}
    >
      <div className={styles.credit_inner_container}>
        <button
          onClick={() => {
            setShowCredit(false);
          }}
        >
          <AiOutlineCloseCircle size={"1.5rem"} />
        </button>
        <p>
          Coded & Designed by{" "}
          <a href="https://ckn.netlify.app/" target="_blank">
            Ckeanu
          </a>
        </p>
        <div className={styles.line}></div>
        <p>
          Data from{" "}
          <a href="https://www.themealdb.com/" target="_blank">
            TheMealDB
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default Credit;
