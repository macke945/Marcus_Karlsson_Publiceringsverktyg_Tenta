import styled from "styled-components"
import Image from "gatsby-image"
import React from "react"
import { Link } from "gatsby"

export const BlogWrapper = styled.article `
display: block;
margin-bottom: 2rem;
background: var(--clr-grey-10);
border-radius: var(--radius);
box-shadow: var(--light-shadow);
transition: var(--transition);
height: 100%;
display: grid;
grid-template-rows: auto 1fr;
&:hover {
    box-shadow: var(--dark-shadow);
    transform: scale(1.02);
}
`

export const BlogCard = styled.div `
padding: 1.5rem 1rem;
display: grid;
grid-template-rows: auto 1fr auto;
    h4{
        color: var(--clr-grey-1);
    }
`

export const BlogFooter = styled.div `
display: flex;
justify-content: space-between;
align-items: center;

    p{
        margin-bottom: 0;
        font-weight: bold;
        color: var(--clr-grey-5);
    }
    p:first-of-type{
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

export const BlogImage = styled(props => <Image {...props} />) `
border-top-left-radius: var(--radius);
border-top-right-radius: var(--radius);
height: 15rem;
`

export const BlogButton = styled(props => <Link {...props} />)`
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

&:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-8);
}
`