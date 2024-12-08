import {Image, StyleSheet, Platform, View, Text, Touchable, TouchableOpacity} from 'react-native';

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
            <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}><Text>count: {count}</Text></TouchableOpacity>
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
        color: 'green',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        backgroundColor: 'green',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
});

