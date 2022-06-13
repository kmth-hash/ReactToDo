import React from 'react'

function TodoButton({btnHeader='Submit' , btnFn='#' , btnVal='btn'}) {
  return (
    <button value={btnVal}  onClick={btnFn}>
        {btnHeader}
    </button>
  )
}

export default TodoButton;