import React from 'react'
import styled from 'styled-components'
import { mix, transparentize } from 'polished'

import { BLUE, CORAL, GREEN, MOBILE_MEDIA_QUERY } from './utils'
import Link from './Link'

const Wrapper = styled.div({
  margin: '12px 24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textTransform: 'uppercase',
  textAlign: 'center',
})

const Title = styled.h1({
  fontSize: '6rem',
  fontWeight: 700,
  color: BLUE,
  marginTop: 100,
  fontFamily: 'Pacifico, cursive',
  textTransform: 'none',
  letterSpacing: 2,
  textShadow: `2px 4px 2px ${transparentize(0.4, CORAL)}`,
  [MOBILE_MEDIA_QUERY]: {
    marginTop: 0,
    fontSize: '4rem',
  },
})

const Text = styled.section({
  fontSize: '1rem',
  fontWeight: 600,
  color: GREEN,
})

const JoinUsText = styled(Text)({
  color: CORAL,
  letterSpacing: 2,
  fontSize: '1.5rem',
  textTransform: 'none',
})

const Divider = styled.div({
  width: '40%',
  height: 1.5,
  backgroundColor: GREEN,
  margin: '8px 0 0',
})

const Date = styled.h2({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: GREEN,
})

const Address = styled(Text)({
  marginTop: 12,
  textDecoration: 'underline',
  textDecorationStyle: 'dotted',
  '&:hover': {
    color: mix(0.15, 'black', GREEN),
  },
})

const Intro = () => {
  return (
    <Wrapper>
      <Title>It's a boy!</Title>
      <JoinUsText>Join us in celebrating our newest adventure!</JoinUsText>

      <Date>APRIL 15, 2023</Date>
      <Text style={{ marginTop: -20 }}>Saturday | 12 pm - 4pm</Text>
      <Divider />
      <Address>
        <Link href="https://goo.gl/maps/JkS9pnrbaGn2G2ce7">
          Gino's <br />
          7414 Fifth Avenue
          <br />
          Brooklyn, NY 11209
        </Link>
      </Address>
    </Wrapper>
  )
}

export default Intro
