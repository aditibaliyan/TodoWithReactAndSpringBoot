import { PropTypes } from 'prop-types'
import './Counter.css'

export default function CounterButton({by, incrementMethod, DecrementMethod}){

    
    return (
        <div className="counter">
        <button className="counterButton" 
        onClick={() => incrementMethod(by)}>+{by}</button>

        <button className="counterButton" 
        onClick={() => DecrementMethod(by)}>-{by}</button>

        </div>
    )
}
CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}

