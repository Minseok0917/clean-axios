export function useDebounce<T extends (...args: any[]) => any>(callback: T, delay: number = 300) {
  let timeout: number | null = null;
  return (...args: Parameters<T>): void => {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), delay);
  };
}

const b = useDebounce(function (name: string) {});

// @ts-ignore
function vanillaService(instance, instanceObjectAPI) {
  const instanceMap = ([key, callback]) => [key, (...parameters) => instance(callback(...parameters))];
  return Object.fromEntries(Object.entries(instanceObjectAPI).map(instanceMap));
}
