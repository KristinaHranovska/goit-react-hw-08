import { useEffect, useState } from "react";
import style from "./ConfirmForm.module.css";
import clsx from "clsx";

const ConfirmForm = ({ visible, onClick, setVisible }) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const classStyle = clsx(style.backdrop, { [style.isOpen]: modalVisible });

  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      setVisible(false);
    }
  };

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  return (
    <div className={classStyle} onClick={handleModalClick}>
      <div className={style.modal}>
        <p>Do you really want to delete the contact?</p>
        <button type="button" onClick={onClick}>
          Yes
        </button>
        <button type="button" onClick={() => setVisible(false)}>
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmForm;
