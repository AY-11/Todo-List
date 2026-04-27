import {useState, useEffect} from 'react';

type EditState = {
  editingTodo: Todo | null;
  editingIndex: number | null;
};

type Todo = {
  title: string;
  description: string;
};

type Props = {
    edit: EditState;
    handleAddToList: (todoStructure: Todo) => void;
    setPage: React.Dispatch<React.SetStateAction<string>>;
};

function AddTodoPage({edit ,handleAddToList, setPage}:Props){

    const [todoStructure, setTodoStructure] = useState<Todo>({
        title:'',
        description:''
    });

    

    useEffect(() => {
    if (edit.editingTodo) {
        setTodoStructure({
        title: edit.editingTodo.title,
        description: edit.editingTodo.description
        });
    }else {
    setTodoStructure({ title: "", description: "" });
    }
    }, [edit.editingTodo]);

    function handleValue(identifier: 'title' | 'description', event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        console.log(event.target.value);
        setTodoStructure(prev => ({...prev, [identifier]:event.target.value}));
    }



    async function handleAdd(){

        await handleAddToList(todoStructure);
        setTodoStructure({title:'', description:''});
        

    }

    function handleReset(){
        setTodoStructure({title:'', description:''});
    }

    function handlePage(){
        setPage('home');
        
    }

   

    return(
        <>  
            <div className="bg-red-500 w-screen h-screen flex items-center">
            <div className="bg-yellow-500 w-[400px] mx-auto rounded-2xl p-3">
            <p className="text-6xl text-white bg-black font-bold p-1 rounded-t-lg">Add Todo</p>
            <div  className="bg-white rounded-b-lg p-2">
            <div>
                <div>
                    <label htmlFor='title' className="text-lg font-bold">Title</label>
                </div>
                <input className="border-1 rounded-md p-1 w-full" type='text' id='title' name='title' value={todoStructure.title} onChange={(event)=>{handleValue('title', event)}} placeholder="Enter Title"/>
            </div>

            <div>
                <div>
                    <label htmlFor='description' className="text-lg font-bold">Todo Description</label>
                </div>
                <textarea className='border-2 rounded-md p-1 w-full' id='description' name='description' rows={6} value={todoStructure.description} onChange={(event)=>{handleValue('description',event)}} placeholder="Enter Description"/>
            </div>
            <div className="space-x-2 mt-1">
            <button className="bg-gray-500 text-white rounded-md hover:bg-black hover:cursor-pointer p-1 " onClick={handleAdd}>{edit.editingTodo !== null? "Update" : "Add"}</button>
            {edit.editingTodo !== null? '' : <button className="bg-gray-500 text-white rounded-md hover:bg-black hover:cursor-pointer p-1 " onClick={handleReset}>Reset</button>}
            
            </div>
            </div>
            <div className=" mt-1">
                {edit.editingTodo !== null ? '' : <button className="bg-gray-500 text-white rounded-md hover:bg-black hover:cursor-pointer p-1 " onClick={handlePage}>Go To Home</button>}
            </div>
            
            </div>
            </div>
        </>
    )
}

export default AddTodoPage;