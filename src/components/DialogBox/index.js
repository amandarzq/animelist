import React from 'react';
import Modal from 'react-modal';
import { FiX } from "react-icons/fi";

export const DialogBox = ({ ContentComponent, isOpen, onClose, isCancelable = false }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isCancelable ? onClose : null}
      style={
        {
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            boxSizing: 'border-box',
            borderTop: '1px solid #fafafa',
            borderTopRadius: '4px',
            padding: '0px',
            maxWidth: '500px',
            maxHeight: '600px',
            background: '#f8f7fc',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }
        }
      }>
      <div>
        <div style={{
          cursor: 'pointer',
          display: "flex",
          justifyContent: "space-between",
          padding: '12px 12px 0 12px',
        }} onClick={onClose}>
          <FiX size={26} />
        </div>
        {ContentComponent}
      </div>
    </Modal>
  )
}
