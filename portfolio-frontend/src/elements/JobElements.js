import styled from "styled-components"

export const JobSection = styled.section `
padding: 30px;
margin: 30px;
`

export const JobCenter = styled.div `
width: 80vw;
margin: 0 auto;
max-width: 1170px;

@media screen (min-width: 992px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
}
`

export const JobButtonContainer = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
margin-bottom: 4rem;

@media screen (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
}
`
export const JobInfo = styled.article `
h3 {
    font-weight: 400;
}

h4 {
    text-transform: uppercase;
    color: ${props => props.theme.colors.clrgrey5};
    background: ${props => props.theme.colors.clrgrey9};
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: ${props => props.theme.animations.radius};
}
`
export const JobDate = styled.p `
letter-spacing: ${props => props.theme.animations.spacing};
`

export const JobDesc = styled.div `
display: grid;
grid-template-columns: auto 1fr;
column-gap: 2rem;
align-items: center;
margin-bottom: 1.25rem;

p {
    margin-bottom: 0;
    color: ${props => props.theme.colors.clrgrey3};
}
`