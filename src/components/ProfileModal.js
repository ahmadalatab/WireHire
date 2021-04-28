import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form } from 'reactstrap';
import '../profile.scss';

const ProfileModal = (props) => {

    //const [modal, setModal] = useState(false);

    //const toggle = () => setModal(!modal);

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle} centered={true}>
            <ModalHeader toggle={props.toggle}>Edit</ModalHeader>
            <ModalBody>
                <Form onSubmit={props.submit}>
                    {props.form}
                    <div className="text-center">
                        <Button type="submit" color="primary">Save</Button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ProfileModal;