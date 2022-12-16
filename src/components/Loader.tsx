import React from "react";
import { Watch } from "react-loader-spinner";

type Props = {
  message?: string | null;
};

const Loader = (props: Props) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-xl bg-black bg-opacity-80 flex-items-center justify-center">
      <div className="flex items-center justify-center h-full flex-col">
        <Watch
          wrapperClass="inline-flex"
          height="80"
          width="80"
          radius="48"
          color="#694eb4"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          visible={true}
        />
        <div className="text-white font-bold text-[18px] mt-4">
          {props.message || "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default Loader;
