import React from 'react'

const CounterButton = (props) => {

  return (
    <div>
        <button type='button' onClick={props.onClick}>     
            {props.text}
        </button>
    </div>
  )
}

export default CounterButton