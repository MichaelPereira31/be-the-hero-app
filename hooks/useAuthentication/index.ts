import { getItem, removeItem, setItem } from "@/utils/asyncStorage";
import { useEffect, useState } from "react";

import { setToken as setApiToken } from "@/services";

export type TUseAuthentication = {
  token: string;
  refreshToken: string;
};

export const TOKEN_STORAGE_KEY = "@login-auth-tokens";

const useAuthentication = () => {
  const [bearerToken, setBearerToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [isGrabbingToken, setIsGrabbingToken] = useState(false);

  const isLogged = !!bearerToken;

  const setToken = async (params: TUseAuthentication) => {
    setIsGrabbingToken(true);

    setApiToken(params.token ?? "");
    setItem(TOKEN_STORAGE_KEY, JSON.stringify(params))
      .then(() => {
        setBearerToken(params.token);
        setRefreshToken(params.refreshToken);
      })
      .finally(() => setIsGrabbingToken(false));
  };

  const getToken = async (): Promise<TUseAuthentication> => {
    const stringifiedToken = await getItem(TOKEN_STORAGE_KEY);
    return JSON.parse(stringifiedToken ?? "{}");
  };

  const reloadToken = () =>
    getToken()
      .then(({ token, refreshToken }) => {
        setBearerToken(token);
        setApiToken(token);
        setRefreshToken(refreshToken);
      })
      .finally(() => {
        setIsGrabbingToken(true);
      });

  const clearToken = async () => {
    await removeItem(TOKEN_STORAGE_KEY);
    setBearerToken("");
    setRefreshToken("");
  };

  useEffect(() => {
    reloadToken();
  }, []);

  return {
    isLogged,
    isGrabbingToken,
    bearerToken,
    refreshToken,
    setToken,
    getToken,
    reloadToken,
    clearToken,
    extraHeaders: {
      Authorization: `Bearer ${bearerToken}`,
    },
  };
};

export default useAuthentication;
