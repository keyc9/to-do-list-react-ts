
import { useDispatch } from 'react-redux'
import { HeaderContainer, HeaderLink, HeaderStyled, HeaderToggleButton, HeaderToggleContainer } from './Header.styled'
import { toggleThemeAction } from '../../features/themeList'

export const Header = () => {

  // const getActiveClass = ({isActive}: {isActive:boolean}): string => {
  //     return isActive ? '#ffffff33' : '#fff'}

  const dispatch = useDispatch()


  return (
    <HeaderStyled>
      <HeaderContainer>
        <HeaderLink to="/">
          {({ isActive }) => <span style={{ color: isActive ? '#ffffff33' : '#fff' }}>ToDo</span>}
        </HeaderLink>
        <HeaderLink to="/list">
          {({ isActive }) => <span style={{ color: isActive ? '#ffffff33' : '#fff' }}>List</span>}
        </HeaderLink>
        <HeaderToggleContainer>
          <HeaderToggleButton onClick={() => dispatch(toggleThemeAction())}>toggle</HeaderToggleButton>
        </HeaderToggleContainer>
      </HeaderContainer>
    </HeaderStyled>)
}