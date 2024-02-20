import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import moment from "moment";

interface TaskProps {
  id: number;
  description: string;
  date: Date;
  created: boolean;
  completed: boolean;
  onHandleTask: () => void;
  onRemove: () => void;
}

const formatDate = (date: Date) => moment(date).format("DD/MM/YY");

export function Task(props: TaskProps) {
  const { description, date, completed, onHandleTask, onRemove } = props;

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
      <View style={styles.contentContainer}>
        <Text
          style={completed ? styles.completedContent : styles.content}
          numberOfLines={1}
          lineBreakMode="tail"
        >
          {description}
        </Text>
        <Text style={styles.dateContent}>{formatDate(date)}</Text>
      </View>
      <TouchableOpacity onPress={onRemove}>
        <View>
          <Feather name="trash-2" size={20} color="#808080" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
