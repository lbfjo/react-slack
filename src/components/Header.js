import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import {
  HeaderContainer,
  HeaderRight,
  HeaderSearch,
  HeaderLeft,
  HeaderAvatar,
} from './Header-styled'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
function Header() {
  const [user] = useAuthState(auth)
  return (
    <HeaderContainer>
      {/* Header left */}
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          alt={user?.displayName}
          src={user?.photoURL}>
          {/*add on click*/}
        </HeaderAvatar>
        <AccessTimeIcon></AccessTimeIcon>
      </HeaderLeft>
      {/* Header search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder='Search'></input>
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>

      {/* Header right */}
    </HeaderContainer>
  )
}

export default Header
