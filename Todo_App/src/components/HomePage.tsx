

type Todo = {
  title: string;
  description: string;
};


type Props = {
  todoList: { title: string; description: string }[];
  setPage: React.Dispatch<React.SetStateAction<string>>;
  removeTodo: (index: number) => void;
  handleUpdateList: (item: Todo, index: number) => void;
};
function HomePage({todoList, setPage, removeTodo, handleUpdateList}:Props){
    

    function handlePage(){
        setPage('Add Todo');
    }
    
    return(
        <>
        <p>Todo List</p>
        {todoList.length === 0 ? <p>No Content to Show</p> : 
            todoList.map((item, index) => (
            <div key={index}>
                <p>Title: {item.title}</p>
                <p>Description: {item.description}</p>
                <button onClick={()=>removeTodo(index)}>Delete</button>
                <button onClick={()=>handleUpdateList(item,index)}>Update</button>
            </div>
        ))}
        
        <button onClick={handlePage}>Add Todo</button>
        </>
    )
}

export default HomePage;