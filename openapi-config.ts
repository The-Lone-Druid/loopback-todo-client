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
  hooks: true,
  endpointOverrides: [
    {
      pattern: "getPing",
      type: "mutation"
    }
  ]
};

export default config;
