import React,{ useState } from 'react';
import './Todo.css'
import Form from './Form/Form';
import List from './List/List';

function Todo() {

  const [data,setData] = useState([])

  const addTask = (task) => {
        setData( (prevData) => {
             return [...prevData,task]
        } )
  }
  const deleteTask = (id) => {
    let copy = data.slice()
    copy.splice(id,1);
    setData([...copy])
}
 
  return <div>
     <div className='myContainer'>
          <Form addTask={addTask}/>
          <List data={data} deleteTask={deleteTask}/>
         </div>
         </div>;
}


export default Todo;
