import api from '../../service/api'
import { Background } from '../../components/Background';
import {
    FlatList,
    StatusBar,
    Image,
} from 'react-native';
import { Pokecard } from '../../components/Pokecard';
import  Pokedex  from '../../assets/pokedex.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'

// Tipo para "tipar" um tipo de um pokemon 
type PokemonType = {
    name: string,
    url: string,
}

// Tipo para "tipar" qual os tipos de 1 pokemon
type SlotType = {
    slot: number,
    type: PokemonType
}

// Tipo que "tipa" os pokemons resgatados na API
export type Pokemon = {
    name: string,
    url: string,
    id: number,
    types: SlotType[],
    sprites: {
        back_default:string,
        back_female:string,
        back_shiny:string,
        back_shiny_female:string,
        front_default:string,
        front_female:string,
        front_shiny: string, 
        front_shiny_female: string,
    }
}

/*
    Tela Inicial do aplicativo, onde que renderiza a pokedex, que possui:
    Um logo "Pokedex"
    Uma lista de Pokecards que possuiem o número identificador do pokemon na pokedex
    e o nome do pokemon, esses Pokecards são clicáveis e ao clicar neles é o usuário
    é redirecionado para uma PokemonPage do pokemon do card clicado
    
*/
export function Home() {

    // estado que para guardar quais pokemons serão exibidos na tela
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    
    // hook e função utilizados para navegação para a página do pokemon específico clicado
    const navigation = useNavigation();
    function handleOpenPokemonPage( { id, name, sprites, types, url }: Pokemon) {
        navigation.navigate("pokemonPage", { id, name, sprites, types, url })
    }

    // chamada a API para resgatar informações de um pokemon e guardar as mesmas em estado  
    useEffect(() => {
        async function getAllPokemons() {
            const response = await api.get('/pokemon?offset=0&limit=151')
            const { results } = response.data;

            const payloadPokemons = await Promise.all( 
                results.map(async (pokemons: Pokemon) => {
                    const { id, name , types, sprites } = await getMoreInfo(pokemons.url)
                    const pokemonName = name.toUpperCase()
                    return { name: pokemonName,
                        id,
                        types,
                        sprites
                    }
                })
            )
            setPokemon(payloadPokemons)
        }
        getAllPokemons()
    }, []);
    
    //função que faz chamada a API para recuperar informações específicas de um pokemon
    async function getMoreInfo(url:string) {
        const response = await api.get(url)
        const { id, name, types, sprites } = response.data    
        return {
            id,
            name,
            types,
            sprites,
        }
    }

    

    return (
        <Background>
            <SafeAreaView>
                <StatusBar></StatusBar>
                <Image
                source={ Pokedex }
                defaultSource={ Pokedex }
                style={styles.container}
                />
                <FlatList
                style={styles.list}
                data={pokemon}
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                    <Pokecard
                    data = { item }
                    onPress ={() => handleOpenPokemonPage(item)}
                    />
                    )}
                >
                </FlatList>
            </SafeAreaView>
        </Background>
    );
}