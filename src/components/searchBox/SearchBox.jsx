import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import {
  selectFiltersName,
  selectFiltersNumber,
} from '../../redux/filters/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectFiltersName);
  const filterNumber = useSelector(selectFiltersNumber);

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.searchBox}>
      <input
        className={css.searchInput}
        type="text"
        name="nameSearch"
        value={filterName || filterNumber}
        onChange={onChangeFilter}
        placeholder=" Search contacts by name or number"
      />
    </div>
  );
};
export default SearchBox;
