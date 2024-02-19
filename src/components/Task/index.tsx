import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

interface TaskProps {
  id: number;
  description: string;
  created: boolean;
  completed: boolean;
  onHandleTask: () => void;
  onRemove: () => void;
}

export function Task(props: TaskProps) {
  const { description, completed, onHandleTask, onRemove } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onHandleTask}>
        <View>
          {completed ? (
            <AntDesign name="checkcircle" size={24} color="#8284FA" />
          ) : (
            <Entypo name="circle" size={24} color="#4EA8DE" />
          )}
        </View>
      </TouchableOpacity>
      <Text style={completed ? styles.completedContent : styles.content}>
        {description}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <View>
          <Feather name="trash-2" size={20} color="#808080" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
