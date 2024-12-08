import {Image, StyleSheet, Platform, View, Text} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useState} from "react";

export default function HomeScreen() {
    const [count, setCount] = useState(0);
    console.log("Hello, world! count: ", count);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, world!</Text>
        </View>
    );
}

// create the style for the text
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

