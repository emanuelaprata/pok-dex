import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'
import { BackgroundImage } from '@rneui/base';


export default function Itens() {

    const navigation = useNavigation()

    function goBack() {
        navigation.goBack()
    }

    const [items, setItems] = useState([]);
    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        var endpoints = [];
        for (var i = 1; i < 21; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/item/${i}`);
        }
        axios.
            all(endpoints.map((endpoint) =>
                axios.get(endpoint)))
            .then((res) => setItems(res))
            .catch((error) => console.log(error));

    };


    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#CD0707' }}>

            {/* <BackgroundImage
                style={{ display: 'flex', width: '100%', height: '100%' }}
                source={require('../../assets/image/backItem.jpg')}>
                <StatusBar style="auto" /> */}
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline',marginTop: 50, marginLeft: 40, paddingBottom: 25 }}>
                <TouchableOpacity
                    onPress={goBack}
                    style={{ justifyContent: 'flex-start', marginRight: 20 }}>
                    <Icon
                        name='chevron-left'
                        color='white'
                    />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/image/pokemon.png')}
                    style={{ width: 230, height: 85}}
                />

            </View>


            <ScrollView>
                <View style={styles.flex}>
                    {items.map((item, i) => {
                        return (
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => {
                                    navigation.navigate('ItemDetail', { item })
                                }}>
                                <View key={i}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image
                                            source={{ uri: `${item.data.sprites.default}` }}
                                            style={styles.imagePok}
                                        />
                                    </View>
                                    <Text style={styles.cardTitle}>{item.data.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
            {/* </BackgroundImage> */}
        </View>
    );
}

const styles = StyleSheet.create({

    flex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
    ,
    card: {
        backgroundColor: '#F9EBEA',
        alignItems: 'center',
        padding: 8,
        margin: 8,
        width: '45%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
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
        textTransform: 'uppercase',
        textAlign: 'center',
    },

    imagePok: {
        width: 50,
        height: 50,
    }
});
