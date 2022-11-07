import React from 'react';
import { View, Modal, Image, Text, Button } from 'react-native';

const PlaceDetail = props => {
    return (
        <Modal>
            <View>
                <Text>{props.place.value}</Text>
                <View>
                    <Button title="Delete" />
                </View>
            </View>
        </Modal>
    )
}

export default PlaceDetail;
