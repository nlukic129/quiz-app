import { motion, stagger, useAnimate } from "framer-motion";
import classes from "./Quiz.module.css";
import { useEffect, useState } from "react";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const Quiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const [selected, setSelected] = useState("Menu");

  const selectHandler = (select: any) => {
    setSelected(select.target.textContent);
  };

  return (
    <motion.div className={classes["quiz-background"]} initial={{ y: -500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "just" }}>
      <motion.nav className={classes.menu} ref={scope} initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <motion.button whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
          {selected}
          <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </div>
        </motion.button>
        <ul
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
        >
          <li value="Item 1" onClick={selectHandler}>
            Item 1
          </li>
          <li value="Item 2" onClick={selectHandler}>
            Item 2
          </li>
          <li value="Item 3" onClick={selectHandler}>
            Item 3
          </li>
          <li value="Item 4" onClick={selectHandler}>
            Item 4
          </li>
          <li value="Item 5" onClick={selectHandler}>
            Item 5
          </li>
        </ul>
      </motion.nav>
    </motion.div>
  );
};

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen ? "inset(0% 0% 0% 0% round 10px)" : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate("li", isOpen ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.3, filter: "blur(20px)" }, {
      duration: 0.2,
      delay: isOpen ? staggerMenuItems : 0,
    });
  }, [isOpen]);

  return scope;
}

export default Quiz;
