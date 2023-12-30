import PropTypes from 'prop-types';
NumberVND.propTypes = {
    number: PropTypes.number,
    currency: PropTypes.string,
}
NumberVND.defaultProps = {
    number: 0,
    currency: "₫"
}

function NumberVND({ number, currency }) {
    return number.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1.') + currency;
}

export default NumberVND;