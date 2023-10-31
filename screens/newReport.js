import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const data = [
    { label: "Cuarto 1", value: 1 },
    { label: "Cuarto 2", value: 2 },
    { label: "Cuarto 3", value: 3 },
];

export default function NewReport() {
    const [cuarto, setCuarto] = useState(null);

    const renderItem = (item) => {
        return (
            <View style={styles.item}>
                <Text style={[styles.text]}>{item.label}</Text>
            </View>
        );
    };

    return (
        <View>
            <Text style={[styles.titleText]}>Control de Temperatura</Text>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={[styles.text]}
                selectedTextStyle={[styles.text]}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Seleccionar Cuarto"
                value={cuarto}
                renderItem={renderItem}
                onChange={item => {
                    setCuarto(item.value);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#1e293b'
    },
    titleText: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 25,
    },
    dropdown: {
        margin: 16,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
});