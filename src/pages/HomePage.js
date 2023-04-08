import AsideLeft from "../componencts/asides/AsideLeft";
import Navbar from "../componencts/header/Navbar";
import Card from "../componencts/UI/Card";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="w-[85%] m-auto grid grid-cols-4 gap-4 mt-3">
        <Card bg="white">
          <AsideLeft />
        </Card>
        <Card bg="white" colSpan="2">
          Aside 2
        </Card>
        <Card bg="white">Aside 3</Card>
      </div>
    </>
  );
};

export default HomePage;
