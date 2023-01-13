import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image } from 'react-native';
import { Icon } from "@rneui/themed";

export default function TypesDetail({route}) {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }
    
    // console.log(route.params)

    const tipo = route.params.tipo
    console.log(tipo.fraqueza[0].name)

    return (
        <View style={{ width: '100%', backgroundColor: '#CD0707', height: '100%' }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', marginTop: 60, marginLeft: 40, paddingBottom: 0 }}>
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
                        style={{ width: 230, height: 85 }}
                    />

                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: '#37007E',
                    shadowOffset: {
                        width: 0,
                        height: 4
                    },
                    shadowRadius: 5,
                    shadowOpacity: 1.0,
                    elevation: 3
                }}>
                    
                    <Image
                        source={{ uri: `${tipo.image}` }}
                        style={styles.imagePok}
                    />

                    <View style={{ backgroundColor: '#F5EEFF', borderRadius: 15, width: '85%', height: '60%',  padding: 15 }}>
                    <ScrollView>
                        <View>
                            <Text style={styles.cardTitle}>{tipo.name}</Text>
                        </View>

                        <View>
                            <Text style={styles.title}>Não causa dano:</Text>
                            {tipo.naoCausaDano.map((dano) => {
                            return (
                                <Text style={{ color: '#99A3A4', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', marginVertical: 5 }}>
                                    {dano.name}
                                </Text>
                            )
                        })}                     
                        </View>

                        <View>
                            <Text style={styles.title}>Super efetivo:</Text>
                            {tipo.superEfetivo.map((efetivo) => {
                            return (
                                <Text style={{ color: '#99A3A4', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', marginVertical: 5 }}>
                                    {efetivo.name}
                                </Text>
                            )
                        })}                     
                        </View>

                        <View>
                            <Text style={styles.title}>Menos efetivo:</Text>
                            {tipo.menosEfetivo.map((naoEfetivo) => {
                            return (
                                <Text style={{ color: '#99A3A4', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', marginVertical: 5 }}>
                                    {naoEfetivo.name}
                                </Text>
                            )
                        })}                     
                        </View>

                        <View>
                            <Text style={styles.title}>Fraqueza:</Text>
                            {tipo.fraqueza.map((fraquezas) => {
                            return (
                                <Text style={{ color: '#99A3A4', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', marginVertical: 5 }}>
                                    {fraquezas.name}
                                </Text>
                            )
                        })}                     
                        </View>

                        <View>
                            <Text style={styles.title}>Resistente:</Text>
                            {tipo.resistente.map((resistente) => {
                            return (
                                <Text style={{ color: '#99A3A4', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', marginVertical: 5 }}>
                                    {resistente.name}
                                </Text>
                            )
                        })}                     
                        </View>

                        <View>
                            <Text style={styles.title}>Imune:</Text>
                            {tipo.imune.map((imune) => {
                            return (
                                <Text style={{ color: '#99A3A4', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', marginVertical: 5 }}>
                                    {imune.name}
                                </Text>
                            )
                        })}                     
                        </View>

                        </ScrollView>
                    </View>
                </View>
        </View>
    );  
}

const styles = StyleSheet.create({

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
    ,
    title:
    {
        fontSize: '18',
        textTransform: 'uppercase',
        fontWeight: '500',
        marginVertical: 8
    }
    ,

    cardTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        textTransform: 'uppercase',
        textAlign: 'center',
        margin: 5
    },

    text: {
        color: '#99A3A4',
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginVertical: 5
    },

    imagePok: {
        width: '30%',
        height: '22%',
        marginTop: -50,
        margin: 20,
        padding: 0,

    }
});
