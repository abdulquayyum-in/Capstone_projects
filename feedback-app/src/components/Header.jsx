import React from 'react'
import PropTypes from 'prop-types'

function Header() {
  return (
    <>
        <div className="container" style={{"backgroundColor":"blue",}}>
            <h2>FeedBack UI</h2>
        </div>
    </>
  )
}

Header.defaultProps = {
    text : "fEEDBACK ui",
    bgCOlor : "rgba(0,0,0,0.4)"
}

export default Header