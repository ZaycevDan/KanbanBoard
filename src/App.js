import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
    const [tasks, setTasks] = useState(
      [
        {
          title: "Backlog",
          text: []
        },
        {
          title: 'Ready',
          text: []
        },
        {
          title: "In Progress",
          text: []
        },
        {
          title: "Finished",
          text: [
            {
              id: 3,
              task: 'Сделал наконец-то kanban board',
              description: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.' 
            }
          ]
        }                
      ]
    );

  useEffect(() => {
    const state = localStorage.getItem('tasks') || []
    setTasks(JSON.parse(state))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className='block'>  
      <Header />
      <Main tasks={tasks} setTasks={setTasks} />
      <Footer tasks={tasks}/> 
    </div>
  )
}

export default App;

