import { useState } from 'react';
import Modal from './Modal';
import ModalBackdrop from './ModalBackdrop';

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteItem() {
       setModalIsOpen(true);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="Actions">
                <button className="btn" onClick={deleteItem}>Delete</button>
            </div>
      

            { modalIsOpen && <Modal /> }
            { modalIsOpen && <ModalBackdrop /> }

        </div>
    );
}
export default Todo;