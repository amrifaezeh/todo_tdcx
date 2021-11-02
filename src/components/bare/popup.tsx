import { Modal } from "react-bootstrap";

export default function PopUp({ show, style, onHide = () => {}, children }) {
  //   const [show, setShow] = useState(false);

  return (
    <>
      <Modal
        centered
        show={show}
        onHide={() => onHide()}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="sm"
      >
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}
