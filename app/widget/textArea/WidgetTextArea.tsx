import { HTMLInputTypeAttribute } from "react";

interface TextAreaInterface {
  label: string;
  id: string;
  value?: string | number |  string[] | undefined;
  defValue?: string | number |  string[] | undefined;
  type: HTMLInputTypeAttribute | undefined;
  placeHolder?: string | undefined;
  disable: boolean | undefined;
  row: number | undefined;
onChange: (event: React.ChangeEvent<HTMLTextAreaElement> ) => void;

}

const WidgetTextArea = (props: TextAreaInterface) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">{props.label}</label>
      <textarea
        disabled={props?.disable}
        className="form-control"
        id={props?.id ?? ""}
        rows={props.row}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default WidgetTextArea;
