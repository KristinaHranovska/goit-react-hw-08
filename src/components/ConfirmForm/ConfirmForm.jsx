// import style from "./ConfirmForm.module.css";

const ConfirmForm = ({ onClick, setVisible }) => {
  return (
    <>
      <p>Do you really want to delete the contact?</p>
      <button type="button" onClick={onClick}>
        Yes
      </button>
      <button type="button" onClick={() => setVisible(false)}>
        No
      </button>
    </>
  );
};

export default ConfirmForm;
