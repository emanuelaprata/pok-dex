import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'
import { BackgroundImage } from '@rneui/base';


export default function PokemonDetail({ route }) {

    const navigation = useNavigation()
    const pokemon = route.params.item.data
    const [pokemonInfo, setPokemonInfo] = useState([])
    console.log(pokemonInfo)
    const [evolucao, setEvolucao] = useState([])

    function goBack() { navigation.goBack() }
    useEffect(() => {
        fetch(`https://pokeapi.glitch.me/v1/pokemon/${pokemon.name}`,
            {
                method: 'GET',
                headers: {
                    'Accepet': 'application/json'
                },
            })
            .then(resposta => resposta.json())
            .then(data => {
                setPokemonInfo(data[0])
            })
    },

    () => {
        var endpoints = []
        var name = []
        pokemon.family.evolutionLine.forEach(function (nome) {
            name.push(nome);
            //console.log(name)
        })

        name.forEach(function (nome) {
            endpoints.push(`https://pokeapi.glitch.me/v1/pokemon/${nome}`);
            //console.log(endpoints)
        });
        axios.
            all(endpoints.map((endpoint) =>
                axios.get(endpoint)))
            .then((res) => console.log(res))
            .catch((error) => console.log(error))
    },
        []);


    // useEffect(() => {
    //     getEvolucao()
    // }, []);


    // const getEvolucao = () => {
    //     var name = []
    //     pokemon.family.evolutionLine.forEach(function (nome) {
    //         name.push(nome.toLowerCase());
    //         //console.log(name)
    //     })
    //     var endpoints = []
    //     name.forEach(function (nome) {
    //         endpoints.push(`https://pokeapi.glitch.me/v1/pokemon/${nome}`);
    //         //console.log(endpoints)
    //     });
    //     axios.
    //         all(endpoints.map((endpoint) =>
    //             axios.get(endpoint)))
    //         .then((res) => setEvolucao(res))
    //         .catch((error) => console.log(error));
    // }


    return (
        <View style={{ width: '100%', backgroundColor: 'white', height: '100%' }}>
            <BackgroundImage
                style={{ display: 'flex', width: '100%', height: '100%' }}
                source={require('../../assets/image/background.jpg')}>
                <StatusBar style="auto" />

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', marginTop: 50, marginLeft: 15 }}>
                    <TouchableOpacity
                        onPress={goBack}>
                        <Icon
                            name='chevron-left'
                            color='white'
                        />
                        <Text style={{ color: 'white' }}>Pokédex</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.center}>
                    <Image
                        source={{ uri: `${pokemonInfo.sprite}` }}
                        style={styles.imagePok}
                    />
                    <Text style={styles.cardTitle}>
                        {pokemonInfo.name}
                    </Text>

                    <View style={styles.flexRow}>
                        {pokemon.types.map((type) => {
                            return (
                                <View style={{
                                    backgroundColor: '#F1948A',
                                    margin: 2,
                                    borderRadius: 5
                                }}>
                                    <Text style={{ color: 'white', textTransform: 'uppercase', padding: 5 }}>
                                        {type.type.name}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                </View>

                <View style={styles.flexRow2}>
                    <View style={styles.id}>

                        <Text style={styles.idTitle}>
                            {'0' + pokemon.id}
                        </Text>
                        <Text style={styles.idSubtitle}>
                            N°
                        </Text>
                    </View>

                    <View style={styles.id}>

                        <Text style={styles.idTitle}>
                            {pokemonInfo.height}
                            {/* {' ' + parseFloat(pokemonInfo.height) / 3.281.toPrecision(2) + ' m'} */}
                        </Text>
                        <Text style={styles.idSubtitle}>Altura</Text>
                    </View>

                    <View style={styles.id}>

                        <Text style={styles.idTitle}>
                            {pokemonInfo.weight}
                            {/* {' ' + parseFloat(pokemonInfo.weight) / 2.205.toPrecision(2) + ' kg'} */}
                        </Text>
                        <Text style={styles.idSubtitle}>Peso</Text>
                    </View>

                </View>

                <ScrollView>
                    <View style={styles.flexRow2}>
                        {pokemon.stats.map((status) => {
                            return (
                                <View style={styles.card}>
                                    <Text style={{ color: '#99A3A4', fontSize: 12, textTransform: 'uppercase', fontWeight: 'bold' }}>
                                        {status.stat.name}
                                    </Text>
                                    <Text style={{ color: 'black', fontSize: 14, textTransform: 'uppercase', fontWeight: 'bold' }}>
                                        {status.base_stat}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>

                    <View style={{ marginVertical: 20, alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 14, textTransform: 'uppercase', fontWeight: 'bold', marginVertical: 5 }}>
                            Habilidades
                        </Text>
                        {pokemon.abilities.map((abilitie) => {
                            return (
                                <Text style={{ color: '#99A3A4', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', marginVertical: 5 }}>
                                    {abilitie.ability.name}
                                </Text>
                            )
                        })}
                    </View>



                </ScrollView>

            </BackgroundImage>
        </View>
    );
}

const styles = StyleSheet.create({

    flexRow: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' },

    flexRow2: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' },

    id: { flexGrow: 1, alignItems: 'center' },

    idTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#424949',
        marginTop: 5
    },

    idSubtitle: {
        fontWeight: '500',
        color: 'gray',
        marginBottom: 5
    },

    center: { justifyContent: 'center', alignItems: 'center', textAlign: 'center' }
    ,

    cardTitle: {
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    imagePok: {
        width: 200,
        height: 200,
    },
    card: {
        margin: 10,
        padding: 3,
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#CD0707',
        borderStyle: 'solid',
        borderWidth: 0.2,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#7B241C',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 2.5,
        shadowOpacity: 0.9,
        elevation: 1
    }
});
