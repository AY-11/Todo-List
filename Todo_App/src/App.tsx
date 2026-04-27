import {useState} from 'react';
import AddTodoPage from "./components/AddTodoPage";
import HomePage from "./components/HomePage";

type Todo = {
  title: string;
  description: string;
};

type EditState = {
  editingTodo: Todo | null;
  editingIndex: number | null;
};

function App() {
  
  
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [page, setPage] = useState('home');
  const [edit, setEdit] = useState<EditState>({
  editingTodo: null,
  editingIndex: null
  });

  function removeTodo(deleteIndex: number){
    setTodoList(prev => prev.filter((_, index) => (index !== deleteIndex)));
  }

 

 
  function handleAddToList(todoStructure: Todo){
    if(!todoStructure.title.trim() || !todoStructure.description.trim() ) return;
    

    if(edit.editingTodo){
      setTodoList(prev =>
      prev.map((item, index) =>
        index === edit.editingIndex ? todoStructure : item
      )
    );

    setEdit({ editingTodo: null, editingIndex: null });
    }
    else{
    setTodoList(prev => ([...prev, todoStructure]));
    }

    setPage('home');
  }

  function handleUpdateList(selectedTodo: Todo, updateIndex: number){
    setEdit({editingTodo:selectedTodo, editingIndex:updateIndex});

   
    setPage('Add Todo');
   
  }



  return (
    <>
      
      {page === 'home'?   
      <HomePage todoList = {todoList} setPage = {setPage} removeTodo = {removeTodo} handleUpdateList = {handleUpdateList}/>
      :
      <AddTodoPage setPage = {setPage} handleAddToList={handleAddToList} edit={edit}/>
      }
    </>
  )
}

export default App
