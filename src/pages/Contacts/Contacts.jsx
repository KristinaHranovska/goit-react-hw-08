import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import TitleDocument from "../../components/TitleDocument";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import SearchBox from "../../components/SearchBox/SearchBox";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <TitleDocument>Your contacts page</TitleDocument>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default Contacts;
