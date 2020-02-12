import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import { gql } from "apollo-boost";
import GlobalStyle from "../Styles/GlobalStyle";
import Theme from "../Styles/Theme";
import AppRouter from "./Routes";
import { useQuery } from "react-apollo-hooks";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
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
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        <Router>
          <>
            {isLoggedin && <Header />}
            <Wrapper>
              <AppRouter isLoggedin={isLoggedin} />
              <Footer />
            </Wrapper>
          </>
        </Router>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </>
    </ThemeProvider>
  );
};
