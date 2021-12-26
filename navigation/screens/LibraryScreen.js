import * as React from 'react';
import { View, Text } from 'react-native';

export default function LibraryScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.push("Detalles")}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Biblioteca Screen</Text>
        </View>
    );
}