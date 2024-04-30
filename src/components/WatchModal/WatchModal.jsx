import React from "react";
import Modal from "react-modal";
import ModalHeader from "../ModalHeaders/ModalHeader";
import "./WatchModal.css";
function WatchModal({ closeWatchModal, watchModalIsOpen, data }) {
  return (
    <Modal
      isOpen={watchModalIsOpen}
      onRequestClose={closeWatchModal}
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
        <ModalHeader text={"مشاهده"} closeModal={closeWatchModal} />
        <div className="body">
          <div className="content">
            <div className="labels">
              <label>نام:</label>
              <label>نام خانوادگی:</label>
              <label>کدملی:</label>
            </div>
            <div className="texts">
              <span>{data.name}</span>
              <span>{data.family}</span>
              <span>{data.meliCode}</span>
            </div>
          </div>
          <button type="button" onClick={closeWatchModal}>
            بستن
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default WatchModal;
