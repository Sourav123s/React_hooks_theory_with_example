import React from 'react'
import "../App.css"
import { memo } from 'react'

const UseCallBackChild = ({onChange}) => {
    console.log('Child is render!')
  return (
    <input
        type="text"
        placeholder="Search items..."
        // value={value}
        onChange={(e)=>{onChange(e.target.value)}}
        className="search-bar"
  />
  )
}

export default memo(UseCallBackChild)