import { motion } from "framer-motion";
import classes from "./Quiz.module.css";
import DropDown from "../ui/DropDown";
import { useState } from "react";

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

  const selectCategoryHandler = (selectedCategory: string) => {
    setSelectedCategory(selectedCategory);
    checkIfSelected();
  };

  const selectDifficultyHandler = (selectedDifficulty: string) => {
    setSelectedDifficulty(selectedDifficulty);
    checkIfSelected();
  };

  const selectLimitHandler = (selectedLimit: string) => {
    setSelectedLimit(selectedLimit);
    checkIfSelected();
  };

  const checkIfSelected = () => {
    if (selectedCategory === "Default" && selectedDifficulty === "Default" && selectedLimit === "Default") {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  };

  return (
    <motion.div className={classes["quiz-background"]} initial={{ y: -500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "just" }}>
      <div className={classes.filters}>
        <DropDown items={categories} onSelect={selectCategoryHandler} title={defaultCategoryText} />
        <DropDown items={difficulties} onSelect={selectDifficultyHandler} title={defaultDifficultyText} />
        <DropDown items={limits} onSelect={selectLimitHandler} title={defaultLimitText} />
      </div>
    </motion.div>
  );
};

export default Quiz;
