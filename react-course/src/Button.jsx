import PropTypes from 'prop-types';
export function Button({text}) {
    return <button>
        <span className="btn btn-primary btn-sm">{text}</span>
    </button>
}

Button.propTypes = {
    text: PropTypes.string,
}