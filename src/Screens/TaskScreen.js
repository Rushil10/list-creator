import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, TextInput, Dimensions, Button, FlatList } from 'react-native';

const { height, width } = Dimensions.get('window')

function TaskScreen(props) {

    const [tasks, setTasks] = useState([])
    const [list, setList] = useState([])
    const [stt, setStt] = useState('')

    const makeRandom = () => {
        var result = '';
        var characters = ['Milk', 'Apple', 'Oranges', 'Kiwi', 'Bread', 'Coffee'];
        var charactersLength = characters.length;
        var length = Math.floor((Math.random() * charactersLength));
        return characters[length];
    }

    const addRandomTask = () => {
        var task = makeRandom();
        if (stt.length > 0 && task.indexOf(stt) > -1) {
            setList([task, ...list])
        }
        if (stt.length === 0) {
            setList([task, ...list])
        }
        setTasks([task, ...tasks])
    }

    const changedText = (st) => {
        //console.log(st)
        setStt(st)
        if (st.length === 0) {
            setList(tasks)
            return
        }
        const newData = list.filter(item => {
            const itemData = item.toUpperCase();
            const textData = st.toUpperCase();
            return itemData.indexOf(textData) > -1
        });
        setList(newData)
    }

    return (
        <SafeAreaView style={styles.flex1}>
            <View style={styles.rowFlex}>
                <TextInput onChangeText={(st) => changedText(st)} placeholder="Search Items" style={styles.textInputStyle} />
                <View style={styles.flex1}></View>
                <View style={styles.buttonStyle}>
                    <Button onPress={addRandomTask} title="+" />
                </View>
            </View>
            <View style={styles.flex1}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={list}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <View style={styles.card}>
                            <Text>{item}</Text>
                        </View>
                    }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rowFlex: {
        flexDirection: 'row',
        marginTop: 9,
        paddingHorizontal: 5,
        marginBottom: 5
    },
    textInputStyle: {
        width: 0.85 * width,
        fontSize: 15,
        borderWidth: 1,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5
    },
    buttonStyle: {
        width: 0.1 * width,
    },
    flex1: {
        flex: 1
    },
    card: {
        marginHorizontal: 5,
        padding: 9,
        fontSize: 19,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 9,
        marginVertical: 7
    }
})

export default TaskScreen;