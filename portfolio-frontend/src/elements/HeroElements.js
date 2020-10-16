import styled from "styled-components"
import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

export const HeroWrapper = styled.div `
height: 100%;
display: grid;
align-items: center;
width: 90vw;
margin: 0 auto;
max-width: 1170px;
`
export const Underline = styled.div`
width: 5rem;
height: 0.25rem;
margin-bottom: 1.25rem;
background: var(--clr-primary-5);
margin-left: 0%;
margin-right: auto;
`

export const HeroHeader = styled.header `
margin-top: -5rem;
padding-top: 5rem;
height: 100vh;
background: var(--clr-primary-10);
position: relative;
`

export const HeroInfo = styled.article `
background: var(--clr-primary-10);
h4 {
    color: var(--clr-grey-5);
}
`
export const HeroImage = styled(props => <Image {...props} />) `
    content: "";
    position: absolute;
    top: 0;
    left: 55%;
    right: 0;
    bottom: 0;
    display: block;
    grid-row: 1/-1;
    grid-column: 1/-1;
    width: 65%
`

export const HeroCenter = styled.div `
height: 100%;
display: grid;
align-items: center;
width: 90vw;
margin: 0 auto;
max-width: 1170px;
`

export const HeroButton = styled(props => <Link {...props} />) `
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
width: 15%;
text-align: center;

&:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-8);
}

@media screen (min-width: 992px) {
    font size: 0.5rem;
}
`




