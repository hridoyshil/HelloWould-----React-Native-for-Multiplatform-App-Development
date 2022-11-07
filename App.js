import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './components/ListItem/ListItem';

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceList] = useState([]);

  const list = placeList.map((item, i) => {
    return (
      <ListItem placeName={item} key={i} />
    )
  })
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={{
            width: "80%",
            borderBottomWidth: 1,
            borderColor: "green",
            padding: 7
          }}
          placeholder="Add a Place.."
          value={inputValue}
          onChangeText={text => setInputValue(text)}
        />
        <Button
          title="Add"
          onPress={() => {
            if (inputValue !== "") {
              setPlaceList([...placeList, inputValue])
            }
          }}
        />
      </View>
      <View style={{
        width: "100%"
      }}>
        {list}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  inputView: {
    padding: 20,
    width: "100%",
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
