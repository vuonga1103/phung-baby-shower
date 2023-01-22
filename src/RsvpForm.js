import React from 'react'
import useWindowSize from './hooks/useWindowSize'
import { MOBILE_MAX_SCREEN_WIDTH } from './utils'

const RsvpForm = () => {
  const { width } = useWindowSize()
  return (
    <div>
      <iframe
        title="RSVP Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdHXAmN1_qPmv8XZCVTybHrxH1sJ8ukgkAwQ7LGbs8gnUduyA/viewform?embedded=true"
        width={width > MOBILE_MAX_SCREEN_WIDTH ? 500 : 350}
        height="400"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      />
    </div>
  )
}

export default RsvpForm
