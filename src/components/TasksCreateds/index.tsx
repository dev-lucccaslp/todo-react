import React, { useEffect, useState } from 'react';
import { Trash } from 'phosphor-react';
import { Container, Content } from './style';
import { v4 as uuidv4 } from "uuid";
import { NewTask } from '../NewTask';

export interface TaskProps{
  id: string;
  title: string;
  isComplete: boolean;
}

export  function TaskCreateds() {

  const [test, setTest] = useState(false);
  const [taskList, setTaskList] = useState<TaskProps[]>([
    {
      id: uuidv4(),
      title: 'ir no mercado',
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: 'estudar 72hrs',
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: 'estudar 72hrs',
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: 'estudar 72hrs',
      isComplete: false,
    },
  
  ]);

  function handleChecked(id: string) {
    const changeTask = taskList.map((item) => item.id === id ? {...item, isComplete: !item.isComplete} : item)
    
    setTaskList(changeTask)
  };

  return (
    <Container >      
      <NewTask setTaskList={setTaskList}  />

       {
        taskList.map((item) => (
          <Content key={item.id}>
            <input type="checkbox" checked={item.isComplete} onChange={() => handleChecked(item.id)} />
            <label>{item.title}</label>
            <button>
              <Trash size={24}  />
            </button>
          </Content>
        ))
       }

    </Container>
  )
}
