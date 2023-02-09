import styled from "styled-components";

export const Container = styled.div`
    padding-top: 1.5rem;
    width: 80%;
    margin: 0 auto;
`;

export const Content = styled.div`
    background-color:var(--gray-500) ;
    border-radius: 8px;
   
    display: flex;
    align-items:center ;
    justify-content: space-space-between;
    
    gap: 2rem;
    height: 4.5rem;
    width: 100%;

    input[type="checkbox"] {
        width: 2px;
        margin-bottom: 5px;
        margin-left: 1.5rem;
    }

    input[type="checkbox"]:before {
      content: "";
        position: absolute;
        width: 1rem;
        height: 1rem;
        border-radius: 50px;
        border: 1px solid var(--purple-300);
        background-color:var(--gray-500);
    }
    
    input[type="checkbox"]:hover:before {
        background-color:var(--gray-300);
    }

    input[type="checkbox"]:checked:before {
        content: "✓";
        text-align: center;
        background-color: var(--purple-500);
    }
    div{
       width:80%;
       display: flex;
       align-items:center;
       justify-content:center ;
    }

    button {
        background-color: transparent;
        border: none;
        text-align:center ;
        color: var(--gray-300);

        height: 1.5rem;
        width: 1.5rem;
    } 
    button:hover{
        color: var(--red);
    }
`