import AsideLeft from "../componencts/asides/AsideLeft";
import AsideRight from "../componencts/asides/AsideRight";
import Main from "../componencts/main/Main";

const HomePage = () => {
  return (
    <>
      <div className="w-[85%] m-auto mt-4">
        <div className="flex">
          <div className="mr-4">
            <AsideLeft />
          </div>
          <div>
            <Main />
          </div>
          <div className="ml-4">
            <AsideRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
