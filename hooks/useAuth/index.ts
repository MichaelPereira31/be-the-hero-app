import { getItem, setItem } from "@/utils/asyncStorage";
import { useEffect, useState } from "react";

export type TUseAuthentication = {
  token: string;
  refreshToken: string;
};

export const TOKEN_STORAGE_KEY = "@login-auth-tokens";

const useAuthentication = () => {
  const [bearerToken, setBearerToken] = useState();
  const [refreshToken, setRefreshToken] = useState();

  const [isGrabbingToken, setIsGrabbingToken] = useState(false);

  const setToken = async (params: TUseAuthentication) => {
    setIsGrabbingToken(true);
    setItem(TOKEN_STORAGE_KEY, JSON.stringify(params))
      .then(() => {
        setBearerToken(bearerToken);
        setRefreshToken(refreshToken);
      })
      .finally(() => setIsGrabbingToken(false));
  };

  const getToken = async () => {
    return JSON.parse((await getItem(TOKEN_STORAGE_KEY)) || "{}");
  };

  const reloadToken = () =>
    getToken()
      .then(({ token, refreshToken }) => {
        setBearerToken(token);
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
