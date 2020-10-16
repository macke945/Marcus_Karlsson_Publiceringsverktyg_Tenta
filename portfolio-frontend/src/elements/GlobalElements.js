import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"

export const Section = styled.section `
padding: 5rem 0;
`

export const SectionCenter = styled.div `
width: 90vw;
margin: 0 auto;
max-width: 1170px;

@media screen (min-width: 992px) {
    width: 95vw;
}

@media screen (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
}
`

export const ButtonWrapper = styled(props => <Link {...props} />) `
text-transform: uppercase;
background: ${props => props.theme.colors.clrprimary5};
color: ${props => props.theme.colors.clrprimary9};
padding: 0.375rem 0.75rem;
letter-spacing: ${props => props.theme.animations.spacing};
display: inline-block;
font-weight: 700;
-webkit-transition: ${props => props.theme.animations.transition};
transition: ${props => props.theme.animations.transition};
font-size: 0.875rem;
border: 2px solid transparent;
cursor: pointer;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
border-radius: ${props => props.theme.animations.radius};
display: block;
width: 12rem;
text-align: center;
margin: 0 auto;
margin-top: 3rem;

&:hover{
    color: ${props => props.theme.colors.clrprimary1};
    background: ${props => props.theme.colors.clrprimary8};
}
`