import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function ModalHeader({ text, closeModal }) {
  return (
    <div className="header">
      <h2>{text}</h2>
      <button type="button" onClick={closeModal}>
        <FontAwesomeIcon icon={faXmark} size="2x" />
      </button>
    </div>
  );
}

export default ModalHeader;
