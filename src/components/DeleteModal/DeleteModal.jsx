import React from "react";
import Modal from "react-modal";
import ModalHeader from "../ModalHeaders/ModalHeader";
import "./DeleteModal.css";
function DeleteModal({ closeDeleteModal, deleteModalIsOpen, index, reload }) {
  function handleDelete() {
    const items = JSON.parse(localStorage.getItem("data"));
    const newItems = items.filter((item, indexx) => {
      // console.log(indexx);
      return indexx != index;
    });
    // console.log(index);
    // console.log(newItems);
    localStorage.setItem("data", JSON.stringify(newItems));
    reload();
    closeDeleteModal();
  }
  return (
    <Modal
      isOpen={deleteModalIsOpen}
      onRequestClose={closeDeleteModal}
      style={{
        content: {
          padding: "2px 10px",
          margin: "auto",
          width: "500px",
          height: "200px",
        },
      }}
    >
      <div className="deleteModal">
        <ModalHeader text={"حذف"} closeModal={closeDeleteModal} />
        <div className="body">
          <p>آیا رکورد حذف شود؟</p>
          <div className="btns">
            <button
              type="button"
              onClick={() => {
                handleDelete();
              }}
            >
              بله
            </button>
            <button
              type="button"
              onClick={() => {
                closeDeleteModal();
              }}
            >
              خیر
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteModal;
