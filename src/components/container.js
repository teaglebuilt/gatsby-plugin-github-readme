import React, { createContext } from "react";
import useGithub from "../hooks/useGithubData";

const GithubContext = createContext();

const Container = ({ children }) => {
  const repos = useGithub();
  
  return (
    <GithubContext.Provider value={repos}>
            {children}
    </GithubContext.Provider>
  );
};

export default Container;