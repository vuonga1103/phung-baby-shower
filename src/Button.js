import { mix } from 'polished'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { GREEN } from './utils'

const StyledButton = styled.button({
  fontSize: 'unset',
  outline: 'unset',
  font: 'inherit',
  cursor: 'pointer',
  margin: 24,
  padding: 12,
  borderRadius: 4,
  border: 'none',
  textTransform: 'uppercase',
  height: 48,
  color: 'white',
  fontWeight: 700,
  backgroundColor: GREEN,
  '&:hover': {
    backgroundColor: mix(0.2, 'white', GREEN),
  },
})
const Button = ({ onClick, buttonStyle, children }) => {
  return (
    <StyledButton onClick={onClick} style={buttonStyle}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  buttonStyle: PropTypes.object,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  buttonStyle: {},
  onClick: () => {},
}

export default Button
