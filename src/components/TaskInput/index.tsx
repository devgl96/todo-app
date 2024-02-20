import { useState } from "react";
import { Button, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

interface TaskInputProps {
  onAddTask: (description: string, date: Date) => void;
}

export function TaskInput(props: TaskInputProps) {
  const { onAddTask } = props;
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [isFocus, setIsFocus] = useState(false);
  const [mode, setMode] = useState<string>("date");
  const [show, setShow] = useState(false);

  function handleSubmit() {
    onAddTask(description, date);
    setDescription("");
  }

  function onChange(
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) {
    const currentDate = selectedDate;

    setShow(false);

    if (currentDate) {
      setDate(currentDate);
    }
  }

  function showDatePicker() {
    setShow(true);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={isFocus ? styles.inputOnFocus : styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={"#808080"}
        onChangeText={setDescription}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={description}
      />
      <TouchableOpacity style={styles.buttonCalendar} onPress={showDatePicker}>
        <Feather name="calendar" size={18} color="#FFF" title="Date" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Feather name="plus-circle" size={18} color="#FFF" />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour
          onChange={onChange}
        />
      )}
    </View>
  );
}
