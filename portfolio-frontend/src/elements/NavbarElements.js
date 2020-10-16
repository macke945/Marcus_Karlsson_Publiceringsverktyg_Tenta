import styled from "styled-components"

export const NavWrapper = styled.div `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 5rem;
display: flex;
align-items: center;
z-index: 200;
background: var(--clr-white);
`

export const NavButton = styled.button `
font-size: 2rem;
background: transparent;
border-color: transparent;
color: var(--clr-primary-5);
cursor: pointer;
transition: var(--transition);
display:none;
&:hover {
    color: var(--clr-primary-2);
  }

@media screen (min-width: 768px) {
    display: none;
}
`

export const NavCenter = styled.div `
width: 90vw;
max-width: 1170px;
margin: 20px;


@media screen (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
}
`

export const NavHeader = styled.div `
display: flex;
justify-content: space-between;
align-items: center;

img {
    margin-bottom: 0.375rem;
}
`