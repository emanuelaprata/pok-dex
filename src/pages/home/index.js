import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'
import { BackgroundImage } from '@rneui/base';
import Pokemons from '../pokemons';
import Itens from '../itens';
import Types from '../type';
import Evolucoes from '../evolucoes';

export default function Home() {

    const navigation = useNavigation();

    return (

        <View style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: 'black' }}>
            <BackgroundImage
                style={{ display: 'flex', width: '100%', height: '100%' }}
                source={require('../../assets/image/background.jpg')}>
                <StatusBar style="auto" />

                <View
                    style={{ alignItems: 'center', marginHorizontal: 20, marginTop: 70}}>
                    <Image
                        style={{ width: 300, height: 110 }}
                        source={require('../../assets/image/pokemon.png')}
                    />
                </View>

                <View  style={{alignItems: 'center'}}>
                <Image
                                style={{width: 150, height: 160}}
                                source={require('../../assets/image/giphy.gif')} />
                
                </View>
                

                <View style={styles.flexRow}>

                    <TouchableOpacity
                        style={styles.card1}
                        onPress={() => {
                            navigation.navigate('Pokemons', Pokemons)
                        }}>
                        <View style={styles.flexRow}>
                            <Text
                                style={styles.cardTitle}>
                                Pokédex
                            </Text>
                            <Image
                                style={styles.icons}
                                source={require('../../assets/image/pokebola.png')} />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card3}
                        onPress={() => {
                            navigation.navigate('Types', Types)
                        }}>
                        <View style={styles.flexRow}>
                            <Text
                                style={styles.cardTitle}>
                                Tipos
                            </Text>
                            <Image
                                style={styles.icons}
                                source={require('../../assets/image/raio.png')} />

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.card2}
                        onPress={() => {
                            navigation.navigate('Evolucoes', Evolucoes)
                        }}>
                        <View style={styles.flexRow}>
                            <Text
                                style={styles.cardTitle}>
                                Evoluções
                            </Text>
                            <Image
                                style={styles.icons}
                                source={require('../../assets/image/evolucao.png')} />

                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.card5}
                        onPress={() => {
                            navigation.navigate('Itens', Itens)
                        }}>
                        <View style={styles.flexRow}>
                        <Text
                                style={styles.cardTitle}>
                                Itens
                            </Text>
                            <Image
                            style={styles.icons}
                            source={require('../../assets/image/mochila.png')} />
                        </View>
                    </TouchableOpacity>

                    
                </View>

                
            </BackgroundImage>
        </View>
    );
}

const styles = StyleSheet.create({

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    card1: {
        backgroundColor: '#CD0707',
        margin: 8,
        width: '45%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3
    },

    card2: {
        backgroundColor: '#CD0707',
        margin: 8,
        width: '45%',
        height: 80,
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

    card3: {
        backgroundColor: '#CD0707',
        margin: 8,
        width: '45%',
        height: 80,
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

    card4: {
        backgroundColor: '#CD0707',
        margin: 8,
        width: '45%',
        height: 80,
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

    card5: {
        backgroundColor: '#CD0707',
        margin: 8,
        width: '45%',
        height: 80,
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

    card6: {
        backgroundColor: '#CD0707',
        margin: 8,
        width: '45%',
        height: 80,
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
        marginTop: 5,
        marginRight: 10,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',

    },

    icons: {
        width: 40,
        height: 40,
    }
});
