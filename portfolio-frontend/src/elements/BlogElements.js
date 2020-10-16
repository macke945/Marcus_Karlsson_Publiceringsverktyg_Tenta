import styled from "styled-components"
import Image from "gatsby-image"
import React from "react"
import { Link } from "gatsby"

export const BlogWrapper = styled.article `
display: block;
margin-bottom: 2rem;
background: ${props => props.theme.colors.clrgrey10}
border-radius: ${props => props.theme.animations.darkshadow};
box-shadow: ${props => props.theme.animations.lightshadow};
transition: ${props => props.theme.animations.transition};
height: 100%;
display: grid;
grid-template-rows: auto 1fr;
&:hover {
    box-shadow: ${props => props.theme.animations.darkshadow}
    transform: scale(1.02);
}
`

export const BlogCard = styled.div `
padding: 1.5rem 1rem;
display: grid;
grid-template-rows: auto 1fr auto;
    h4{
        color: ${props => props.theme.colors.clrgrey1};
    }
`

export const BlogFooter = styled.div `
display: flex;
justify-content: space-between;
align-items: center;

    p{
        margin-bottom: 0;
        font-weight: bold;
        color: ${props => props.theme.colors.clrgrey5};
    }
    p:first-of-type{
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

export const BlogImage = styled(props => <Image {...props} />) `
border-top-left-radius: ${props => props.theme.animations.radius};
border-top-right-radius: ${props => props.theme.animations.radius};
height: 15rem;
`

export const BlogButton = styled(props => <Link {...props} />)`
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

&:hover {
    color: ${props => props.theme.colors.clrprimary1};
    background: ${props => props.theme.colors.clrprimary8};
}
`