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
import { PlusCircle } from 'phosphor-react';
import { TaskProps } from '../TasksCreateds';
import { v4 as uuidv4 } from "uuid";

export function NewTask({ setTaskList }: any) {
  const [newTask, setNewTask] = useState<TaskProps>()

  function handleTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const title = event.target.value

    setNewTask({ id: uuidv4(), title, isComplete: false })

  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Preencha o campo!');
  }

  function handleTaskFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTaskList((task: TaskProps[]) => [...task, newTask])
    event.target.reset();

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

    </Container>
  )
}
