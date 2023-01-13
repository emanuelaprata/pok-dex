import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'

export default function Pokemons() {
    const navigation = useNavigation()
    function goBack() {
        navigation.goBack()
    }

    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for (var i = 1; i < 10; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }
        axios.
            all(endpoints.map((endpoint) =>
                axios.get(endpoint)))
            .then((res) => setPokemons(res))
            .catch((error) => console.log(error));

    };


    



    const searchPokemon = (name) => {
        var pokemonsFiltrados = [];
        if (name === "") {
            getPokemons();
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                pokemonsFiltrados.push(pokemons[i]);
            }
        }
        setPokemons(pokemonsFiltrados);
    }

    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon',
    //     {
    //     method: 'POST', put também seria assim, só passaria o parametro na URL
    //     headers: {
    //         'Content-type' : 'application/json',
    //         'Accepet' : 'application/json'
    //     },
    //     body: JSON.stringify({
    //         name: '',
    //     })
    //     }
    //     {
    //     method: 'GET', //delet também seria assim , só passaria o parametro na URL
    //     headers: {
    //         'Accepet' : 'application/json'
    //     },
    //     })
    //     //retorna uma promisse(promessa) que é resolvido com o .then
    //     .then(resposta => resposta.json())
    //     .then(data => {
    //         console.log(data),
    //         setPokemons(data.results)
    //     })
    //     }, []);

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>

            <View
                style={{
                    backgroundColor: '#CD0707',
                    color: 'white',
                    flexDirection: 'row',
                    display: 'flex',
                    height: 100,
                    alignItems: 'flex-end',
                }}>
                <TouchableOpacity
                    onPress={goBack}
                    style={{ marginBottom: 20 }}>
                    <Icon
                        name='chevron-left'
                        color='white'
                    />
                </TouchableOpacity>
                <Image
                    style={{ width: '60%', height: 40, marginLeft: 50, marginBottom: 15 }}
                    source={require('../../assets/image/pokedex.png')}
                />
            </View>

                <View style={{alignItems: 'center', marginTop: 10}}>
            <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#F9EBEA',
                    borderRadius: 100,
                    width: '65%',
                    padding: 0,
                    paddingStart: '10%',
                    marginBottom: 17
                }}>
                    <View style={{ width: '70%' }}>
                        <TextInput
                            onChangeText={(e) => searchPokemon(e)}
                            onChange={(e) => searchPokemon(e)}
                            placeholder="Search"
                            style={{
                                fontSize: 20,
                                borderRadius: 2,
                                borderColor: '#CD6155',
                                borderBottomWidth: 2,
                                textAlign: 'center'
                            }}
                        />
                    </View>
                    <View>
                        <Icon
                            name='search' color='#CD6155' style={{ margin: 10 }}
                        />
                    </View>
                </View>
                </View>


            <ScrollView>

                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>

                    {pokemons.map((item, i) => {
                        return (
                            <View key={i}
                                style={styles.card}
                            >
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('PokemonDetail', { item })
                                }}>
                                    <View style={{}}>
                                        <Image
                                            source={{ uri: `${item.data.sprites.front_default}` }}
                                            style={styles.imagePok}
                                        />
                                    </View>
                                    <Text style={styles.cardTitle}>{item.data.name}</Text>
                                    <Text style={{ textTransform: 'uppercase', textAlign: 'center', color: 'white', fontSize: 7}}>
                                        {item.data.types.map((a) => {
                                            if (a.slot == 1) {
                                                return (
                                                    item.data.types[0].type.name
                                                )
                                            } else if (a.slot == 2) {
                                                return (
                                                    " | " + item.data.types[1].type.name
                                                )
                                            }
                                        })}
                                    </Text>
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

    title: {
        paddingBottom: 5,
        fontSize: 30,
        fontWeight: '500',
        color: 'white'

    },

    containerTextInput: {
        backgroundColor: 'yellow',
        height: 69,
        borderRadius: 10,
        margin: 30,
        alignItems: 'flex-start'

    },

    card: {
        // display: 'flex',
        // flexWrap: 'wrap',
        backgroundColor: '#C0392B',
        justifyContent: 'center',
        padding: 8,
        margin: 8,
        width: '45%',
        borderRadius: 8,
        shadowColor: '#7B241C',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3
    },

    cardTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    },

    imagePok: {
        width: 150,
        height: 120,
    }
});
