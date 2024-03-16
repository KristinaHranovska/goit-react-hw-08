import { BsPhone, BsPerson, BsTrash } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ data: { id, phone, name } }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.containerContac}>
      <div className={css.thumbContact}>
        <h2 className={css.nameContact}>
          <BsPerson size="22" />
          {name}
        </h2>
        <p className={css.numberContact}>
          <BsPhone size="22" />
          {phone}
        </p>
      </div>
      <button className={css.buttonDelete} onClick={handleDeleteItem}>
        <BsTrash size="15" />
        Delete
      </button>
    </div>
  );
};

export default Contact;
