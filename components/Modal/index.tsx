import { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

interface VideoModalProps {
  videoUrl: string;
}

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    maxWidth: "800px",
    maxHeight: "80vh",
    border: "none",
    borderRadius: "10px",
    overflow: "hidden",
    background: "#333",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

export default function VideoModal({ videoUrl }: VideoModalProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>
        <FontAwesomeIcon
          icon={faCirclePlay}
          beat
          className="text-[#dc1a83] text-[50px] absolute bottom-[52%] left-[23%] lg:left-[44%] bg-slate-950 rounded-full"
        />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        style={customModalStyles}
      >
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
}