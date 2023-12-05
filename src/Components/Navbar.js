import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <>
      <div className={`text-${props.mode === 'dark' ? 'light' : 'dark'} nav`}>
        <p>Text.<span>dev</span></p>
        <div className="form-check-reverse form-check form-switch" >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglefunc} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><i className="ri-moon-fill"></i></label>
          </div>
      </div>
    </>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: 'set title here'
}
