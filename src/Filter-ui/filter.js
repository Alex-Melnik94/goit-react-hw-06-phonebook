import { useSelector, useDispatch } from 'react-redux';
import styles from './filter.module.css';
import actions from '../redux/phonebook/phonebook-actions';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.phonebook.filter);

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        onChange={e => dispatch(actions.changeFilter(e.currentTarget.value))}
        value={filter}
      />
    </label>
  );
}
