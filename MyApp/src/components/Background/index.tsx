import { ImageBackground } from 'react-native';
import backgroundImg from '../../assets/background-galaxy.png'
import { styles } from './styles';

/*
	Interface para que o componente de background possa ter componentes externos
	dentro de si quando chamado fora desse arquivo
*/
interface Props {
	children: React.ReactNode
}

// Componente de background das páginas do aplicativo 
export function Background({ children }: Props) {
	return (
		<ImageBackground 
		source={ backgroundImg }
		defaultSource={ backgroundImg }
		style={styles.container}
		>
		{children}
		</ImageBackground>
	);
}