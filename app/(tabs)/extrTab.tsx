import {StyleSheet, Text, View} from "react-native";

export default function ExtraTab() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>ExtraTab</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: 'green',
    },
});
