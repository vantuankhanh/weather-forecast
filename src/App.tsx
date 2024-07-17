import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";
import SideMenu from "./components/SideMenu";
import WeatherContent from "./components/WeatherContent";
import { useAppSelector } from "./store/store";

const App = () => {
  const { weatherDetail } = useAppSelector((s) => s.appStore);

  return (
    <div className="flex h-screen w-full relative">
      <ToastContainer />
      <Loading />

      <SideMenu />
      {weatherDetail ? (
        <WeatherContent />
      ) : (
        <div className="w-full h-full flex justify-center items-center p-8">
          <p className="text-xl font-bold">
            Please search and choose a city...
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
