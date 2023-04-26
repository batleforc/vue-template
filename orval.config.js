module.exports = {
  api: {
    input: {
      target: "./swagger.json",
    },
    output: {
      target: "./src/api/api.ts",
      schemas: "./src/model",
      mode: "tags-split",
      prettier: true,
      headers: true,
    },
  },
};
