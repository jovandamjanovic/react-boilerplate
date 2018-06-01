import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({incClick, decClick, counterValue}) => {
    return (
        <div>
            <button onClick={incClick}>+</button>
            {counterValue}
            <button onClick={decClick}>-</button>
        </div>
    )
}

Counter.propTypes = {
    incClick: PropTypes.func.isRequired,
    decClick: PropTypes.func.isRequired,
    counterValue: PropTypes.number.isRequired
}

export default Counter