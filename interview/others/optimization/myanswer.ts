const test = (obj) => {
  const Info = {
    2: ["inactive", { 0: ["active", "回复消息"], 1: ["answered", "已回复"] }],
    3: ["inactive", "退款中"],
    4: ["inactive", "已退款"],
    7: ["inactive", "已结束"],
    31: ["inactive", "退款异常"],
    32: ["inactive", "退款异常"],
  };
  const [tempClass, tempText] = Info[obj.info.status];
  obj.noteClass = tempClass;
  if (typeof tempText === "object") {
    const [c, t] = tempText[Number(obj.info.noMoreQuestion)];
    obj.noteClass = c;
    obj.noteText = t;
  } else {
    obj.noteText = tempText;
  }
  console.log(`class: ${obj.noteClass} text:${obj.noteText}`);
};

test({
  info: {
    status: 2,
    noMoreQuestion: false,
  },
});
