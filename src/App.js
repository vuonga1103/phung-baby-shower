import styled from 'styled-components'

import hotAirBalloonBear from './images/hot-air-balloon-bear.png'

const AppWrapper = styled.div({
  height: '100vh',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
})

const BottomRightBear = styled.img({
  position: 'absolute',
  bottom: 0,
  right: 0,
  height: '60%',
  margin: 24,
  '@media (max-width: 768px)': {
    display: 'none',
  },
})

const TopBear = styled.img({
  display: 'none',
  '@media (max-width: 768px)': {
    display: 'block',
    margin: 24,
    width: 250,
    alignSelf: 'flex-start',
  },
})

function App() {
  return (
    <AppWrapper>
      <TopBear src={hotAirBalloonBear} alt="Bear With Hot Air Balloon" />

      <BottomRightBear
        src={hotAirBalloonBear}
        alt="Bear With Hot Air Balloon"
      />
    </AppWrapper>
  )
}

export default App
