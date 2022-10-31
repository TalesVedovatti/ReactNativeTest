import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		alignItems:'center',
		backgroundColor: THEME.COLORS.CARD,
		borderRadius: 10,
		justifyContent:'center',
		marginHorizontal: '10%',
		padding: 10,
		width:'80%',
	}
});