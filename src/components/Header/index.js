import {NavContainer,Name,ListContainer,ItemContainer,Image} from './styled'

const Header=()=>{

    return(
        <NavContainer>
            <Name>RA</Name>
            <ListContainer>
                <ItemContainer>
                    <Image src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
            alt="Linked In"/>
                </ItemContainer>
                <ItemContainer>
                    <Image src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
            alt="Git Hub"/>
                </ItemContainer>
                <ItemContainer>
                    <Image src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
            alt="Twitter"/>
                </ItemContainer>
            </ListContainer>
        </NavContainer>
    )


}

export default Header