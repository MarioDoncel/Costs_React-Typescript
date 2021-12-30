import { createGlobalStyle} from 'styled-components'
import { colors } from './theme/colors'
// CSS RESET

export const GloblaStyle = createGlobalStyle`
:root{
    font-size: 62.5%;
}

*:not(svg, circle, line, polyline) {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto', sans-serif;
}
html,body,#root{
    background-color: ${colors.BACKGROUND};

    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

@media(min-width:600px){
    :root{
        font-size: 18px;
    }
}

`