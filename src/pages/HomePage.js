import AsideLeft from "../componencts/asides/AsideLeft";
import Navbar from "../componencts/header/Navbar";
import Main from "../componencts/main/Main";
import Card from "../componencts/UI/Card";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="w-[85%] m-auto grid grid-cols-4 gap-4 mt-3">
        <AsideLeft />
        <Main />
        <Card bg="white" padding="4">
          Aside 3
        </Card>
      </div>
    </>
  );
};

export default HomePage;
