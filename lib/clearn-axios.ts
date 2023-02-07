import axios, { Axios, AxiosInstance } from "axios";

function addInstance(
  instance: AxiosInstance,
  instanceObjectAPI: object
): object {
  const instanceMap = ([key, callback]: [string, Function]) => [
    key,
    (...parameters: any[]) => instance(callback(...parameters)),
  ];
  return Object.fromEntries(Object.entries(instanceObjectAPI).map(instanceMap));
}

const instance = axios.create({
  baseURL: "https://naver.com",
});

const { fetchA } = addInstance(instance, {
  fetchA: (name: string, age: number) => ({
    method: "GET",
    url: "/",
  }),
});
