import "../styles/globals.css";
import LayOut from "../component/LayOut";

function MyApp({ Component, pageProps }) {
  return (
    <LayOut>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </LayOut>
  );
}

export default MyApp;
