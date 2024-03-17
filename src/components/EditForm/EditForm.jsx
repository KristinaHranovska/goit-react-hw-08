import { TextField } from "@mui/material";
import style from "./EditForm.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
// import { updateContact } from "../../redux/contacts/contactsOps";

const EditForm = ({ visible, updateContact, setVisible, contact }) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const [formData, setFormData] = useState({ name: "", number: "" });

  const classStyle = clsx(style.backdropEdit, { [style.isOpen]: modalVisible });

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  useEffect(() => {
    if (contact) {
      setFormData({ name: contact.name, number: contact.number });
    }
  }, [contact]);

  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      setVisible(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateClick = () => {
    updateContact({ id: contact.id, ...formData });
    setVisible(false);
    console.log(formData);
  };

  return (
    <div className={classStyle} onClick={handleModalClick}>
      <div className={style.modalEdit}>
        <div>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleUpdateClick}>
            Update
          </button>
          <button type="button" onClick={() => setVisible(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
