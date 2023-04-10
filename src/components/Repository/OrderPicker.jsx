import { Picker } from "@react-native-picker/picker";

const OrderPicker = ({
  selectedOrder,
  setSelectedOrder,
  handleOrderChange,
}) => {
  return (
    <Picker
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
