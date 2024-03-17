import { BsPhone, BsPerson, BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/contactsOps";
import ConfirmForm from "../ConfirmForm/ConfirmForm";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";
import ContainerModalForm from "../ContainerModalForm/ContainerModalForm";

const Contact = ({ data: { id, number, name } }) => {
  const dispatch = useDispatch();

  const [confirm, setConfirm] = useState(false);
  const [update, setUpadate] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  const handleDeleteItem = () => {
    dispatch(deleteContact(id));
    setConfirm(false);
  };

  const handleUpdateContact = (updatedData) => {
    dispatch(updateContact(updatedData));
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
        <button
          className={css.buttonDelete}
          onClick={() => {
            setCurrentContact({ id, name, number });
            setUpadate(true);
          }}
        >
          <FaRegEdit size="15" />
          Edit
        </button>
      </div>

      <ContainerModalForm visible={confirm} setVisible={setConfirm}>
        <ConfirmForm onClick={handleDeleteItem} setVisible={setConfirm} />
      </ContainerModalForm>

      <ContainerModalForm visible={update} setVisible={setUpadate}>
        <EditForm
          updateContact={handleUpdateContact}
          contact={currentContact}
          setVisible={setUpadate}
        />
      </ContainerModalForm>
    </>
  );
};

export default Contact;
