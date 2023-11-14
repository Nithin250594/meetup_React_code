import {withRouter} from 'react-router-dom'

import TopicContext from '../../context/TopicContext'

import Header from '../Header'

import {
  RegisterRouteDiv,
  RegisterRouteSection,
  RegisterLeftSection,
  RegisterImage,
  RegisterRightSection,
  RegisterHeader,
  LabelText,
  InputName,
  SelectTopic,
  RegisterNowButton,
  ErrorMessage,
} from './styledComponents'

const RegisterRoute = props => (
  <TopicContext.Consumer>
    {value => {
      const {
        name,
        topic,
        onChangeName,
        onChangeTopic,
        registerNowClicked,
        registerClicked,
      } = value
      const {topicsList, history} = props

      const onChangeInput = event => {
        onChangeName(event)
      }

      const onChangeOption = event => {
        onChangeTopic(event)
      }

      const onSubmit = event => {
        event.preventDefault()
        registerNowClicked()
        if (name !== '') {
          history.replace('/')
        } else {
          history.replace('/register')
        }
      }

      return (
        <RegisterRouteDiv>
          <Header />
          <RegisterRouteSection>
            <RegisterLeftSection>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
            </RegisterLeftSection>
            <RegisterRightSection onSubmit={onSubmit}>
              <RegisterHeader>Let us Join</RegisterHeader>
              <LabelText htmlFor="name">NAME</LabelText>
              <InputName
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={onChangeInput}
              />
              <LabelText htmlFor="topic">TOPICS</LabelText>
              <SelectTopic value={topic} id="topic" onChange={onChangeOption}>
                {topicsList.map(eachTopic => (
                  <option key={eachTopic.id} value={eachTopic.id}>
                    {eachTopic.displayText}
                  </option>
                ))}
              </SelectTopic>
              <RegisterNowButton type="submit">Register Now</RegisterNowButton>
              {name === '' && registerClicked === true ? (
                <ErrorMessage>Please enter your name </ErrorMessage>
              ) : null}
            </RegisterRightSection>
          </RegisterRouteSection>
        </RegisterRouteDiv>
      )
    }}
  </TopicContext.Consumer>
)

export default withRouter(RegisterRoute)
