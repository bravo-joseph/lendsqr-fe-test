import Api from "./api";
import { GET_ALL_USERS } from "./endpoints";
import { ApiSuccessResponse, GET_ALL_USERS_RESPONSE } from "./response";

export const v1getAllUsers = async (): Promise<ApiSuccessResponse<GET_ALL_USERS_RESPONSE>> => {
  return Api.get(GET_ALL_USERS);
};
