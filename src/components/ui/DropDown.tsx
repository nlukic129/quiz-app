import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

import classes from "./DropDown.module.css";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const DropDown = ({ items, onSelect, title }: any) => {
  const [selected, setSelected] = useState(title);

  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const selectHandler = (event: any) => {
    const selectedItemText = event.currentTarget.textContent;
    const selectedItemValue = event.currentTarget.getAttribute("value");
    onSelect(selectedItemValue);
    setSelected(selectedItemText);
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes["drop-down"]}>
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
          {items.map((item: any) => (
            <motion.li
              value={item.value}
              onClick={selectHandler}
              whileHover={{ backgroundColor: "rgb(225, 190, 248)", scale: 1.1, marginRight: 30, cursor: "pointer" }}
              key={item.value}
            >
              {item.text}
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

export default DropDown;

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
