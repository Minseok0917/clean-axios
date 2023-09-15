import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface config {
  [key: string]: (...args: any[]) => AxiosRequestConfig;
}
type msss = Record<string, (...args: any[]) => AxiosRequestConfig>;

const instance = axios.create({
  baseURL: "https://naver.com",
});

const services = {
  fetchUser: (name: string) => ({
    method: "GET",
    url: `/${name}`,
  }),
  createUser: (name: string) => ({
    method: "POST",
    url: `/${name}`,
  }),
};

type FunctionType = (...args: any[]) => AxiosRequestConfig;

function upgrade<T extends Record<string, FunctionType>>(services: T) {
  type FunctionKeys = keyof T;
  type ParametersMapping = {
    [K in FunctionKeys]: Parameters<T[K]>;
  };

  const upgraded = {} as {
    [K in FunctionKeys]: (...args: ParametersMapping[K]) => Promise<AxiosResponse<any, any>>;
  };

  for (const key in services) {
    const fn = services[key];
    upgraded[key] = (...args: any[]): Promise<AxiosResponse<any, any>> => {
      console.log(`Calling ${key} with `, args);
      return fn(...args);
    };
  }

  return upgraded;
}

const { fetchUser } = upgrade(services);

const services2: msss = {
  fetchUser: (name: string): AxiosRequestConfig => ({
    method: "GET",
    url: `/${name}`,
  }),
  createUser: (name: string): AxiosRequestConfig => ({
    method: "POST",
    url: `/${name}`,
  }),
};

// function backup<T extends typeof services>(services: T) {}
