import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 22,
        backgroundColor: 'orange',
    },
    btnSecondary: {
        position: 'absolute',
        left: 0,
        backgroundColor: 'pink',
    },
    btnPrimary: {
        position: 'absolute',
        right: 0,
        backgroundColor: 'green',
    },
    title: {
        flex: 1,
        textAlign: 'center',
    },
})

export default Styles
