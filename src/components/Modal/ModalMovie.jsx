import { Modal, Button } from 'antd';
import Draggable from 'react-draggable';
import React, { useState } from "react";

const ModalMovie = (props) => {
  const [visible, setVisible] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const { movie } = props;
  const showModal = () => {
    setVisible(true)
  };

  const handleCancel = e => {
    setVisible(false)
  };
  return (
    <>
      <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false)
              }
            }}
            onMouseOut={() => {
              setDisabled(true)
            }}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            Draggable Modal
          </div>
        }
        visible={visible}
        onCancel={handleCancel}
        modalRender={modal => <Draggable disabled={disabled}>{modal}</Draggable>}
      >

      </Modal>
    </>
  )
}

export default ModalMovie;