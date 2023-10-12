import { getItem } from "@/utils/asyncStorage";
import {
  TOKEN_STORAGE_KEY,
  TUseAuthentication,
} from "@/hooks/useAuthentication";

export const getToken = async (): Promise<
  TUseAuthentication | Record<string, undefined>
> => {
  const stringifiedToken = await getItem(TOKEN_STORAGE_KEY);
  return JSON.parse(stringifiedToken ?? "{}");
};
