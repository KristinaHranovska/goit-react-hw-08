// import style from "./ConfirmForm.module.css";
import { Button } from "@mui/material";

const ConfirmForm = ({ onClick, setVisible }) => {
  return (
    <>
      <p>Do you really want to delete the contact?</p>
      <Button type="button" onClick={onClick}>
        Yes
      </Button>
      <Button type="button" onClick={() => setVisible(false)}>
        No
      </Button>
    </>
  );
};

export default ConfirmForm;
