import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
export const ProjectWrapper = styled.article `
margin-bottom: 4rem;

&:hover {
    transition:${props => props.theme.animations.transition};
    background: linear-gradient(to bottom right, ${props => props.theme.colors.clrprimary5}, #222);
    opacity: 0.8;
}
@media screen (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
}
`
export const ProjectImage = styled(props => <Image {...props} />) `
border-top-left-radius: ${props => props.theme.animations.radius};
border-top-right-radius: ${props => props.theme.animations.radius};
height: 19rem;
z-index: 1;

&:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, ${props => props.theme.colors.clrprimary5}, #222);
  opacity: 0.85;
  transition: ${props => props.theme.animations.transition};
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
    border-radius: ${props => props.theme.animations.radius};
    box-shadow: ${props => props.theme.animations.darkshadow};
}
`

export const ProjectInfo = styled.div `
background: ${props => props.theme.colors.clrwhite};
padding: 1rem 2rem;
border-bottom-left-radius: ${props => props.theme.animations.radius};
border-bottom-right-radius: ${props => props.theme.animations.radius};

h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
}

@media screen (min-width: 992px) {
    border-radius: ${props => props.theme.animations.radius};
    box-shadow: ${props => props.theme.animations.darkshadow};
}
`

export const ProjectNumber = styled.span `
display: inline-block;
font-size: 1.25rem;
color: ${props => props.theme.colors.clrprimary5};
margin-bottom: 0.75rem;
`

export const ProjectStack = styled.div `
margin-bottom: 1rem;

span {
    display: inline-block;
    background: ${props => props.theme.colors.clrgrey9};
    color: ${props => props.theme.colors.clrgrey5};
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: ${props => props.theme.animations.radius};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
}
`

export const ProjectsWrapper = styled.section `
background: ${props => props.theme.colors.clrgrey10};
padding: 5rem 0;
`
export const ProjectsButton = styled(props => <Link {...props} />)`
text-transform: uppercase;
background: ${props => props.theme.colors.clrprimary5};
color: ${props => props.theme.colors.clrprimary9};
padding: 0.375rem 0.75rem;
letter-spacing: ${props => props.theme.animations.spacing};
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

&:hover {
    color: ${props => props.theme.colors.clrprimary1};
    background: ${props => props.theme.colors.clrprimary8};
}
`