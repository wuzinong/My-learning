const test = (obj) => {
  if (obj.info.status === 7) {
    obj.noteClass = "inactive";
    obj.noteText = "已结束";
  } else if (obj.info.status === 4) {
    obj.noteClass = "inactive";
    obj.noteText = "已退款";
  } else if (obj.info.status === 3) {
    obj.noteClass = "inactive";
    obj.noteText = "退款中";
  } else if (obj.info.status === 2) {
    if (obj.info.noMoreQuestion) {
      obj.noteText = "已回复";
      obj.noteClass = "answered";
    } else {
      obj.noteText = "回复消息";
      obj.noteClass = "active";
    }
  } else if (obj.info.status === 31 || obj.info.status === 32) {
    obj.noteText = "退款异常";
    obj.noteClass = "inactive";
  }

  console.log(`class: ${obj.noteClass} text: ${obj.noteText}`);
};
test({
  info: {
    status: 2,
    noMoreQuestion: false,
  },
});

export {};
//https://codesandbox.io/s/modern-firefly-g68yk6?file=/src/App.tsx
// import "./styles.css";

// type ObjType = {
//   info: {
//     status: number;
//     hasReplied?: boolean;
//   };
// };

// const GetMessage = (obj: ObjType) => {
//   let noteClass = "";
//   let noteText = "";
//   if (obj.info.status === 7) {
//     noteClass = "inactive";
//     noteText = "已结束";
//   } else if (obj.info.status === 4) {
//     noteClass = "inactive";
//     noteText = "已退款";
//   } else if (obj.info.status === 3) {
//     noteClass = "inactive";
//     noteText = "退款中";
//   } else if (obj.info.status === 2) {
//     if (obj.info.hasReplied) {
//       noteText = "已回复";
//       noteClass = "answered";
//     } else {
//       noteText = "回复消息";
//       noteClass = "active";
//     }
//   } else if (obj.info.status === 31 || obj.info.status === 32) {
//     noteText = "退款异常";
//     noteClass = "inactive";
//   }

//   console.log(`class: ${noteClass} text: ${noteText}`);
// };

// export default function App() {
//   const data: ObjType = {
//     info: {
//       status: 4,
//       hasReplied: true
//     }
//   };
//   GetMessage(data);

//   return null;
// }
