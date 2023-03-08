import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
import { COLORS } from "../constants";
import { Task, TaskType } from "./Task";

export const TodoScreen = () => {
  const [task, setTask] = useState<string>("");
  const [taskItems, setTaskItems] = useState<TaskType[]>([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, { label: task, isDone: false }]);
    setTask("");
  };

  const removeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const checkTask = (index: number, isDoneStatus: boolean) => {
    let itemsCopy = [...taskItems];
    itemsCopy[index].isDone = isDoneStatus;
    setTaskItems(itemsCopy);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Tasks</Text>
      </View>
      <ScrollView
        style={styles.tasksScrollView}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.tasksWrapper}>
          <View style={styles.items}>
            {taskItems.map((item, index) => (
              <Task
                key={index}
                item={item}
                index={index}
                checkTask={checkTask}
                removeTask={removeTask}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  titleWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tasksScrollView: {
    marginBottom: 80,
  },
  tasksWrapper: {
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: COLORS.WHITE,
    borderRadius: 60,
    borderColor: COLORS.GREY,
    borderWidth: 1,
    width: 260,
    height: 60,
    textAlign: "center",
    fontSize: 20,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.WHITE,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.GREY,
    borderWidth: 1,
  },
  addButtonText: {
    fontSize: 30,
  },
});
