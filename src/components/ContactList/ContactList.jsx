import { selectIsLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  console.log(filteredContacts);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {filteredContacts.length === 0 && !isLoading && (
        <p className={css.infoText}>Your phonebook is empty 😢</p>
      )}

      {filteredContacts.length > 0 && (
        <ul className={css.listContacts}>
          {filteredContacts.map((contact) => (
            <li className={css.itemContact} key={contact.id}>
              <Contact data={contact} />
            </li>
          ))}
        </ul>
      )}
      {/* {filteredContacts.items.length === 0 && !isLoading ? (
        <p className={css.infoText}>No contacts found 😢</p>
      ) : ( */}
    </>
  );
};

export default ContactList;
