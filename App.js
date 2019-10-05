import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, FlatList } from 'react-native';
import { Item, Input, Button} from "native-base";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoListItems: [
        'Work',
        'Swim',
        'Study',
        'Sleep',
        'run'
      ],
      value: ''
    }
  }

  addTodoList() {
    this.state.todoListItems.push(this.state.value);
    this.setState({value: ''})
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
            <Text style={{width: '100%', borderBottomWidth: 1, padding: 5}}>{data}</Text>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
