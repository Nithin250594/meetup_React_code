import styled from 'styled-components'

export const HomeRouteDiv = styled.div`
  height: 100vh;
`
export const HomeSection = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;
`
export const WelcomeHeader = styled.h1`
  font-size: 42px;
  font-weight: 600;
  font-family: 'Roboto';
  color: #334155;
`

export const WelcomePara = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #475569;
  margin-top: 0px;
`
export const RegisterButton = styled.button`
  background-color: #3b82f6;
  width: 90px;
  height: 40px;
  border-width: 0px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
`

export const MeetupImage = styled.img`
  width: 55%;
  margin-top: 25px;
`
export const RegisterName = styled(WelcomePara)`
  font-size: 42px;
  color: #2563eb;
  font-weight: 600;
`
export const RegisterTopic = styled(WelcomePara)`
  font-size: 21px;
  font-weight: 600;
`
