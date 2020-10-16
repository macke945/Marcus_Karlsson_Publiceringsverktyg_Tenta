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
background: var(--clr-white);
padding: 3rem 1.5rem;
margin-bottom: 2rem;
border-radius: var(--radius);
text-align: center;
-webkit-transition: var(--transition);
transition: var(--transition);
&:hover{
    background: var(--clr-primary-5);
    color: var(--clr-primary-9);
}
p{
    -webkit-transition: var(--transition);
    transition: var(--transition);
}

p &:hover{
    color: var(--clr-primary-9);
}
`