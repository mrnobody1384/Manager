import React from "react";
import { Bar } from "react-chartjs-2";
import ModalHeader from "../ModalHeaders/ModalHeader";
import Modal from "react-modal";
import App from "../../App";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);
export default function ChartModal({ IsOpen, closeModal }) {
  return (
    <Modal
      isOpen={IsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={{
        content: {
          padding: "2px 10px",
          margin: "auto",
          width: "700px",
          height: "500px",
        },
      }}
    >
      <div className="deleteModal">
        <ModalHeader text={"حذف"} closeModal={closeModal} />
        <div className="body">
          {/* <canvas> */}
          <Bar
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19, 3, 5, 2, 3],
                  borderWidth: 1,
                  order: 1,
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  type: "linear",
                },
              },
            }}
          ></Bar>
          {/* </canvas> */}
        </div>
      </div>
    </Modal>
  );
}
