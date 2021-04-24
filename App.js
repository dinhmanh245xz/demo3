import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,

} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      todoList: [],
      size : 15,
      background :'blue',
    };
  }

  render() {
    

    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',}}>
        <TextInput
          placeholder="Enter your todo list"
          value={this.state.inputValue}
          onChangeText={(value) => {
            this.setState({inputValue: value});
          }}
        />

        <TouchableOpacity
        style={{ padding:10}}
          onPress={() => {
            this.setState({
            
              todoList: [
                ...this.state.todoList,
                {
                  value: this.state.inputValue,
                },
              ],
            });
          }}>
          <Text>Add Todo</Text>
        </TouchableOpacity>
        </View>
       

        {this.state.todoList.map((e) => {
          return <TouchableOpacity style={{width:300 ,justifyContent:'center', alignItems:'center'}}
          onPress={()=>{this.setState({
                size: this.state.size+4,
                background: this.state.background='red',
          })}}>
                       <Text style={{fontSize:this.state.size, backgroundColor:this.state.background}}>{e.value}</Text>
                 </TouchableOpacity>
         
        })}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }, 
  text: {
    padding:10,
    borderWidth:1,
    
  },
});