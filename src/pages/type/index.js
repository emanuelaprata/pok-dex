import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'
import types from './types.json'

export default function Types() {

    const navigation = useNavigation()

    function goBack() {
        navigation.goBack()
    }

    const [items, setItems] = useState(
        types
    )



    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#CD0707' }}>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', marginTop: 50, marginLeft: 40, paddingBottom: 25 }}>
                <TouchableOpacity
                    onPress={goBack}
                    style={{ justifyContent: 'flex-start', marginRight: 20 }}>
                    <Icon
                        name='chevron-left'
                        color='black'
                    />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/image/pokemon.png')}
                    style={{ width: 230, height: 85 }}
                />
            </View>

            <ScrollView>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    }}>
                    {items.map((item, i) => {
                        const tipo = item
                        return (
                            <View key={i} style={styles.card}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('TypesDetail', { tipo })
                                }}>
                                    <View  style={styles.flex}>
                                        <View>
                                            <Text style={styles.cardTitle}>{item.name}</Text>
                                        </View>
                                        <Image
                                            source={{ uri: `${item.image}` }}
                                            style={styles.imagePok}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    flex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

    title: {
        paddingBottom: 5,
        fontSize: 30,
        fontWeight: '500',

    },
    card: {
        width: '43%',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        padding: 3,
        margin: 9,
        borderRadius: 10,
        backgroundColor: '#F9EBEA',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3
    },

    cardTitle: {
        fontSize: 15,
        color: '#CD0707',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 11,
        textTransform: 'uppercase',
        flexGrow: 1,
        marginRight: 10
    },

    imagePok: {
        width: 40,
        height: 40,
        marginVertical: 3
    }
});
