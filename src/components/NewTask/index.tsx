import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import {
  Button,
  Container,
  Form,
  Header,
  CreateTask,
  TaskCompleted,
  Content,
  ImageBoard,

} from './style';

import Board from '../../assets/Clipboard.svg';

import { PlusCircle } from 'phosphor-react';
import { TaskCreateds } from '../TasksCreateds';

interface Props {
  taskActive: {
    id: string;
    title: string;
    isComplete: boolean;
  }[]
  handleChecked:(id:string)=>void;
}

export function NewTask(props: Props) {

  const [task, setTask] = useState([
    'ir almoçar no zézinho'
  ]);

  const [newTask, setNewTask] = useState('')

  function handleTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');

    setTask([...task, newTask])
    setNewTask(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Preencha o campo!');

  }

  function handleTaskFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

  }

  return (
    <Container>

      <Form onSubmit={handleTaskFormSubmit}>
        <textarea
          name="newTask"
          placeholder='Adicione uma nova tarefa'
          onChange={handleTextChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <Button
          type='submit'
        >
          Criar <PlusCircle size={18} color="#f2f2f2" />
        </Button>
      </Form>

      <Header>
        <CreateTask>
          <p>Tarefas criadas</p><span>10</span>
        </CreateTask>

        <TaskCompleted>
          <p>Concluídas</p><span>11</span>
        </TaskCompleted>
      </Header>

      <Content>


        {props.taskActive.length === 0 ?
          <>
            <ImageBoard>
              <img src={Board} />
            </ImageBoard>
            <h1>Você ainda não tem tarefas cadastradas</h1>
            <p>Crie tarefas e organize seus itens a fazer</p>

          </> :

          <>
            {props.taskActive.map((item) => {

              return (
                <TaskCreateds
                  key={item.id}
                  taskActive={item} 
                  handleChecked={props.handleChecked}
                  />
              )
            })}
          </>

        }

      </Content>
    </Container>
  )
}
