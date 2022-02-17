import NavBar from "./NavBar";

const LayOut = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default LayOut;
