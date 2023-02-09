import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";
import { GlobalStyle } from "./styles/global";
import { useEffect, useState } from 'react';


interface DadsProps{
  id: string;
  title: string;
  isComplete: boolean;
}

function App() {
  const [test, setTest] = useState(false);
  const [taskList, setTaskList] = useState<DadsProps[]>([
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
    setTest(!test)
    const dads = taskList.find((item) => {
      return item.id === id
    })
    console.log(dads)
    if(dads?.isComplete === true) {
      setTaskList([...taskList.filter((item) => item.id !== id), { ...dads, isComplete: false }])
    } else {
      if(dads)
      setTaskList([...taskList.filter((item) => item.id !== id), { ...dads, isComplete: true }])
    }
  };

  useEffect(()=>{
    console.log(taskList)
  },[test])

  return (
    <>
      <Header />
      <NewTask
        taskActive={taskList}
        handleChecked={handleChecked}
      />
      <GlobalStyle />
    </>
  )
}

export default App
