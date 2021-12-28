import * as React from 'react';
import { View, Text } from 'react-native';
import { useState } from 'react/cjs/react.development';

export default function DownloadsScreen({ navigation }) {
    const [allDownloads,setDownloads]=useState([]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.push("DownloadedBook")}
                style={{ fontSize: 20, fontWeight: 'bold' }}>No books downloaded yet...</Text>
        </View>
    );
}
//comment

