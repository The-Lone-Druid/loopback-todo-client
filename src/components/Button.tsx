import React from "react";

type Props = {
  buttonClass?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = (props: Props) => {
  return (
    <button
      {...props}
      className={`rounded-full p-[10px] py-[12px] text-white bg-[#4A3780] transition-all active:bg-[#694eb4] w-full ${props.buttonClass}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
