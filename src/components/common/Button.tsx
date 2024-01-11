import { Icon } from "@iconify/react";
import { FC } from "react";

interface ButtonProps {
  text: string;
  globeButton?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <div className="cursor-pointer text-center">
      <button
        className="bg-purple-20 py-[8px] px-[8px] md:px-[20px] border-purple-100 border-solid border-2 rounded-[41px]"
        onClick={() => props.onClick && props.onClick()}
      >
        <div className="flex items-center gap-[8px]">
          <p className="text-purple-100 text-9 md:text-6">{props.text}</p>
          {props.globeButton ? (
            <Icon icon="ph:globe-thin" color="#5100bf" width="24" height="24" />
          ) : (
            <Icon
              icon="iconoir:arrow-tr"
              color="#5100bf"
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
