import "./src/css/main.css"
import Theme from "./src/themes/theme"
import React from "react"
import {createGlobalStyle, ThemeProvider} from "styled-components"

const GlobalStyles = createGlobalStyle`
font-family: ${props => props.theme.fonts.ffsecondary};
background: ${props => props.theme.colors.clrwhite};
color: var${props => props.theme.colors.clrgrey1};
line-height: 1.5;
font-size: 0.875rem;
margin-top: 5rem;
`
export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
)