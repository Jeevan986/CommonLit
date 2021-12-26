import * as React from 'react';
import { View, Text } from 'react-native';

export default function DownloadsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.push("Detalles")}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Descargar Screen</Text>
        </View>
    );
}
//comment

