import React, { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";

interface WidgetTextInputButtonProps {
  label: string;
  id: string;
  value?: string | number | string[] | undefined;
  type: HTMLInputTypeAttribute | undefined;
  placeHolder?: string | undefined;
  disable: boolean | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
  onPaste: () =>void
  buttonText: string;
}

const WidgetTextInputButton: React.FC<WidgetTextInputButtonProps> = (props) => {
  const [inputValue, setInputValue] = useState(props?.value);

  const handlePasteClick = () => {
    navigator.clipboard.readText().then((pastedText) => {
      setInputValue(pastedText);
      props.onChange(pastedText);
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    props.onChange(event);  
  };

  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handlePasteClick}
          >
            {props.buttonText}
          </button>
        </div>

        <input
          value={props.value}
          type={props.type || "text"}
          className="form-control"
          id={props.id}
          onChange={handleInputChange}
          placeholder={props.placeHolder}
          disabled={props.disable}
        />
      </div>
    </>
  );
};

export default WidgetTextInputButton;
