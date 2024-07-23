import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";

interface Todo {
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const addTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, completed: false }]);
      setValue("");
    }
  };

  const toggleTodo = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index: number) => {
    setEditIndex(index);
    setValue(todos[index].text);
  };

  const updateTodo = () => {
    if (editIndex !== null && value.length > 0) {
      setTodos(
        todos.map((todo, i) =>
          i === editIndex ? { ...todo, text: value } : todo
        )
      );
      setValue("");
      setEditIndex(null);
    }
  };

  return (
    <View style={styles.appContainer}>
      <TextInput
        style={styles.todoInput}
        value={value}
        onChangeText={setValue}
        placeholder="Add a todo..."
      />
      <TouchableOpacity
        style={styles.addOrUpdateTodoButton}
        onPress={editIndex !== null ? updateTodo : addTodo}
      >
        <Text style={styles.buttonText}>
          {editIndex !== null ? "Update Todo" : "Add Todo"}
        </Text>
      </TouchableOpacity>
      <ScrollView>
        {todos.map((todo, index) => (
          <View key={index} style={styles.todoItemContainer}>
            <CheckBox
              checked={todo.completed}
              onPress={() => toggleTodo(index)}
            />
            <Text
              style={
                todo.completed ? styles.completedTodoText : styles.todoText
              }
            >
              {todo.text}
            </Text>
            <View style={styles.todoItemButtonsContainer}>
              <TouchableOpacity
                style={styles.editTodoButton}
                onPress={(e) => {
                  e.stopPropagation();
                  editTodo(index);
                }}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteTodoButton}
                onPress={(e) => {
                  e.stopPropagation();
                  deleteTodo(index);
                }}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 10,
  },
  todoInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  addOrUpdateTodoButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  todoItemButtonsContainer: {
    flexDirection: "row",
  },
  editTodoButton: {
    backgroundColor: "#ffc107",
    padding: 10,
  },
  deleteTodoButton: {
    backgroundColor: "#ff0000",
    padding: 10,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  todoItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#F8F8FF",
  },
  todoText: {
    fontSize: 16,
    flex: 1,
  },
  completedTodoText: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "gray",
    flex: 1,
  },
});
