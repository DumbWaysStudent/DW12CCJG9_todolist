import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, FlatList } from 'react-native';
// import { Item, Input, Button} from "native-base";

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

  render() {
    return (
      <SafeAreaView>
        {this.state.todoListItems.map((data) =>
          <Text style={{width: '100%', borderBottomWidth: 1, padding: 5}}>{data}</Text>
        )}
      </SafeAreaView>
    );
  }
}

export default App;