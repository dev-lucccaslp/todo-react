import React from 'react'
import { Container, Content, CreateTask, Header, ImageBoard, TaskCompleted } from './style'

import Board from '../../assets/Clipboard.svg';

export function Tasks() {
  return (
    <Container>
      <Header>
        <CreateTask>
          <p>Tarefas criadas</p><span>10</span>
        </CreateTask>
   
        <TaskCompleted>
          <p>Concluídas</p><span>11</span> 
        </TaskCompleted>
      </Header>

      <Content>
        <ImageBoard>
          <img src={Board} />
        </ImageBoard>
        <h1>Você ainda não tem tarefas cadastradas</h1>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </Content>
    </Container>
  )
}
