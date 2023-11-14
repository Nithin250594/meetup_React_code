import {Link} from 'react-router-dom'

import Header from '../Header'

import TopicContext from '../../context/TopicContext'

import {
  HomeRouteDiv,
  HomeSection,
  WelcomeHeader,
  WelcomePara,
  RegisterButton,
  MeetupImage,
  RegisterName,
  RegisterTopic,
} from './styledComponents'

const HomeRoute = () => (
  <TopicContext.Consumer>
    {value => {
      const {name, topic, isRegistered} = value

      return (
        <HomeRouteDiv>
          <Header />
          {isRegistered === true && name !== undefined ? (
            <HomeSection>
              <RegisterName>Hello {name}</RegisterName>
              <RegisterTopic>Welcome to {topic}</RegisterTopic>
              <MeetupImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeSection>
          ) : (
            <HomeSection>
              <WelcomeHeader>Welcome to Meetup</WelcomeHeader>
              <WelcomePara>Please Register for the topic</WelcomePara>
              <Link to="/register">
                <RegisterButton>Register</RegisterButton>
              </Link>
              <MeetupImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeSection>
          )}
        </HomeRouteDiv>
      )
    }}
  </TopicContext.Consumer>
)

export default HomeRoute
