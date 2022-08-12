import PropTypes from 'prop-types';
export function Button({text, name}) {
    return <button onClick={ function () { console.log(text)}}>
        <span className="btn btn-primary btn-sm">{text} - {name} </span>
    </button>
}

Button.propTypes = {
    text: PropTypes.string,
}

Button.defaultProps = {
    name: 'User'
}