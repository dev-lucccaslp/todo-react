import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --purple-300: #8284fa;
        --purple-500: #5E60CE;

        --blue-300: #4ea8de;
        --blue-500: #1e6f9f;

        --gray-100: #f2f2f2;
        --gray-200: #d9d9d9;
        --gray-300: #808080;
        --gray-400: #333333;
        --gray-500: #262626;
        --gray-600: #1a1a1a;
        --gray-700: #0d0d0d;

        --red: #E25858;
    }

    *{   
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }
    
    html{
        @media (max-width: 1080px){
            font-size: 93.75%;//15px
        }
        @media (max-width: 720px){
            font-size: 87.5%;//14px
        }
    }
        
    body{
        background-color: var(--gray-600);
        -webkit-font-smoothing: antialiased;
    }

    body, border-style, input, textarea, button, span{
        font-family: 'Inter', sans-serif;
        color: var(--gray-100);
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong{
        color: var(--gray-100);
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`