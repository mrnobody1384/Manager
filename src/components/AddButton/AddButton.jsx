import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./AddButton.css";
import Modal from "react-modal";

import useGeolocation from "react-hook-geolocation";

function AddButton({ reload }) {
  const insertModalRef = useRef(null);
  const nameRef = useRef(null);
  const familyRef = useRef(null);
  const meliCodeRef = useRef(null);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (positiona) => {
        const { latitude, longitude } = positiona.coords;
        console.log(latitude, longitude);
        setPosition({ lat: latitude, lng: longitude });
      },
      (err) => {
        console.log(err);

        alert(
          "مشکلی در گرفتن لوکیشن شما وجود دارد. اتصال اینترنت و وجود gps را بررسی کنید."
        );
      }
    );
  }, []);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [newItem, setNewItem] = React.useState({
    name: "",
    family: "",
    meliCode: 0,
  });

  function handleInput(e) {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  }

  function clean() {
    nameRef.current.value = "";
    familyRef.current.value = "";
    meliCodeRef.current.value = "";
  }

  async function addItem() {
    const items = JSON.parse(localStorage.getItem("data"));
    newItem.position = position;
    if (items) {
      const dupItem = items.find((item) => {
        item.MeliCode == newItem.meliCode;
      });
      if (!dupItem) {
        items.push(newItem);
        localStorage.setItem("data", JSON.stringify(items));
        clean();
        reload();
      } else {
        alert("کد ملی در دیتابیس وجود دارد.");
      }
    } else {
      localStorage.setItem("data", JSON.stringify([newItem]));
      clean();
      reload();
    }
  }

  return (
    <div className="main-div">
      <button type="button" className="main-btn" onClick={openModal}>
        افزودن
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            padding: "2px 10px",
            margin: "auto",
            width: "500px",
            height: "250px",
          },
        }}
      >
        <div className="insert-modal" ref={insertModalRef}>
          <div className="header">
            <h2>افزودن</h2>
            <button type="button" onClick={closeModal}>
              <FontAwesomeIcon icon={faXmark} size="2x" />
            </button>
          </div>
          <div className="body">
            <div className="inputs">
              <div className="input-box">
                <label htmlFor="name">نام</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => handleInput(e)}
                  ref={nameRef}
                />
              </div>
              <div className="input-box">
                <label htmlFor="family">نام خانوادگی</label>
                <input
                  type="text"
                  name="family"
                  id="family"
                  onChange={(e) => handleInput(e)}
                  ref={familyRef}
                />
              </div>
              <div className="input-box">
                <label htmlFor="meliCode">کد ملی</label>
                <input
                  type="number"
                  name="meliCode"
                  id="meliCode"
                  onChange={(e) => handleInput(e)}
                  ref={meliCodeRef}
                />
              </div>
            </div>

            <div className="btns">
              <button
                type="button"
                onClick={() => addItem()}
                disabled={position ? false : true}
              >
                افزودن
              </button>
              <button type="button" onClick={closeModal}>
                بستن
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddButton;
