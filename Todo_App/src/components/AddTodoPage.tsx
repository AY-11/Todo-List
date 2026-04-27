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
    }
    }, [edit]);

    function handleValue(identifier: 'title' | 'description', event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        console.log(event.target.value);
        setTodoStructure(prev => ({...prev, [identifier]:event.target.value}));
    }


    function handleAdd(){

        handleAddToList(todoStructure);
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

            <p>Todo App</p>

            <div>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' name='title' value={todoStructure.title} onChange={(event)=>{handleValue('title', event)}}/>
            </div>

            <div>
                <label htmlFor='description'>Todo Description</label>
                <textarea  id='description' name='description' rows={6} value={todoStructure.description} onChange={(event)=>{handleValue('description',event)}}/>
            </div>

            <button onClick={handleAdd}>{edit.editingTodo !== null? "Update" : "Add"}</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handlePage}>Go To Home</button>
            
        </>
    )
}

export default AddTodoPage;