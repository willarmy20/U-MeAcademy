import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import '../index.css';
import ModalImage from "react-modal-image";
import importedTeamData from "../data/aboutData.json";



const aboutTeamData = importedTeamData.data;

//New About Us Page

export const AboutUs = () => {
  const aboutTeamData = importedTeamData.data;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = (index) => {
          setTitle(aboutTeamData[index].title);
          setDescription(aboutTeamData[index].description);
          setImage(aboutTeamData[index].image);
          setShow(true);
        }

      

      return <>
      {/* <div className="meet">Meet the Team</div> */}
        <div className="about">
          {aboutTeamData.map((member, index) =>{
            return (
              <Button key={index} variant="" onClick={() => handleShow(index)}>
                <img src={member.image}></img>
              </Button>
              
            )
          })}
            </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <ModalImage
              small={image}/>
            <Modal.Body>{description}</Modal.Body>
            <Modal.Footer>
              <Button variant="" onClick={handleClose}>
              </Button>

            </Modal.Footer>
          </Modal>
        </>
    }