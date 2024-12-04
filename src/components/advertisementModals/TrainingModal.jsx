import { Modal, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactTrainig from '../../assets/reactjs.png';
import JavaTraining from '../../assets/java-training.jpg';
import PythonTraining from '../../assets/python-training.jpeg';
import AndroidTraining from '../../assets/android-training.jpg';

const TrainingModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Explore Our Training Programs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ReactTrainig}
                alt="React Training"
              />
              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={JavaTraining}
                alt="Java Training"
              />
              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={PythonTraining}
                alt="Python Training"
              />
              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button target="_blank" href="https://developnators.com/trainings" variant="primary">
            Proceed to Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TrainingModal;
