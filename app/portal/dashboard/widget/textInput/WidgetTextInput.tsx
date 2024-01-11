import { ChangeEvent, ChangeEventHandler, ClipboardEventHandler, HTMLInputTypeAttribute } from "react";

interface TextInputInterface {
  label: string;
  id: string;
  value?: string | number | readonly string[] | undefined;
  defValue?: string | number | readonly string[] | undefined;
  type: HTMLInputTypeAttribute | undefined;
  placeHolder?: string | undefined;
  disable: boolean | undefined;
onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;

}

const WidgetTextInput = (props: TextInputInterface) => {
  return (
    <div className="form-group">
      <label htmlFor={props?.id}>{props.label}</label>
      <input
        value={props?.value}
        defaultValue={props?.defValue}
        type={props?.type ?? "text"}
        className="form-control"
        id={props?.id}
        placeholder={props.placeHolder ?? ""}
        disabled={props.disable ?? false}
        onChange={props.onChange}
      />
    </div>
  );
};

export default WidgetTextInput;
