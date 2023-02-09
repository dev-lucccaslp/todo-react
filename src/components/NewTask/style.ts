import styled from "styled-components";

export const Container = styled.div`
    display: flex ;
    align-items: center;
    justify-content:center ;
    flex-direction: column;
    margin-top: -2rem;
`;

export const Form = styled.form`
    display:flex ;
    align-items: center;

    textarea{
        resize: none;
        background-color: var(--gray-500);
        
        border: 1px solid #0D0D0D;
        border-radius: 8px;

        height: 3.375rem;
        width: 39.875rem;
        
        color: var(--gray-100);
        
        font-size:1rem ;
        line-height: 50px; 
        padding-left: 1rem;
    }
`;

export const Button = styled.button`
    margin-left: 8px;
    gap: 0.375rem;
    height: 3.375rem;
    width: 5.625rem;

    background-color: var(--blue-500);
    border: none;
    border-radius: 8px;
    
    color: var(--gray-100);

    font-size:1rem ;
    font-weight: 700;

    align-items: center;
    display: flex;
    justify-content:center;
    
    
    :hover{
        background-color:var(--blue-300); 
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-between;
    padding-top: 4rem;
    padding-bottom: 3rem;
    width: 46rem;



    span{
        background: var(--gray-400);
        padding: 0.1rem 0.4rem;
        border-radius: 40%;
        font-size: 0.75rem;
    }
`;

export const CreateTask = styled.div`
    display:flex;
    gap: 5px;
    p{
        color: var(--purple-500);
    }

`;

export const TaskCompleted = styled.div`
    display:flex;
    gap: 5px;
    p{
        color: var(--purple-300);
    }

`;

export const Content = styled.div`
    border-top: 1px solid #333333;
    border-radius: 8px;
    padding-top: 4rem;
    width: 46rem;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    color: var(--gray-300);

    h1{
        font-size: 1rem;
        color: var(--gray-300);
    }

    p{
        font-size: 1rem;
    }
`;

export const ImageBoard = styled.div`
    padding-bottom: 1rem;
`;