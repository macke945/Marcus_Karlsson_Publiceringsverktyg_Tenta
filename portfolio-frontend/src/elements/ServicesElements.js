import styled from "styled-components"

export const ServiceCenter = styled.div `
width: 90vw;
margin: 0 auto;
max-width: 1170px;

@media screen (min-width: 676px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
}

@media screen (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 95vw;
}
`

export const Service = styled.article `
background: ${props => props.theme.colors.clrwhite};
padding: 3rem 1.5rem;
margin-bottom: 2rem;
border-radius: ${props => props.theme.animations.radius};
text-align: center;
-webkit-transition: ${props => props.theme.animations.transition};
transition: ${props => props.theme.animations.transition};
&:hover{
    background: ${props => props.theme.colors.clrprimary5};
    color: ${props => props.theme.colors.clrprimary9};
}
p{
    -webkit-transition: ${props => props.theme.animations.transition};
    transition: ${props => props.theme.animations.transition};
}

p &:hover{
    color: ${props => props.theme.colors.clrprimary9};
}
`