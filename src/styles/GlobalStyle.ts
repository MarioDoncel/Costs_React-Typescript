import { createGlobalStyle} from 'styled-components'

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
    background-color: #EFEFEF;

    font-size: 1.6rem;
    

    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
}

@media(min-width:600px){
    :root{
        font-size: 18px;
    }
}

`