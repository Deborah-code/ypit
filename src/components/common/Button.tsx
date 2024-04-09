import { Icon } from "@iconify/react";
import { type FC } from "react";

interface ButtonProps {
  text: string;
  globeButton?: boolean;
  onClick?: () => void;
  noIcon?: boolean;
  transparent?: boolean;
  className?: string;
  borderColor?: string;
  textColor?: string
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <div className="cursor-pointer text-center">
      <button
        className={` ${
          props.transparent
            ? "bg-[transparent] border-white"
            : `${props.className} bg-purple-20 ${props.borderColor? props.borderColor : "border-purple-100"}`
        } py-[8px] px-[8px] md:px-[20px]  border-solid border-2 rounded-[41px] `}
        onClick={() => props.onClick && props.onClick()}
      >
        <div className="flex items-center gap-[8px]">
          <p
            className={`${
              props.transparent ? "text-white" : props.textColor ? props.textColor : "text-purple-100"
            }  md:text-6}`}
          >
            {props.text}
          </p>
          {props.noIcon ? (
            ""
          ) : props.globeButton ? (
            <Icon icon="ph:globe-thin" color="#5100bf" width="24" height="24" />
          ) : (
            <Icon
              icon="iconoir:arrow-tr"
              color={props.textColor ? "#000000" :"#5100bf"}
              width="16"
              height="16"
            />
          )}
        </div>
      </button>
    </div>
  );
};

export default Button;
