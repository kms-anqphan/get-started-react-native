import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntIcon from "@expo/vector-icons/AntDesign";

import { COLORS } from "../constants";

export type TaskType = {
  label: string;
  isDone: boolean;
};

export type TaskProps = {
  item: TaskType;
  index: number;
  checkTask: (index: number, isDoneStatus: boolean) => void;
  removeTask: (index: number) => void;
};

export const Task = (props: TaskProps) => {
  const { item, index, checkTask, removeTask } = props;

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.item.label}</Text>
      </View>
      <View style={styles.actionsWrapper}>
        <TouchableOpacity onPress={() => checkTask(index, !item.isDone)}>
          <AntIcon
            name={item.isDone ? "checksquare" : "checksquareo"}
            color="green"
            size={25}
          />
        </TouchableOpacity>
        {!item.isDone && (
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeTask(index)}
          >
            <AntIcon name="close" color="red" size={25} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.WHITE,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: COLORS.BLUE,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
    fontSize: 20,
  },
  actionsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  removeButton: {
    marginLeft: 10,
  },
});
