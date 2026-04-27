

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
        <div className="bg-red-500 w-screen h-screen flex items-center">
        <div className="bg-yellow-500 w-[400px] mx-auto rounded-2xl p-3">
        
        <p className="text-6xl text-white bg-black font-bold p-1 rounded-t-lg">Todo List</p>
        <div className="bg-white rounded-b-lg p-2">
        {todoList.length === 0 ? <p>No Content to Show</p> : 
            todoList.map((item, index) => (
            <div key={index} className="p-2">
                <div className="bg-purple-200 rounded-md  p-2">
                    <p className="text-lg font-bold">Title</p>
                    <p className="text-md">{item.title}</p>
                    <p className="text-lg font-bold">Description</p>
                    <p className="text-md"> {item.description}</p>
                </div>
                <div className="space-x-2 mt-1">
                    <button className="bg-gray-500 text-white rounded-md hover:bg-black hover:cursor-pointer p-1 " onClick={()=>removeTodo(index)}>Delete</button>
                    <button className="bg-gray-500 text-white rounded-md hover:bg-black hover:cursor-pointer p-1" onClick={()=>handleUpdateList(item,index)}>Update</button>
                </div>
                
            </div>
        ))}
        </div>
        <div className=" mt-1">
            <button className="bg-gray-500 text-white rounded-md hover:bg-black hover:cursor-pointer p-1 " onClick={handlePage}>Add Todo</button>
        </div>
        </div>
        </div>
    )
}

export default HomePage;