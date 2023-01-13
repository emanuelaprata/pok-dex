import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home';
import Pokemons from './src/pages/pokemons'
import PokemonDetail from './src/pages/pokemonDetail';
import Evolucoes from './src/pages/evolucoes';
import Itens from './src/pages/itens';
import ItemDetail from './src/pages/itemDetail'
import TypesDetail from './src/pages/typeDetail';
import Types from './src/pages/type';
import EvolucaoDetail from './src/pages/evolucoesDetail';


function Rotas() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Pokemons" component={Pokemons} />
                <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
                <Stack.Screen name="Evolucoes" component={Evolucoes} />
                <Stack.Screen name="EvolucoesDetail" component={EvolucaoDetail} />
                <Stack.Screen name="Itens" component={Itens} />
                <Stack.Screen name="ItemDetail" component={ItemDetail} />
                <Stack.Screen name="Types" component={Types} />
                <Stack.Screen name="TypesDetail" component={TypesDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Rotas;