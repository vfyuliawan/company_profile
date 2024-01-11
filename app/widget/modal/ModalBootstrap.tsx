import React, { ReactNode, useState } from 'react';

interface ModalBootstrapInterface{
    title: string,
    childern: JSX.Element
    onSave: () => void
    button: {
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
      disable?: boolean;
      icon?: boolean;
      iconSvg?: ReactNode | string;
      childern?: JSX.Element
    }
}

const ModalBootstrap = (props:  ModalBootstrapInterface) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <button
      onClick={openModal}
      style={{
        display: "flex", alignItems: "center",
        height:
          props.button.size === "btn-lg"
            ? "40px"
            : props.button.size === "btn-md"
            ? "25px"
            : undefined,
      }}
      type={props?.button.type ?? "button"}
      className={props?.button.class + " " + props?.button.size}
      disabled={props.button.disable ?? false}
    >
      {props.button.icon ? (
        props.button.iconSvg ?? (
          ""
        )
      ) : ""}
     <span style={{ marginLeft: "8px" }} className="text-lg">{props.button.text}</span>
     {props.button.childern}
    </button>
      <div className={`modal ${showModal ? 'show' : ''}`} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal Title</h5>
              <button type="button" className="close" onClick={closeModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
                {props.childern}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={()=>{
                props.onSave
                closeModal
              }}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBootstrap;
