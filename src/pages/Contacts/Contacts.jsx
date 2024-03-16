import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/selectors";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { ThreeDots } from "react-loader-spinner";
import style from "./Contacts.module.css";
import TitleDocument from "../../components/TitleDocument";
import { fetchContacts } from "../../redux/contacts/contactsOps";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <TitleDocument>Your contacts</TitleDocument>
      <ContactForm />
      <div className={style.containerLoader}>
        {isLoading && !error && (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#6f6e6e"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
      </div>
      <ContactList />
    </>
  );
};

export default Contacts;
