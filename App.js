import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, CheckBox } from 'react-native';
import { Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoListItems: [
        {id: 1, name: 'Work', done: false},
        {id: 2, name: 'run', done: false},
        {id: 3, name: 'play', done: false},
        {id: 4, name: 'swim', done: false}
      ],
      value: '',
      btnTitle: 'Add',
      currentEditItem: 0
    }
  }

  addTodoList(action) {
    if (action == 'Add') {
      let currId = this.state.todoListItems.length
      this.setState((state) => {
      let list = state.todoListItems.push({
        id: currId + 1,
        name: this.state.value
      })

      return {list, value: ''}
      })

      this.setState({value: ''})
    } else if (action == 'Edit') {
      this.setState((state) => {
        return state.todoListItems[state.currentEditItem].name = state.value
      })
      this.setState({value: '', btnTitle: 'Add'})
    }
  }

  deleteTodoList(id) {
    for (let i = 0; i < this.state.todoListItems.length; i++) {
      if (this.state.todoListItems[i].id == (id)) {
        this.setState((state) => {
          return state.todoListItems.splice(i, 1)
        })
      }
    }
  }

  doneTodoList(id) {
    if (this.state.todoListItems[id - 1].done == false) {
      this.setState((state) => {
        return state.todoListItems[id - 1].done = true
      })
    } else {
      this.setState((state) => {
        return state.todoListItems[id - 1].done = false
      })
    }
  }

  editTodo(id, name) {
    this.setState({value: name, btnTitle: 'Edit'})
    this.setState({currentEditItem: (id - 1)})
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{flexDirection: 'row', margin: 5}}>
          <TextInput
            style={{flex: 1, borderWidth: 1, marginRight: 5, borderColor: 'gray', borderRadius: 3}}
            onChangeText = {(text) => this.setState({value: text})}
            onPress={() => this.deleteTodoList(data.id)}  value = {this.state.value}
          />
          <Button light
            style={{borderRadius: 5, fontWeight: 'bold', padding: 10, height: 50, borderWidth: 1, borderColor: 'gray'}}
            onPress ={() => this.addTodoList(this.state.btnTitle)}>
            <Text>{this.state.btnTitle}</Text>
          </Button>
        </View>
        <View>
          {this.state.todoListItems.map((data) =>
            <View style={{width: '100%', borderBottomWidth: 1, padding: 5, flexDirection: 'row'}}>
              <CheckBox
                value={data.done}
                onValueChange={() => this.doneTodoList(data.id)}
              />
              <Text style={{flex: 8, paddingVertical: 10}}>{data.name}</Text>
              <Button
                style={{paddingHorizontal: 10, marginRight: 5, backgroundColor: "none", borderWidth: 1, borderColor: 'grey'}}
                onPress={() => this.editTodo(data.id, data.name)}>
                <Icon name="pencil-alt" size={20} color="green" />
              </Button>
              <Button
                style={{paddingHorizontal: 10, backgroundColor: "none", borderWidth: 1, borderColor: 'grey'}}
                onPress={() => this.deleteTodoList(data.id)} >
                <Icon name="trash-alt" size={20} color="red" />
              </Button>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
