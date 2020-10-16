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
background: var(--clr-primary-5);
color: var(--clr-primary-9);
padding: 0.375rem 0.75rem;
letter-spacing: var(--spacing);
display: inline-block;
font-weight: 700;
-webkit-transition: var(--transition);
transition: var(--transition);
font-size: 0.875rem;
border: 2px solid transparent;
cursor: pointer;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
border-radius: var(--radius);
display: block;
width: 12rem;
text-align: center;
margin: 0 auto;
margin-top: 3rem;

&:hover{
    color: var(--clr-primary-1);
    background: var(--clr-primary-8);
}
`