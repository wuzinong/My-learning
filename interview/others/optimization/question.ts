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
