import * as React from 'react';
import { View, Text } from 'react-native';

export default function quizScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.push("Home")}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Quiz Screen</Text>
        </View>
    );
}
//comment