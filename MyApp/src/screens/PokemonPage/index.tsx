import api from "../../service/api";
import { Background } from "../../components/Background";
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Pokemon } from "../Home";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { useEffect, useState } from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextBox } from "../../components/TextBox";


/* 
	Componente que renderiza a página do pokemon quando clica no card na home
	Página é composta de:
	Um TouchableOpacity que serve como botão para voltar 
	para atela anterior.
	Um título que contêm o Id na pokedex e o nome do pokemon.
	Um campo que contêm o(s) tipo(s) do pokemon.
	Uma imagem do pokemon.
	Um campo que contêm o flavor text de uma entrada do pokemon a pokedex.

*/
export function PokemonPage () {

	// estado para guardar o flavor text que aparece na tela
	const [entry, setEntry] = useState('');

	// hook utilizado para navegação para a página Home da pokedex
	const navigation = useNavigation();

	// variável utilizada para simular um icone de seta e função de controle de rota para a página principal
	const goBack = '<'
	function handleGoBack() {
		navigation.goBack();
	}

	// hook de rota utilizado para manejar os dados recebidos como parametro pela rota
	const routes = useRoute();
	const pokemon = routes.params as Pokemon;

	// variável para armazenar os nomes dos tipos do pokemon em um array e criar uma string que diz os tipos do pokemon 
	const types = [];
	types.push(pokemon.types[0].type.name);
	let textTypes = "Types: " + types[0] 
	if (pokemon.types[1]) {
		types.push(pokemon.types[1].type.name);
		textTypes = textTypes + " and " + types[1]
	}
	

	// chamada a API para resgatar, formatar e guardar em estado o flavor text 
	useEffect(() => {
		async function getFlavorText() {
			const response = await  api.get(`/pokemon-species/${pokemon.id}`)
			const { flavor_text_entries }  = response.data;
			const flavorText = flavor_text_entries[0].flavor_text.replaceAll("\n", " ");
			setEntry(flavorText)
		}
		getFlavorText()
	}, []);

	return (
		<Background>
			<SafeAreaView>
				<TouchableOpacity
				onPress={handleGoBack}
				style={styles.button}>
					<Text style={styles.font_button}> {goBack} </Text>
				</TouchableOpacity>
				<View style={styles.title}>
					<Text style={styles.title_text}>
						{pokemon.id} - {pokemon.name}
					</Text>
				</View>
				<TextBox text={textTypes} style={styles.subtitle_text}>

				</TextBox>
				<Image
				style={styles.image}
				source={{uri: pokemon.sprites.front_default }}
				/>		
				<TextBox text={entry} style={styles.text}>
				</TextBox>
			</SafeAreaView>
		</Background>
	)
}
/*
		<View style={styles.subtitle}>
							<Text style={styles.subtitle_text}>
								Types: {types[0]} {types[1]? `and ${types[1]}`: <></>}
							</Text>
						</View>*/