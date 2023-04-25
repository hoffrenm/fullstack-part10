import { Picker } from "@react-native-picker/picker";

const OrderPicker = ({
  selectedOrder,
  setSelectedOrder,
  handleOrderChange,
}) => {
  return (
    <Picker
      style={{ height: 40, marginHorizontal: 5, marginBottom: 15,}}
      selectedValue={selectedOrder}
      onValueChange={(itemValue) => {
        setSelectedOrder(itemValue);
        handleOrderChange(itemValue);
      }}
    >
      <Picker.Item label="Latest repositories" value="default" />
      <Picker.Item label="Highest rated repositories" value="ratingHighest" />
      <Picker.Item label="Lowest rated repositories" value="ratingLowest" />
    </Picker>
  );
};

export default OrderPicker;
