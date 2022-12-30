import { MockMethod } from "vite-plugin-mock";
import Mock from "mockjs";

const Random = Mock.Random;
export default [
  {
    url: "/api/get",
    method: "get",
    response: ({ query }) => {
      return {
        code: 0,
        data: Mock.mock({
          "list|1-10": [
            {
              "id|+1": 1,
              "name|+1": [
                "Peter",
                "John",
                "Linda",
                "Simon",
                "Diego",
                "Silva",
                "Adam",
                "Davis",
                "Wilson",
                "Karida",
                "Michaela",
                "Lindsay",
                "Mabel",
                "Lisa",
                "Madge",
                "Cora",
                "Marcia",
                "Nicole",
              ],
              "gender|+1": ["male", "female"],
            },
          ],
        }),
      };
    },
  },
  {
    url: "/api/post",
    method: "post",
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: "vben",
      },
    },
  },
  {
    url: "/api/text",
    method: "post",
    rawResponse: async (req, res) => {
      let reqbody = "";
      await new Promise((resolve) => {
        req.on("data", (chunk) => {
          reqbody += chunk;
        });
        req.on("end", () => resolve(undefined));
      });
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
] as MockMethod[];
