import Navbar from "../componencts/header/Navbar";
import Card from "../componencts/UI/Card";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="w-[85%] m-auto grid grid-cols-4 gap-4 mt-3">
        <Card>Aside 1</Card>
        <Card className="col-span-2">Aside 2</Card>
        <Card>Aside 3</Card>
      </div>
    </>
  );
};

export default HomePage;
