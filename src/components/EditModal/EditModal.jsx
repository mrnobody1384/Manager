import React, { useState } from "react";
import Modal from "react-modal";
import ModalHeader from "../ModalHeaders/ModalHeader";
import "./EditModal.css";
function EditModal({ closeModal, ModalIsOpen, data, index, reload }) {
  const [editedData, setEditedData] = useState(data);
  function handleInputs(e) {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  }

  function editItem() {
    const localData = JSON.parse(localStorage.getItem("data"));
    localData[index] = editedData;
    localStorage.setItem("data", JSON.stringify(localData));
    reload();
  }
  return (
    <Modal
      isOpen={ModalIsOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          padding: "2px 10px",
          margin: "auto",
          width: "550px",
          height: "250px",
        },
      }}
    >
      <div className="EditModal">
        <ModalHeader text={"ویرایش"} closeModal={closeModal} />
        <div className="body">
          <div className="inputs">
            <div className="input-box">
              <label htmlFor="name">نام</label>
              <input
                type="text"
                name="name"
                id="name"
                value={editedData.name}
                onChange={(e) => {
                  handleInputs(e);
                }}
              />
            </div>
            <div className="input-box">
              <label htmlFor="family">نام خانوادگی</label>
              <input
                type="text"
                name="family"
                id="family"
                value={editedData.family}
                onChange={(e) => {
                  handleInputs(e);
                }}
              />
            </div>
            <div className="input-box">
              <label htmlFor="meliCode">کدملی</label>
              <input
                type="number"
                name="meliCode"
                id="meliCode"
                value={editedData.meliCode}
                onChange={(e) => {
                  handleInputs(e);
                }}
              />
            </div>
          </div>
          <div className="btns">
            <button
              type="
            button"
              onClick={() => {
                editItem();
              }}
            >
              تایید
            </button>
            <button type="button" onClick={closeModal}>
              بستن
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default EditModal;
