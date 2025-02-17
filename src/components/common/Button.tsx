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
  textColor?: string;
  bgColor?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const handleClick = () => {
    if (!props.disabled && props.onClick) {
      props.onClick();
    }
  };

  // Get the icon color based on props
  const getIconColor = () => {
    if (props.globeButton) return "#5100bf";
    if (props.transparent) return "white";
    // Use the text color for the icon if specified, otherwise default to purple
    return props.textColor === "text-white" ? "white" : "#5100bf";
  };

  return (
    <div
      className={`cursor-pointer text-center ${
        props.disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <button
        type="button"
        className={` ${
          props.transparent
            ? "bg-[transparent] border-white"
            : `${props.bgColor ? props.bgColor : "bg-purple-20"}  ${
                props.borderColor ? props.borderColor : "border-purple-100"
              } ${props.className} `
        } py-[8px] px-[8px] md:px-[20px]  border-solid border-2 rounded-[41px] `}
        onClick={handleClick}
        disabled={props.disabled}
      >
        <div className="flex items-center gap-[8px]">
          <p
            className={`${
              props.transparent
                ? "text-white"
                : props.textColor
                ? props.textColor
                : "text-purple-100"
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
              color={getIconColor()}
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
