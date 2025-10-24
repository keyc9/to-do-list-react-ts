
import { HeaderContainer, HeaderLink, HeaderStyled} from './Header.styled'

export const Header = () => {

    // const getActiveClass = ({isActive}: {isActive:boolean}): string => {
    //     return isActive ? '#ffffff33' : '#fff'}

    
    return (
        <HeaderStyled>
            <HeaderContainer>
      <HeaderLink to="/">
        {({ isActive }) => <span style={{ color: isActive ? '#ffffff33' : '#fff' }}>ToDo</span>}
      </HeaderLink>
      <HeaderLink to="/list">
        {({ isActive }) => <span style={{ color: isActive ? '#ffffff33' : '#fff' }}>List</span>}
      </HeaderLink>
            </HeaderContainer>
        </HeaderStyled>)
}