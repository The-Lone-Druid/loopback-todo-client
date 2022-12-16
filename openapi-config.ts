import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "http://localhost:8080/explorer/openapi.json",
  apiFile: "./src/services/emptyApi.ts",
  apiImport: "emptySplitApi",
  outputFiles: {
    "./src/services/pingApi.ts": {
      filterEndpoints: [/ping/i],
      exportName: "pingApi"
    },
    "./src/services/todoApi.ts": {
      filterEndpoints: [/todos/i],
      exportName: "todoApi"
    }
  },
  hooks: {
    lazyQueries: true,
    mutations: true,
    queries: false
  },
  endpointOverrides: [
    {
      pattern: "getPing",
      type: "mutation"
    },
    {
      pattern: "getTodos",
      type: "mutation"
    }
  ]
};

export default config;
