import { getItem, setItem } from "@/utils/asyncStorage";
import { useEffect, useState } from "react";

export enum ECacheStatus {
  STARTED = "stated",
  LOADING = "loading",
  LOADED = "loaded",
  ERROR = "error",
}

function useCache<T = unknown>(key: string) {
  const [cachedValue, setCachedValue] = useState<Partial<T>>();
  const [status, setStatus] = useState<ECacheStatus>(ECacheStatus.STARTED);

  const chargeCachedValue = async () => {
    const item = await getItem(key);
    setCachedValue(JSON.parse(item ?? ""));
  };

  const updateCachedValue = async (values: Partial<T>) => {
    setStatus(ECacheStatus.LOADING);
    const stringfiedValues = JSON.stringify(values);
    await setItem(key, stringfiedValues)
      .catch(() => setStatus(ECacheStatus.ERROR))
      .finally(() => {
        setCachedValue(values);
        setStatus(ECacheStatus.LOADED);
      });
  };

  useEffect(() => {
    setStatus(ECacheStatus.LOADING);
    chargeCachedValue()
      .then(() => setStatus(ECacheStatus.LOADED))
      .catch(() => setStatus(ECacheStatus.ERROR));
  }, []);

  return {
    status,
    cachedValue: cachedValue,
    setCachedValue: updateCachedValue,
  };
}

export default useCache;
