import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'
import { BackgroundImage } from '@rneui/base';

export default function ItemDetail({ route }) {

    const navigation = useNavigation()
    function goBack() {
        navigation.goBack()
    }

    const item = route.params.item.data
    //console.log(item)

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
                        source={{ uri: `${item.sprites.default}` }}
                        style={styles.imagePok}
                    />

                    <View style={{ backgroundColor: '#F5EEFF', borderRadius: 15, width: '85%', height: '60%',  padding: 15 }}>
                    <ScrollView>
                        <View>
                            <Text style={styles.cardTitle}>{item.name}
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.title}>Categoria: </Text>
                            <Text style={styles.text}>{item.category.name}</Text>
                        </View>

                        <View>
                            <Text style={styles.title}>Atributos:</Text>
                            {item.attributes.map((attribute, i) => {
                                return (
                                    <Text key={i} style={styles.text}>
                                        {i+1 + '. ' + attribute.name}
                                    </Text>
                                )
                            })}
                        </View>

                        <View>
                            <Text style={styles.title}>Efeitos:</Text>
                            {item.effect_entries.map((effects) => {
                                return (
                                    <Text style={styles.text}>
                                        {effects.effect}
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
        width: '50%',
        height: '30%',
        marginTop: -50,
        padding: 0,

    }
});
