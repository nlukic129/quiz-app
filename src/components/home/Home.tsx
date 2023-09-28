import { useState } from "react";
import background from "../../assets/images/quiz-background.jpg";
import classes from "./Home.module.css";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { scroll } from "framer-motion";
import animateScrollTo from "animated-scroll-to";

const Home = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [viewPosition, setViewPosition] = useState("top");
  let lastScrollTop = Number((window.pageYOffset || document.documentElement.scrollTop).toFixed(1));

  scroll((scroll) => {
    let scrollPosition = Number(scroll.toFixed(1));
    if (scrollPosition > lastScrollTop) {
      animateScrollTo(1000);
    } else if (scrollPosition < lastScrollTop) {
      animateScrollTo(-1000);
    }

    lastScrollTop = scrollPosition <= 0 ? 0 : Number(scrollPosition.toFixed(1));
  });

  const scrollHandler = () => {
    if (viewPosition === "top") {
      animateScrollTo(1000);
      setViewPosition("bottom");
    } else if (viewPosition === "bottom") {
      animateScrollTo(-1000);
      setViewPosition("top");
    }
  };

  const onClickRedirectHandler = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate("quiz");
    }, 150);
  };

  return (
    <>
      <div className={classes["scrolling-box"]}>
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
              <div className={`${classes["arrow-down"]} ${classes["arrow"]}`} onClick={scrollHandler}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </>
          )}
        </AnimatePresence>

        <div className={classes["background-about"]}>
          <motion.div
            className={`${classes["arrow-up"]} ${classes["arrow"]}`}
            onClick={scrollHandler}
            initial={{ y: 300, opacity: 0, rotate: 0 }}
            whileInView={{ y: 0, opacity: 1, rotate: 180 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
          <motion.div className={classes.about} viewport={{ once: true, amount: 0.8 }}>
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.8 }}>
              About the App
            </motion.h2>
            <motion.p
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              The Tech Quiz App is a fun and educational platform that allows you to challenge yourself and learn more about various tech-related
              topics. Whether you're a tech enthusiast or just curious about the latest advancements in the industry, our quizzes cover a wide range
              of subjects, including:
            </motion.p>
            <motion.ul viewport={{ once: true, amount: 0.8 }}>
              <motion.li initial={{ x: -300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 1.5 }}>
                Programming languages
              </motion.li>
              <motion.li initial={{ x: 300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 1.8 }}>
                Web development
              </motion.li>
              <motion.li initial={{ x: -300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 2.1 }}>
                Hardware and software
              </motion.li>
              <motion.li initial={{ x: 300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 2.4 }}>
                Artificial intelligence
              </motion.li>
              <motion.li initial={{ x: -300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 2.7 }}>
                Data science
              </motion.li>
            </motion.ul>
            <motion.p
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, type: "spring", bounce: 0.5, delay: 3.2 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Each quiz consists of multiple-choice questions that test your knowledge and problem-solving skills. You can compete with friends, track
              your progress, and earn badges as you master different topics.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
