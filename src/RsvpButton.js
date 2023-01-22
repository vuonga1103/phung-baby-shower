import React from 'react'
import styled from 'styled-components'

const Button = styled.button({
  backgroundColor: 'unset',
  color: 'unset',
  border: 'unset',
  padding: 'unset',
  fontSize: 'unset',
  outline: 'unset',
  font: 'inherit',
  cursor: 'pointer',
  margin: 24,
})
const RsvpButton = ({ onClick }) => {
  return <Button onClick={onClick}>Click here to RSVP</Button>
}

export default RsvpButton
