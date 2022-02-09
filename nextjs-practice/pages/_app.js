import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";

const StyleApp = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

function MyApp({ Component, pageProps }) {
  return (
    <StyleApp>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </StyleApp>
  );
}

export default MyApp;
