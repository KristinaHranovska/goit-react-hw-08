import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
// import style from "./EditForm.module.css";

const EditForm = ({ updateContact, setVisible, contact }) => {
  const [formData, setFormData] = useState({ name: "", number: "" });

  useEffect(() => {
    if (contact) {
      setFormData({ name: contact.name, number: contact.number });
    }
  }, [contact]);

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
    <>
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
    </>
  );
};

export default EditForm;
