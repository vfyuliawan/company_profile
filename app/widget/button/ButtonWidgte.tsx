import { ReactNode, SVGProps } from "react";

interface ButtonInterface {
  type: "button" | "submit" | "reset" | undefined;
  class:
    | "btn btn-primary"
    | "btn btn-secondary"
    | "btn btn-success"
    | "btn btn-danger"
    | "btn btn-warning"
    | "btn btn-info"
    | "btn btn-light"
    | "btn btn-dark"
    | "btn btn-outline-primary"
    | "btn btn-outline-secondary"
    | "btn btn-outline-success"
    | "btn btn-outline-danger"
    | "btn btn-outline-warning"
    | "btn btn-outline-info"
    | "btn btn-outline-light"
    | "btn btn-outline-dark";
  size?: "btn-lg" | "btn-sm" | "btn-md";
  text: string| JSX.Element;
  onClick: () => void;
  disable?: boolean;
  icon?: boolean;
  iconSvg?: ReactNode | string;
  childern?: JSX.Element
}

const ButtonWidget = (props: ButtonInterface) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        display: "flex", alignItems: "center",
        height:
          props.size === "btn-lg"
            ? "40px"
            : props.size === "btn-md"
            ? "25px"
            : undefined,
      }}
      type={props?.type ?? "button"}
      className={props?.class + " " + props?.size}
      disabled={props.disable ?? false}
    >
      {props.icon ? (
        props.iconSvg ?? (
          ""
        )
      ) : ""}
     <span style={{ marginLeft: "8px" }} className="text-lg">{props.text}</span>
     {props.childern}
    </button>
  );
};

export default ButtonWidget;
