import * as React from 'react';
import { View, Text } from 'react-native';

export default function downloadedBookScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.push("Inicio")}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Downloaded Book Screen</Text>
        </View>
    );
}
//comment