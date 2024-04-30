import React, { useRef } from "react";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faEye,
  faPenToSquare,
  faMapLocationDot,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import WatchModal from "../WatchModal/WatchModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import ChartModal from "../ChartModal/ChartModal";
import MapModal from "../MapModal/MapModal";

function Item({ data, index, reload }) {
  const [deleteModalIsOpen, setDeleteMoalIsOpen] = React.useState(false);

  function openDeleteModal() {
    setDeleteMoalIsOpen(true);
  }
  function closeDeleteModal() {
    setDeleteMoalIsOpen(false);
  }
  const [watchModalIsOpen, setWatchMoalIsOpen] = React.useState(false);

  function openWatchModal() {
    setWatchMoalIsOpen(true);
  }
  function closeWatchModal() {
    setWatchMoalIsOpen(false);
  }

  const [editModalIsOpen, setEditMoalIsOpen] = React.useState(false);

  function openEditModal() {
    setEditMoalIsOpen(true);
  }
  function closeEditModal() {
    setEditMoalIsOpen(false);
  }

  const [chartModalIsOpen, setChartModalIsOpen] = React.useState(false);

  function openChartModal() {
    setChartModalIsOpen(true);
  }
  function closeChartModal() {
    setChartModalIsOpen(false);
  }

  const [mapModalIsOpen, setMapModalIsOpen] = React.useState(false);

  function openMapModal() {
    setMapModalIsOpen(true);
  }
  function closeMapModal() {
    setMapModalIsOpen(false);
  }

  return (
    <>
      <DeleteModal
        closeDeleteModal={closeDeleteModal}
        deleteModalIsOpen={deleteModalIsOpen}
        index={index}
        reload={reload}
      />
      <WatchModal
        closeWatchModal={closeWatchModal}
        watchModalIsOpen={watchModalIsOpen}
        data={data}
      />
      <EditModal
        ModalIsOpen={editModalIsOpen}
        closeModal={closeEditModal}
        data={data}
        index={index}
        reload={reload}
      />
      <MapModal
        closeModal={closeMapModal}
        isOpen={mapModalIsOpen}
        position={data.position}
      />
      <ChartModal IsOpen={chartModalIsOpen} closeModal={closeChartModal} />
      <tr>
        <td>{index + 1}</td>
        <td>{data.name}</td>
        <td>{data.family}</td>
        <td>{data.meliCode}</td>
        <td className="operation">
          <button onClick={openWatchModal}>
            <FontAwesomeIcon icon={faEye} color="aqua" />
          </button>
          <button type="button" onClick={openEditModal}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button onClick={openMapModal}>
            <FontAwesomeIcon icon={faMapLocationDot} color="red" />
          </button>

          <button onClick={openDeleteModal}>
            <FontAwesomeIcon icon={faTrashCan} color="red" />
          </button>
          <button type="button" onClick={openChartModal}>
            <FontAwesomeIcon icon={faChartLine} />
          </button>
        </td>
      </tr>
    </>
  );
}

export default Item;
