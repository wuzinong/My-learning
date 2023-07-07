import { useState, useMemo, useEffect } from "react";

const UP = "up";
const DOWN = "down";
const LEFT = "left";
const RIGHT = "right";
let started = false;
let interval = null;

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

const ColorCode = () => {
  var makingColorCode = "0123456789ABCDEF";
  var finalCode = "#";
  for (var counter = 0; counter < 6; counter++) {
    finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)];
  }
  return finalCode;
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
  const result = direction[arr[0]];

  // console.log("-----------");
  // console.log("From ", PointMap[index], "-", index, "---to ", result);
  return result;
};

const Circle = ({ st, i }) => {
  return (
    <div
      className="circle"
      data-index={i}
      style={{
        ...st,
        backgroundColor: `${ColorCode()}`,
        textAlign: "center",
      }}
    >
      {i}
    </div>
  );
};

const playCircle = (num, size) => {
  started = true;

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
    if (i === num * num - 1) direction = "bottomRight";
    if (i === num * (num - 1)) direction = "bottomLeft";

    PointMap[i] = direction;
  });

  const dom = document.getElementsByClassName("circle");
  const circles = Array.prototype.slice.call(dom, 0);
  interval = setInterval(() => {
    circles.forEach((c) => {
      debugger;
      //moving
      let index = Number(c.getAttribute("data-index"));
      let newIndex = null;
      const direction = getRanomDirection(PointMap, index);
      // console.log("previsous index ", index, direction);
      // console.log("transform ", c.style.transform);
      const numArr = c.style.transform.match(/[-]?[0-9][0-9]*/g);

      let [tX, tY] = numArr ?? [0, 0];
      if (direction === UP) {
        newIndex = index - num;
        tY -= size;
      }
      if (direction === DOWN) {
        newIndex = index + num;
        tY = tY - 0 + size;
      }
      if (direction === LEFT) {
        newIndex = index - 1;
        tX -= size;
      }
      if (direction === RIGHT) {
        newIndex = index + 1;
        tX = tX - 0 + size;
      }
      if (newIndex > num * num - 1 || newIndex < 0) return;
      // console.log("Now index ", newIndex);

      //Move Circle
      c.style.transform = `translate(${tX ?? 0}px, ${tY ?? 0}px)`;
      console.log("c.style.transform  ", c.style.transform);
      console.log("end ==========================================");
      // setTimeout(() => {
      //   clearInterval(interval);
      // }, 4000);
      //Set updated Index
      c.setAttribute("data-index", newIndex);
      //Collision detection
    });
  }, 3000);
};

const Stag = ({ a, b }) => {
  const size = 30;
  const randomNums = getRandomPos(a, b);
  const arr = new Array(a * a).fill(0);
  useEffect(() => {
    if (!started) playCircle(a, size);
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
  const [a, setA] = useState(5);
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
    started = false;
    clearInterval(interval);
    if (!a || !b) {
      console.error("please input number");
      return;
    }
    setNum(Math.random());
  };
  const stop = () => {
    started = false;
    clearInterval(interval);
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
          <button onClick={stop}>Stop</button>
        </div>
        {MemoStag}
      </div>
    </div>
  );
}
