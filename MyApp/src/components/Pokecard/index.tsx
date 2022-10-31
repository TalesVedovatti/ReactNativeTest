import { TouchableOpacity, TouchableOpacityProps, Text, Image } from 'react-native';
import { Pokemon } from '../../screens/Home';
import { styles } from './styles';

//interface para a costomização do componente
interface Props extends TouchableOpacityProps {
	data: Pokemon
}

/*
	Componente de card clicavel utilizado na exibição da lista
	Possui o numero identificador do pokemon, o nome dele e uma imagem do pokemon
*/
export function Pokecard({data, ...rest}: Props) {

	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<Text style={styles.title}>{data.id} - {data.name}</Text>
			<Image
			style={styles.image}
			source={{uri: data.sprites.front_default }}
			/>
		</TouchableOpacity>
	);
}