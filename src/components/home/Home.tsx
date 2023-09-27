import { useRef, useState } from "react";
import background from "../../assets/images/quiz-background.jpg";
import classes from "./Home.module.css";

import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const onClickRedirectHandler = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate("quiz");
    }, 500);
  };

  return (
    <>
      <AnimatePresence>
        {!isExiting && (
          <>
            <motion.div className={classes["background-image"]} exit={{ y: -200, opacity: 0 }}>
              <img src={background} alt="Background quiz image" />
              <motion.h1
                className={classes.title}
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, type: "spring", bounce: 0.5 }}
              >
                Welcome to tech quiz!
              </motion.h1>

              <motion.p
                className={classes.text}
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.5, delay: 1.2 }}
              >
                Test your knowledge in all areas of technology
              </motion.p>

              <motion.button
                onClick={onClickRedirectHandler}
                initial={{ y: -200, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: [0.8, 1.5, 1] }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.5, delay: 2.4 }}
                className={classes["quiz-button"]}
              >
                Start quiz
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
