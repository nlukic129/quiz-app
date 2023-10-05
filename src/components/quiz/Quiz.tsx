import { AnimatePresence, motion } from "framer-motion";
import classes from "./Quiz.module.css";
import DropDown from "../ui/DropDown";
import { useEffect, useState } from "react";
import { fetchQuestions } from "../../util/http";

const defaultCategoryText = "All Categories";
const defaultDifficultyText = "All the difficulties";
const defaultLimitText = "No Limit Questions";

const categories = [
  { value: "Default", text: defaultCategoryText },
  { value: "Linux", text: "Linux" },
  { value: "DevOps", text: "DevOps" },
  { value: "Networking", text: "Networking" },
  { value: "Programming ", text: "Programming " },
  { value: "Cloud", text: "Cloud" },
  { value: "Docker", text: "Docker" },
  { value: "Kubernetes", text: "Kubernetes" },
];

const difficulties = [
  { value: "Default", text: defaultDifficultyText },
  { value: "Easy", text: "Easy" },
  { value: "Medium", text: "Medium" },
  { value: "Hard", text: "Hard" },
];

const limits = [
  { value: "Default", text: defaultLimitText },
  { value: "10", text: "10 Questions" },
  { value: "20", text: "20 Questions" },
  { value: "30", text: "30 Questions" },
];

const Quiz = () => {
  const [selectedCategory, setSelectedCategory]: any = useState("Default");
  const [selectedDifficulty, setSelectedDifficulty]: any = useState("Default");
  const [selectedLimit, setSelectedLimit]: any = useState("Default");

  const [isSelected, setIsSelected]: any = useState(false);

  const selectCategoryHandler = (category: string) => {
    setSelectedCategory(category);
  };

  const selectDifficultyHandler = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
  };

  const selectLimitHandler = (limit: string) => {
    setSelectedLimit(limit);
  };

  useEffect(() => {
    checkIfAnySelected();
  }, [selectedCategory, selectedDifficulty, selectedLimit]);

  const checkIfAnySelected = () => {
    if (checkIfSelected(selectedCategory) || checkIfSelected(selectedDifficulty) || checkIfSelected(selectedLimit)) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  const checkIfSelected = (value: string) => {
    return value !== "Default";
  };

  const startQuizHandler = () => {
    const parameters = {
      category: checkIfSelected(selectedCategory) ? selectedCategory : "",
      difficulty: checkIfSelected(selectedDifficulty) ? selectedDifficulty : "",
      limit: checkIfSelected(selectedLimit) ? selectedLimit : "",
    };

    fetchQuestions(parameters);
  };

  return (
    <motion.div className={classes["quiz-background"]} initial={{ y: -500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "just" }}>
      <div className={classes.filters}>
        <DropDown items={categories} onSelect={selectCategoryHandler} title={defaultCategoryText} />
        <DropDown items={difficulties} onSelect={selectDifficultyHandler} title={defaultDifficultyText} />
        <DropDown items={limits} onSelect={selectLimitHandler} title={defaultLimitText} />
      </div>
      <AnimatePresence>
        {isSelected ? (
          <motion.div
            className={classes.start}
            key="selected"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.5 }}
          >
            <p>Selected</p>
            <button onClick={startQuizHandler}>Start</button>
          </motion.div>
        ) : (
          <motion.div
            className={classes.start}
            key="not-selected"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.5 }}
          >
            <p>Not selected</p>
            <button onClick={startQuizHandler}>Start</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Quiz;
