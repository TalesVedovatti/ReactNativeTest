import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
	title: {
		alignItems:'center',
		justifyContent:'center',
	},
	title_text: {
		color: THEME.COLORS.FONT_TITLE,
		fontSize: THEME.FONT_SIZE.LG,
		marginHorizontal: 40,
		marginBottom:20,
	}, 
	image: {
		backgroundColor:THEME.COLORS.BACKGROUND_IMAGE,
		borderColor: THEME.COLORS.BORDER_IMAGE,
		borderRadius: 300,
		borderWidth: 3,
		height: 300,
		marginHorizontal: '10%',
		marginVertical: 30,
		width: '80%',
	},
	subtitle_text: {
		borderRadius: 10,
		color: THEME.COLORS.FONT_CARD,
		fontSize: THEME.FONT_SIZE.MD,
	},
	text: {
		alignItems:'center',
		backgroundColor: THEME.COLORS.CARD,
		color: THEME.COLORS.FONT_CARD,
		fontSize: THEME.FONT_SIZE.SM,
		justifyContent: 'center',
	},
	button: {
		alignItems:'center',
		height:30,
		justifyContent: 'center',
		margin:10,
		width:30,

	},
	font_button: {
		color: 'red',
		fontSize: THEME.FONT_SIZE.LG,
	}
});