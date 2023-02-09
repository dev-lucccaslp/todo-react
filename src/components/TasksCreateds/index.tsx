import React, { useState } from 'react';
import { Trash } from 'phosphor-react';
import { Container, Content } from './style';


interface TaskTypes {
  id: string;
  title: string;
  isComplete: boolean;
}

interface Props {
  taskActive: TaskTypes
  handleChecked:(id:string)=>void;
}

export  function TaskCreateds({ taskActive,  handleChecked }: Props) {
  const [ checkValue, setCheckValue ] = useState(false);
    console.log(checkValue)

  function colletValue(event: React.ChangeEvent<HTMLInputElement>){
    event.target.value
    setCheckValue(!checkValue)
  }

  return (
    <Container >
      <Content>
        <input onChange={() => handleChecked(taskActive.id)}  type="checkbox"  checked={taskActive.isComplete}/>
       
       <div> <p>{taskActive.title}</p> </div>
        
        <button>
          <Trash size={24}  />
        </button>
      </Content>
    </Container>
  )
}
