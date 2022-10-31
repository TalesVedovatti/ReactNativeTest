import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		width:'90%',
		height: 70,
		backgroundColor: THEME.COLORS.CARD,
		borderRadius: 10,
		margin: 15,
		padding: 10,
	},
	title: {
		flex: 1,
		fontSize: THEME.FONT_SIZE.LG,
		color: 'black',
		alignItems: 'center',
	},
	image: {
    	height: 50,
    	width: 50,
	}
});