import React from "react";
const alpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const MealIndex = () => {
  return (
    <div className="w-full flex justify-center items-center gap-2 py-16">
      {alpha.map((item) => {
        return (
          <div className="w-[50px] h-[40px] bg-blue-400 flex justify-center items-center rounded-sm">
            <h3>{item}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default MealIndex;
