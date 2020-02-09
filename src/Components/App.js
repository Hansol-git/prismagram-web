import React from "react";
import { ThemeProvider } from "styled-components";
import { gql } from "apollo-boost";
import GlobalStyle from "../Styles/GlobalStyle";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";
import { useQuery } from "react-apollo-hooks";

const QUERY = gql`
  {
    isLoggedin @client
  }
`;

export default () => {
  const {
    data: { isLoggedin }
  } = useQuery(QUERY);
  console.log(isLoggedin);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        <AppRouter isLoggedin={isLoggedin} />
      </>
    </ThemeProvider>
  );
};
