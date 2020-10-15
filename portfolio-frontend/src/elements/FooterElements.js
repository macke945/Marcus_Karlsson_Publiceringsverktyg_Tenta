import styled from "styled-components"

export const FooterWrapper = styled.footer `
height: 9rem;
background: #222;
text-align: center;
display: grid;
place-items: center;

    h4 {
        margin-top: 0.5rem;
    color: var(--clr-white);
    font-weight: normal;
    text-transform: uppercase;
    }
    
    span {
        color: var(--clr-primary-5);
    }
`
export const FooterLinks = styled.div `
margin: 0 auto 1rem auto;
`