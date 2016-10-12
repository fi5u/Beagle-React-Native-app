export default function(value, ...tests) {
    let isValid = true;
    for(test of tests) {
        if(Array.isArray(test)) {
            // format is [test, value-to-test-against]
            if(test[0] === 'min-length') {
                if(!_minLength(value, test[1])) {
                    isValid = false;
                }
            }
        }

        if(test === 'template') {
            isValid = /(?:\[\?\])|(?:\[\?:\d+\])/g.test(value) || false;
        }
    }
    return isValid;
}

function _minLength(value, minLength) {
    if(value.length >= minLength) {
        return true;
    }
}
