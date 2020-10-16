import styled from "styled-components"

export const FooterWrapper = styled.footer `
height: 9rem;
background: #222;
text-align: center;
display: grid;
place-items: center;

    h4 {
        margin-top: 0.5rem;
    color: ${props => props.theme.colors.clrwhite}
    font-weight: normal;
    text-transform: uppercase;
    }
    
    span {
        color: ${props => props.theme.colors.clrprimary5};
    }
`
export const FooterLinks = styled.div `
margin: 0 auto 1rem auto;
`