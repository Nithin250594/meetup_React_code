import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import HomeRoute from './components/HomeRoute'
import RegisterRoute from './components/RegisterRoute'
import NotFoundRoute from './components/NotFoundRoute'

import TopicContext from './context/TopicContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: topicsList[0].id,
    isRegistered: false,
    registerClicked: false,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeTopic = event => {
    this.setState({topic: event.target.value})
  }

  registerNowClicked = () => {
    const {name} = this.state

    this.setState({registerClicked: true})
    if (name !== '') {
      this.setState({isRegistered: true})
    }
  }

  render() {
    const {name, topic, isRegistered, registerClicked} = this.state

    console.log(name)
    console.log(topic)

    return (
      <TopicContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          registerClicked,
          onChangeName: this.onChangeName,
          onChangeTopic: this.onChangeTopic,
          registerNowClicked: this.registerNowClicked,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route
            exact
            path="/register"
            render={() => <RegisterRoute topicsList={topicsList} />}
          />
          <Route component={NotFoundRoute} />
        </Switch>
      </TopicContext.Provider>
    )
  }
}

export default App
