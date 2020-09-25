const currencyFormatter = {
    'format': (type, value) => {
        var vstr = value.toFixed(2).toString();
        switch (type) {
            case 'br':
                vstr = vstr.replace('.', ',')
                return `R$ ${vstr}`
            default:
                return `R$ ${vstr}`
        }

    }
}
export default currencyFormatter;

// module.exports = currencyFormatter;