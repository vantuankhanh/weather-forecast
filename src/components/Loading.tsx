import { memo } from "react";
import { useAppSelector } from "../store/store";
import SpinnerIcon from "@rsuite/icons/legacy/Spinner";

const Loading = memo(() => {
  const { isLoading } = useAppSelector((s) => s.appStore);

  return (
    <div
      className={`h-screen w-screen ${
        isLoading ? "absolute top-0 left-0" : "hidden"
      }`}
      style={{ zIndex: 999 }}
    >
      <div className="h-full w-full bg-gray-200 opacity-85"></div>
      <div className="h-full w-full absolute top-0 gap-3 flex justify-center items-center text-black">
        <SpinnerIcon pulse style={{ fontSize: "2em" }} />
        <p className="text-lg font-bold">Loading...</p>
      </div>
    </div>
  );
});

export default Loading;
