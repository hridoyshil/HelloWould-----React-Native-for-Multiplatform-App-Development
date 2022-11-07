import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceList from './components/PlaceList/PlaceList';
import InputPlace from './components/InputPlace/InputPlace';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceList] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelectedPlace = key => {
    const place = placeList.find(place => {
      return place.key === key;
    })
    setSelectedPlace(place);
  }

  const handleHideModal = () => {
    setSelectedPlace(null);
  }

  const handleDeleteItem = key => {
    setPlaceList(
      placeList.filter(place =>
        place.key !== key)
    );
    setSelectedPlace(null);
  }

  let placeDetail = null;
  if (selectedPlace !== null) {
    placeDetail = <PlaceDetail
      place={selectedPlace}
      handleHideModal={handleHideModal}
      handleDeleteItem={handleDeleteItem} />
  }
  return (
    <View style={styles.container}>
      {placeDetail}
      <InputPlace
        inputValue={inputValue}
        setInputValue={setInputValue}
        placeList={placeList}
        setPlaceList={setPlaceList}
      />
      <PlaceList placeList={placeList} handleSelectedPlace={handleSelectedPlace} />
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
