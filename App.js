import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceList from './components/PlaceList/PlaceList';
import InputPlace from './components/InputPlace/InputPlace';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceList] = useState([]);

  return (
    <View style={styles.container}>
      <InputPlace
        inputValue={inputValue}
        setInputValue={setInputValue}
        placeList={placeList}
        setPlaceList={setPlaceList}
      />
      <PlaceList placeList={placeList} />
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
  }
});
