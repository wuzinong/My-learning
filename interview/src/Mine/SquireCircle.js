import { useState, useMemo, useEffect } from "react";

const UP = "up";
const DOWN = "down";
const LEFT = "left";
const RIGHT = "right";

const wrapper = {
  display: "flex",
  flexWrap: "wrap",
};
const box = {
  border: "1px solid red",
  boxSizing: "border-box",
};

const circle = {
  backgroundColor: "olive",
  borderRadius: "50%",
};

const getRandomPos = (num, pickNum, needsDouble = true) => {
  let seed = num * num;
  if (!needsDouble) seed = num;
  const arr = [Math.floor(Math.random() * seed)];
  let temp = Math.floor(Math.random() * seed);
  for (let i = 0; i < pickNum - 1; i++) {
    while (arr.includes(temp)) {
      if (arr.length >= pickNum) break;
      temp = Math.floor(Math.random() * seed);
    }
    arr.push(temp);
    temp = Math.floor(Math.random() * seed);
  }
  return arr;
};

const getRanomDirection = (PointMap, index) => {
  let direction = [UP, DOWN, LEFT, RIGHT];
  if (PointMap[index] === "left") direction = [RIGHT, UP, DOWN];
  if (PointMap[index] === "top") direction = [RIGHT, LEFT, DOWN];
  if (PointMap[index] === "right") direction = [LEFT, UP, DOWN];
  if (PointMap[index] === "bottom") direction = [RIGHT, UP, LEFT];
  if (PointMap[index] === "topLeft") direction = [RIGHT, DOWN];
  if (PointMap[index] === "topRight") direction = [LEFT, DOWN];
  if (PointMap[index] === "bottomLeft") direction = [RIGHT, UP];
  if (PointMap[index] === "bottomRight") direction = [LEFT, UP];
  const arr = getRandomPos(direction.length, 1, false);
  return direction[arr[0]];
};

const Circle = ({ st, i }) => {
  return (
    <div
      className="circle"
      data-index={i}
      style={{
        ...st,
      }}
    ></div>
  );
};

const playCircle = (num) => {
  const PointMap = {};
  const arr = new Array(num * num).fill(0);

  arr.forEach((v, i) => {
    let direction = "";

    if (i % num === 0) direction = "left";
    if ((i + 1) % num === 0) direction = "right";
    if (i < num) direction = "top";
    if (i > i - num && i > num * (num - 1)) direction = "bottom";
    //special points
    if (i === 0) direction = "topLeft";
    if (i === num - 1) direction = "topRight";
    if (i === num * num - 1) direction = "bottomLeft";
    if (i === num * (num - 1)) direction = "bottomRight";

    PointMap[i] = direction;
  });

  const dom = document.querySelectorAll(".circle");
  const circles = Array.prototype.slice.call(dom, 0);
  setInterval(() => {
    circles.forEach((c) => {
      //moving
      let index = c.getAttribute("data-index");
      const direction = getRanomDirection(PointMap, index);
      console.log("index ", index, direction);
      console.log("transform ", c.style.transform);
      //Moving animation

      //Set updated Index

      //Collision detection
      const temp = PointMap[index];
      if (!temp) {
      }
      c.style.transform = `translate(20px, 10px)`;
    });
  }, 1500);
};

const Stag = ({ a, b }) => {
  const size = 30;
  const [randomNums] = useState(getRandomPos(a, b));
  // a = 8;
  const arr = new Array(a * a).fill(0);
  useEffect(() => {
    playCircle(a);
  }, [a]);
  return (
    <div
      style={{
        ...wrapper,
        ...{ width: `${a * size}px`, height: `${a * size}px` },
      }}
    >
      {arr.map((val, index) => {
        const showCircle = randomNums.includes(index);
        return (
          <div
            key={index}
            data-index={index}
            style={{ ...box, ...{ width: `${size}px`, height: `${size}px` } }}
          >
            {index}
            {showCircle && (
              <Circle
                i={index}
                st={{
                  ...circle,
                  ...{ width: `${size}px`, height: `${size}px` },
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function App() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(2);
  const [num, setNum] = useState(0);
  const MemoStag = useMemo(() => <Stag a={a} b={b} />, [num]);
  const handleInput = (e, tag) => {
    if (tag === "a") {
      setA(e.target.value);
    } else {
      setB(e.target.value);
    }
  };
  const start = () => {
    if (!a || !b) {
      console.error("please input number");
      return;
    }
    setNum(Math.random());
  };
  return (
    <div className="App">
      <div>
        <div>
          <input
            type="number"
            min={1}
            onChange={(e) => {
              handleInput(e, "a");
            }}
            placeholder="number A"
            style={{ width: "40%" }}
          />
          <input
            type="number"
            min={1}
            onChange={(e) => {
              handleInput(e, "b");
            }}
            placeholder="number B"
            style={{ width: "40%" }}
          />
          <button onClick={start}>Start</button>
        </div>
        {MemoStag}
      </div>
    </div>
  );
}
