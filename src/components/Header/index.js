import {Link} from 'react-router-dom'

import {HeaderDiv, WebsiteLogo} from './styledComponents'

const Header = () => (
  <HeaderDiv>
    <Link to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </HeaderDiv>
)

export default Header
