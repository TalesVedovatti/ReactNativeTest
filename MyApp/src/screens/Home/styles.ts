import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginHorizontal: 35,
        height: 50,
        width: '80%',
    },
    title:{
        color: THEME.COLORS.FONT_TITLE,
        fontSize: THEME.FONT_SIZE.LG,
    },
    list: {
        height: '90%',
        marginTop: 10,
        marginBottom: 20,
    },
});