"use client";

import { v1getAllUsers } from "@/app/services/version1/queries";
import ADMINQUERYKEYS from "@/app/services/version1/querykeys";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { createContext } from "react";
import { ApiSuccessResponse, GET_ALL_USERS_RESPONSE  } from "../../services/version1/response"

interface Props {
  children: React.ReactNode;
}
const ContextProvider = createContext({
  // Provide a default value here
  users: {} as ApiSuccessResponse<GET_ALL_USERS_RESPONSE> | undefined, 
  isLoading: true
});
const GlobalProvider: React.FC<Props> = ({ children }) => {
  const { data, isLoading } = useQuery({
    queryFn: v1getAllUsers,
    queryKey: [ADMINQUERYKEYS.USERS],
  });
  return (
    <ContextProvider.Provider
      value={{
        users: data,  
        isLoading,     
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

function useUsersContext() {
  const data  = useContext(ContextProvider);
  return data;
}

export { GlobalProvider, useUsersContext };
