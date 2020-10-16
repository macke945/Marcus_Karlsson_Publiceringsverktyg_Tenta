import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
export const ProjectWrapper = styled.article `
margin-bottom: 4rem;

&:hover {
    transition: var(--transition);
    background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
    opacity: 0.8;
}
@media screen (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
}
`
export const ProjectImage = styled(props => <Image {...props} />) `
border-top-left-radius: var(--radius);
border-top-right-radius: var(--radius);
height: 19rem;
z-index: 1;

&:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
  opacity: 0.85;
  transition: var(--transition);
}

@media screen and (min-width: 576px) {
    height: 19rem;
}

@media screen and (min-width: 768px) {
    height: 22rem;
}

@media screen and (min-width: 992px) {
    grid-column: 1 / span 8;
    /* grid-column-end: 8; */
    grid-row: 1 / 1;
    height: 30rem;
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
}
`

export const ProjectInfo = styled.div `
background: var(--clr-white);
padding: 1rem 2rem;
border-bottom-left-radius: var(--radius);
border-bottom-right-radius: var(--radius);

h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
}

@media screen (min-width: 992px) {
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
}
`

export const ProjectNumber = styled.span `
display: inline-block;
font-size: 1.25rem;
color: var(--clr-primary-5);
margin-bottom: 0.75rem;
`

export const ProjectStack = styled.div `
margin-bottom: 1rem;

span {
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
}
`

export const ProjectsWrapper = styled.section `
background: var(--clr-grey-10);
padding: 5rem 0;
`
export const ProjectsButton = styled(props => <Link {...props} />)`
text-transform: uppercase;
background: var(--clr-primary-5);
color: var(--clr-primary-9);
padding: 0.375rem 0.75rem;
letter-spacing: var(--spacing);
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

&:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-8);
}
`