import React, { useState } from 'react';

interface ModalBootstrapInterface{
    title: string,
    childern: JSX.Element
    onSave: () => void
    button: {
        clasButton?:string
        titleButton?: string
    }
}

const ModalBootstrap = (props:  ModalBootstrapInterface) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <button className={props.button.clasButton ?? 'btn btn-primary'} onClick={openModal}> {props.button.titleButton ?? "Open Modal" }</button>
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
              <button type="button" className="btn btn-primary" onClick={props.onSave}>
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
