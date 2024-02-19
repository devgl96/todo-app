import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

interface TaskInputProps {
  onAddTask: (description: string) => void;
}

export function TaskInput(props: TaskInputProps) {
  const { onAddTask } = props;
  const [description, setDescription] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  function handleSubmit() {
    onAddTask(description);
    setDescription("");
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Feather name="plus-circle" size={16} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
