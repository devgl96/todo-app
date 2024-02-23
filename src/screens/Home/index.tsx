import { useState } from "react";
import { Alert, FlatList, Image, Text, View } from "react-native";
import { TaskInput } from "../../components/TaskInput";
import { Task } from "../../components/Task";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

interface TaskProps {
  id: number;
  description: string;
  date: Date;
  created: boolean;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  async function schedulePushNotification(description: string) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Para fazer 📃",
        body: description,
      },
      trigger: {
        seconds: 3,
        channelId: "new-tasks",
      },
    });
  }

  async function onDisplayNotification(description: string) {
    await Notifications.setNotificationChannelAsync("new-tasks", {
      name: "Nova Tarefa",
      sound: "notification-song.wav",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#4EA8DE",
    });

    await schedulePushNotification(description);
  }

  function handleAddTask(description: string, date: Date) {
    if (!description.length) {
      return Alert.alert("Não é possível criar a tarefa sem descrevê-la.");
    }

    const findDescriptionTask = tasks.find(
      (task) => task.description === description
    );

    if (findDescriptionTask) {
      return Alert.alert(
        "Descrição da Tarefa Idêntica! Tente uma nova tarefa!"
      );
    }

    onDisplayNotification(description);

    setTasks((prevState) => [
      ...prevState,
      {
        id: prevState.length,
        description,
        date,
        created: true,
        completed: false,
      },
    ]);
  }

  function handleStatusTask(id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    const findTask = tasks.find((task) => task.id === id);
    if (!findTask) {
      return Alert.alert("Task não encontrada!");
    }

    Alert.alert(
      "Excluir",
      `Deseja excluir a tarefa: ${findTask.description}?`,
      [
        {
          text: "Sim",
          onPress: () =>
            setTasks((prevState) => prevState.filter((task) => task.id !== id)),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  function getCreatedTasks() {
    return tasks.filter((task) => task.created).length;
  }

  function getCompletedTasks() {
    return tasks.filter((task) => task.completed).length;
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../../assets/Logo.png")} />
      </View>
      <View style={styles.inputArea}>
        <TaskInput onAddTask={handleAddTask} />
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.statusContent}>
          <Text style={styles.createdTaskStatus}>Criadas</Text>
          <View style={styles.amountTasks}>
            <Text style={styles.textAmountTasks}>{getCreatedTasks()}</Text>
          </View>
        </View>
        <View style={styles.statusContent}>
          <Text style={styles.completedTaskStatus}>Concluídas</Text>
          <View style={styles.amountTasks}>
            <Text style={styles.textAmountTasks}>{getCompletedTasks()}</Text>
          </View>
        </View>
      </View>
      <FlatList
        style={styles.tasksContainer}
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            onRemove={() => handleRemoveTask(item.id)}
            onHandleTask={() => handleStatusTask(item.id)}
            {...item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.noTasksContainer}>
            <Feather name="clipboard" size={80} color="#808080" />
            <Text style={styles.noTasksTextBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.noTasksText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
