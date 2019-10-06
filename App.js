import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, CheckBox } from 'react-native';
import { Button } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoListItems: [
        {id:1, name:'Work', done: false},
        {id:2, name:'run', done: false},
        {id:3, name:'play', done: false},
        {id: 4, name:'swim', done: false}
      ],
      value: ''
    }
  }

  addTodoList() {
    let currId = this.state.todoListItems.length;
    this.setState((state) => {
      const list = state.todoListItems.push({
        id: currId + 1,
        name: this.state.value
      })

      return {list, value: ''}
    })
    this.setState({value: ''})
  }

  deleteTodoList(id) {
    for (let i = 0; i < this.state.todoListItems.length; i++) {
      if (this.state.todoListItems[i].id == (id)) {
        this.setState((state) => {
          const list = state.todoListItems.splice(i, 1)

          return list
        })
      }
    }
  }

  doneTodoList(id) {
    if (this.state.todoListItems[id - 1].done == false) {
      this.setState((state) => {
        const list = state.todoListItems[id - 1].done = true
  
        return list
      })
    } else {
      this.setState((state) => {
        const list = state.todoListItems[id - 1].done = false
  
        return list
      })
    }
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{flexDirection: 'row', margin: 5}}>
          <TextInput
          style={{flex: 1, borderWidth: 1, marginRight: 5, borderColor: 'gray', borderRadius: 3}}
          onChangeText = {(text) => this.setState({value: text})}
          value = {this.state.value}
          />
          <Button light
          style={{borderRadius: 5, fontWeight: 'bold', padding: 10, height: 50, borderWidth: 1, borderColor: 'gray'}}
          onPress ={() => this.addTodoList()}><Text>Add</Text></Button>
        </View>
        <View>
          {this.state.todoListItems.map((data) =>
            <View style={{width: '100%', borderBottomWidth: 1, padding: 5, flexDirection: 'row'}}>
              <CheckBox
                value={data.done}
                onValueChange={() => this.doneTodoList(data.id)}
              />

              <Text style={{flex: 8, paddingVertical: 10}}>{data.name}</Text>
              <Button onPress={() => this.deleteTodoList(data.id)} style={{paddingHorizontal: 10, backgroundColor: "none", borderWidth: 1, borderColor: 'grey'}}><Icon name="md-trash" size={20} color="red" /></Button>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
