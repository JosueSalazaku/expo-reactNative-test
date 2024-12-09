import { StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import {useState} from "react";

export default function HomeScreen() {
    const [count, setCount] = useState(0);
    console.log("Hello, world! count: ", count);

    function sayHello(count: number) {
        if (count === 12) {
            return 'Goodbye, world!';
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, world!</Text>
            <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}><Text style={styles.buttonText}>count: {count} {sayHello(count)} </Text></TouchableOpacity>
        </View>
    );
}

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
    buttonText: {
        color: 'white',
    },
});