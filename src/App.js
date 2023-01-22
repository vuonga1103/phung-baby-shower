import { useState, useRef } from 'react'
import styled from 'styled-components'

import hotAirBalloonBear from './images/hot-air-balloon-bear.png'
import Intro from './Intro'
import Button from './Button'
import RsvpForm from './RsvpForm'
import { CORAL, GREEN, MOBILE_MEDIA_QUERY } from './utils'
import Link from './Link'

const AppWrapper = styled.div({
  height: '100vh',
  position: 'relative',
})

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
  height: '100vh',
})

const BottomRightBear = styled.img({
  position: 'absolute',
  bottom: 0,
  right: 0,
  height: '60%',
  margin: 24,
  zIndex: -1,
  [MOBILE_MEDIA_QUERY]: {
    display: 'none',
  },
})

const TopBear = styled.img({
  display: 'none',
  [MOBILE_MEDIA_QUERY]: {
    display: 'block',
    margin: 24,
    width: 250,
  },
})

function App() {
  const [shouldOpenRsvpForm, setShouldOpenRsvpForm] = useState(false)
  const containerRef = useRef(null)

  const handleRsvpButtonClick = () => {
    setShouldOpenRsvpForm(!shouldOpenRsvpForm)
    setTimeout(() => {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }, 50)
  }

  return (
    <AppWrapper>
      <Wrapper ref={containerRef}>
        <TopBear src={hotAirBalloonBear} alt="Bear With Hot Air Balloon" />
        <Intro />
        <div>
          <Button onClick={handleRsvpButtonClick}>RSVP Here</Button>
          <Button>
            <Link href="http://amazon.com">Baby Registry</Link>
          </Button>
        </div>

        {shouldOpenRsvpForm ? <RsvpForm /> : null}

        <BottomRightBear
          src={hotAirBalloonBear}
          alt="Bear With Hot Air Balloon"
        />
      </Wrapper>
    </AppWrapper>
  )
}

export default App
