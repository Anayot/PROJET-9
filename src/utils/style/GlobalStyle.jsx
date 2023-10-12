import { createGlobalStyle } from "styled-components"

export const MediaTablet = "@media (max-width: 1024px)"
export const MediaMobile = "@media (max-width: 768px)"

const GlobalStyled = createGlobalStyle`
    * {
        font-family: 'Lato', sans-serif;
    }

    body {
        margin: 0;
        background-color: #f2d6b3;
    }
`

function GlobalStyle () {
    return (
        <GlobalStyled />
    )
}

export default GlobalStyle

