import ContactForm from './ContactForm-ui/ContactForm';
import Filter from './Filter-ui/filter';
import ContactList from './ContactList-ui/ContactList';
import styles from './styles.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
