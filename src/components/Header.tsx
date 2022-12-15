import { format } from "date-fns";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const today = format(new Date(), "MMMM do, yyyy");

  return (
    <div className="header p-4 flex items-center flex-col">
      <h4 className="text-[16px] text-white font-medium text-center">
        {today}
      </h4>
      <h1 className="text-[32px] text-white font-extrabold text-center">
        My Todo List
      </h1>
    </div>
  );
};

export default Header;
