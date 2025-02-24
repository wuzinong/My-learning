import Mock from "mockjs";

export default Mock.mock(`/api/list`, "get", {
  "data|250": [
    {
      "id|+1": 1,
      name: /\d{5,10}/,
      progress: {
        "step1|1-100": 100,
        "step2|1-100": 100,
        "step3|1-100": 100
      },
      load: {
        "step1|1-100": 100,
        "step2|1-100": 100,
        "step3|1-100": 100
      },
      orderNum: /[A-Z]{3}[0-9]{5}/,
      deadline: '@datetime("yyyy-MM-dd HH:mm:ss")',
      customer: "@name()",
      turbineType: /[A-Z]{3}[0-9]{5}/,
      created: '@datetime("yyyy-MM-dd HH:mm:ss")',
      reviewer: "@name()"
    }
  ]
});
