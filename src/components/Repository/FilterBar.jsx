import { useDebouncedCallback } from 'use-debounce';
import OrderPicker from './OrderPicker';
import { Searchbar } from 'react-native-paper';

const FilterBar = ({ keyword, handleOrderChange, selectedOrder, setSelectedOrder, handleKeywordChange }) => {
  const debounce = useDebouncedCallback(value => {
    handleKeywordChange(value);
  },
    500
  );

  return (
    <>
      <Searchbar
        placeholder="Search"
        defaultValue={keyword}
        onChangeText={text => debounce(text)}
        style={{ marginHorizontal: 10, marginVertical: 10, borderRadius: 4, backgroundColor: "white" }} />

      <OrderPicker
        handleOrderChange={handleOrderChange}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder} />
    </>
  );
};

export default FilterBar;