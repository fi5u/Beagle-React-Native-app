import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 22,
    },
    btnSecondary: {
        position: 'absolute',
        left: 0,
    },
    btnPrimary: {
        position: 'absolute',
        right: 0,
    },
    btnText: {
        color: '#000',
    },
    btnTextDisabled: {
        color: '#aaa',
    },
    title: {
        flex: 1,
        textAlign: 'center',
    },
})

export default Styles
