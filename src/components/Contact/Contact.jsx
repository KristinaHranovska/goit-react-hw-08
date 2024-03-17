import { BsPhone, BsPerson, BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";
import ConfirmForm from "../ConfirmForm/ConfirmForm";
import { useState } from "react";

const Contact = ({ data: { id, number, name } }) => {
  const dispatch = useDispatch();
  const [confirm, setConfirm] = useState(false);

  const handleDeleteItem = () => {
    dispatch(deleteContact(id));
    setConfirm(false);
  };

  return (
    <>
      <div className={css.containerContac}>
        <div className={css.thumbContact}>
          <h2 className={css.nameContact}>
            <BsPerson size="22" />
            {name}
          </h2>
          <p className={css.numberContact}>
            <BsPhone size="22" />
            {number}
          </p>
        </div>
        <button className={css.buttonDelete} onClick={() => setConfirm(true)}>
          <BsTrash size="15" />
          Delete
        </button>
        <button className={css.buttonDelete}>
          <FaRegEdit size="15" />
          Edit
        </button>
      </div>
      {confirm && (
        <ConfirmForm
          onClick={handleDeleteItem}
          visible={confirm}
          setVisible={setConfirm}
        />
      )}
    </>
  );
};

export default Contact;
