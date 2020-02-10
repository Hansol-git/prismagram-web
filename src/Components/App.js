import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { gql } from "apollo-boost";
import GlobalStyle from "../Styles/GlobalStyle";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";
import { useQuery } from "react-apollo-hooks";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

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
      <Wrapper>
        <GlobalStyle />
        <AppRouter isLoggedin={isLoggedin} />
        <Footer />
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </Wrapper>
    </ThemeProvider>
  );
};
