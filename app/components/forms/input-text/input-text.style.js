import {StyleSheet} from 'react-native'

const baseStyle = {
    borderWidth: 1,
    height: 40,
}

const Styles = StyleSheet.create({
    base: baseStyle,
    baseInvalid: {
        ...baseStyle,
        ...{
            borderColor: 'red',
        }
    },
})

export default Styles
