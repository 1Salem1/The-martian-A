import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import Icon3 from 'react-native-vector-icons/FontAwesome'
import SearchIcon from "../../assets/MenuIcons/SearchIcon";


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
       
       <SearchIcon/>
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
   

    color : 'black',
    marginVertical : 15,
    
  },
  searchBar__unclicked: {
    flexDirection: "row",
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

    flexDirection: "row",
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