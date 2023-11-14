import React from 'react'

const TopicContext = React.createContext({
  topic: '',
  onChangeTopic: () => {},
  isRegistered: false,
  registerNowClicked: () => {},
  registerClicked: false,
  name: '',
  onChangeName: () => {},
})

export default TopicContext
