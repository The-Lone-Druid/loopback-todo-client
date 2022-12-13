import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "http://localhost:8081/openapi.json",
  apiFile: "./src/services/emptyApi.ts",
  apiImport: "emptySplitApi",
  outputFiles: {
    "./src/services/pingApi.ts": {
      filterEndpoints: [/ping/i],
      exportName: "pingApi"
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
