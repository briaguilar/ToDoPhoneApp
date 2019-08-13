import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import InputBar from "./components/inputBar";
import ToDoItem from "./components/TodoItem";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusbar: {
    backgroundColor: "#FFCE00",
    height: 20
  }
})



// export default function App() {
export default class App extends React.Component {


  constructor() {
    super();

    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: "Take out the trash", done: false },
        { id: 1, title: "Cook dinner", done: false }
      ]
    }
  }

  addNewTodo() {
    // console.log(this.state.todoInput)

    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      todo: this.state.todoInput,
      done: false
    });

    this.setState({
      todos,
      todoInput: ""
    });
  }

  render() {
    const statusbar = (Platform.OS == "ios") ? <View style={styles.statusbar}></View> : <View></View>;

    return (
      <View style={styles.container}>
        {statusbar}

        <Header title="Hey, here's your To-Do List!" />

        <InputBar
          textChange={todoInput => this.setState({ todoInput })}
          addNewTodo={() => this.addNewTodo()}
        />

        <Text>{this.state.todoInput}</Text>

        <FlatList
          data={this.state.todos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item, index) => {
            return (
              <ToDoItem todoItem={item} />
            )
          }}
        />
      </View>
    );
  }


};
