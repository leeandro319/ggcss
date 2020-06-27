import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map((item, i) => (
      <MenuItem i={i} key={i} contentItem={item.name} />
    ))}
  </motion.ul>
);

const itemIds = [
  {
    name: "Border",
  },
  {
    name: "Border Radius",
  },
  {
    name: "Box Shadow",
  },
  {
    name: "Text Shadow",
  },
  {
    name: "CSS Transform",
  },
];
