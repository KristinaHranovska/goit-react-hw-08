import css from "./SearchBox.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";
import { initialStateFilter } from "../../redux/constants";

const SearchBox = () => {
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handelInputSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const cleanInput = () => {
    dispatch(changeFilter(initialStateFilter.name));
  };

  return (
    <div className={css.container}>
      <p className={css.inputText}>Find contacts by name</p>
      <div className={css.container}>
        <input
          className={css.formInput}
          type="text"
          value={searchValue}
          onChange={handelInputSearch}
        />
        <IoCloseOutline
          className={css.iconClean}
          size="20"
          onClick={cleanInput}
        />
      </div>
    </div>
  );
};

export default SearchBox;
