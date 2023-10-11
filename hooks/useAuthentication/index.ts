import { getItem, setItem } from "@/utils/asyncStorage";
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

  const getToken = async () => {
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

  useEffect(() => {
    reloadToken();
  }, []);

  return {
    isGrabbingToken,
    bearerToken,
    refreshToken,
    setToken,
    getToken,
    reloadToken,
  };
};

export default useAuthentication;
