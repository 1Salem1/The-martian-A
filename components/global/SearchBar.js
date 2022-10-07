import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import Icon3 from 'react-native-vector-icons/FontAwesome'


const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
       
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
       
       <Icon3 name='search' style={{marginRight:10,  color: '#666666' , fontSize: 20 }} />
  
      </View>
      {props.clicked && (
        <View>
         
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
   
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",

    color : 'black'

    
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    borderRadius: 5,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    borderRadius: 5,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  input: {
    padding: 10,
    flexDirection: "row",
    width: "89%",
    color : 'black',
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    
  },
});