import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;

    flex-direction:column ;
    padding-top: 4rem;
    
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-between;
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