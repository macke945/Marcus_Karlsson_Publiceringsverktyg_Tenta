import styled from "styled-components"

export const HeroHeader = styled.header `
margin-top: -5rem;
padding-top: 5rem;
height: 100vh;
background: var(--clr-primary-10);
position: relative;


@media screen and (min-width: 992px) {
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 65%;
        right: 0;
        bottom: 0;
        background: var(--clr-white);
    }
}

@media screen and (min-width: 1170px) {
    h4 {
      font-size: 1rem;
      line-height: 1;
    }

article {
    background: var(--clr-primary-10);

    @media screen (min-width: 992px) {
        grid-row: 1/1;
        grid-column: 1 / span 8;
    }


    @media screen (min-width: 1170px) {
        grid-column: 1 / span 8;
    }
}

div {
    height: 100%;
    display: grid;
    align-items: center;

    width: 90vw;
    margin: 0 auto;
    max-width: 700px;


    @media screen (min-width: 992px) {
        width: 95vw;
        grid-template-columns: repeat(12, 1fr);
    }

    @media screen (min-width: 576px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
        column-gap: 2rem;
    }
}
`

export const HeroCenter = styled.div `

`

export const HeroInfo = styled.article `

`
