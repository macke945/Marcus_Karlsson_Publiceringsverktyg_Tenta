import styled from "styled-components"

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