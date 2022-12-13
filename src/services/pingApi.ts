import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPing: build.mutation<GetPingApiResponse, GetPingApiArg>({
      query: () => ({ url: `/ping`, method: "GET" }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as pingApi };
export type GetPingApiResponse = /** status 200 Ping Response */ PingResponse;
export type GetPingApiArg = void;
export type PingResponse = {
  greeting?: string;
  date?: string;
  url?: string;
  headers?: {
    "Content-Type"?: string;
    [key: string]: any;
  };
};
export const { useGetPingMutation } = injectedRtkApi;
