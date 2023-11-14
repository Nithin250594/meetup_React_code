import styled from 'styled-components'

export const RegisterRouteDiv = styled.div`
  height: 100vh;
`

export const RegisterRouteSection = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
`
export const RegisterLeftSection = styled.div`
  width: 45%;
  margin-right: 0px;
`
export const RegisterImage = styled.img`
  width: 80%;
`
export const RegisterRightSection = styled.form`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
  padding-right: 30px;
`
export const RegisterHeader = styled.h1`
  font-size: 48px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #334155;
`
export const LabelText = styled.label`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #7b8794;
`
export const InputName = styled.input`
  width: 70%;
  height: 40px;
  border: 1px #cbd5e1 solid;
  margin-top: 7px;
  margin-bottom: 25px;
  border-radius: 4px;
  padding-left: 8px;
  outline: none;
`
export const SelectTopic = styled.select`
  width: 70%;
  height: 40px;
  border: 1px #cbd5e1 solid;
  margin-top: 7px;
  border-radius: 4px;
  padding-left: 5px;
  outline: none;
`
export const RegisterNowButton = styled.button`
  background-color: #3b82f6;
  width: 130px;
  height: 40px;
  border-width: 0px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  margin-top: 40px;
`
export const ErrorMessage = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ff0b37;
`
