import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, FlatList } from 'react-native';
import { Button } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoListItems: [
        {id: 1, name: 'Work'},
        {id: 2, name: 'run'},
        {id: 3, name: 'play'},
        {id: 4, name: 'swim'}
      ],
      value: ''
    }
  }

  addTodoList() {
    let currId = this.state.todoListItems.length,
    newItems = [{
      id: currId + 1,
      name: this.state.value,
      done: false
    }]

    this.setState({todoListItems: [...this.state.todoListItems, ...newItems]});
    this.setState({value: ''})
  }

  deleteTodoList(id) {
    this.setState({todoListItems: this.state.todoListItems.filter((items) => {
      return items.id != id
    })})
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
            onPress ={() => this.addTodoList()}
          >
            <Text>Add</Text>
          </Button>
        </View>
        <View>
          {this.state.todoListItems.map((data) =>
            <View style={{width: '100%', borderBottomWidth: 1, padding: 5, flexDirection: 'row'}}>
              <Text style={{flex: 8, paddingVertical: 10}}>{data.name}</Text>
              <Button
                style={{paddingHorizontal: 10, backgroundColor: "none", borderWidth: 1, borderColor: 'grey'}}
                onPress={() => this.deleteTodoList(data.id)} 
              >
                <Icon name="md-trash" size={20} color="red" /></Button>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
