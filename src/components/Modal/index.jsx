import React from 'react';
import Modal from 'react-modal';
import './index.css';

const NotifModal = ({ isOpen, onRequestClose, message }) => {
    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Notification"
        className="custom-modal"
        overlayClassName="custom-overlay"
    >
        <div className="modal-content">
            <h2>{message}</h2>
        </div>
    </Modal>
    );
};

export default NotifModal;
