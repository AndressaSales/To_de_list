import { useState } from "react";
// importação do css
import './App.css';
// importação das pág que fiz
import Todo from "./components/Todo";
import From from "./components/Form";
import Search from "./components/Search";
import Filter from "./components/Filter";


function App(){

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'Criar funcionalidade x no sistema',
            category: 'Trabalho',
            isCompleted: false,
        },
        {
            id: 2,
            text: 'Ir para a academia',
            category: 'Pessoal',
            isCompleted: false,
        },
        {
            id: 3,
            text: 'Estudar React',
            category: 'Estudos',
            isCompleted: false,

        }
    ]);

    const addTodo = (text, category) => {
        const newTodos = [
            ...todos,{
                id: Math.floor(Math.random() * 10000),
                text,
                category,
                isCompleted: false,
            },
        ];
        setTodos(newTodos);
    };

    const removeTodo = (id) =>{
        const newTodos = [...todos];
        const filteredTodos = newTodos.filter((todo) => 
            todo.id !== id ? todo : null);

            setTodos(filteredTodos);
    };

    const completeTodo = (id) => {
        const newTodos = [...todos];
        newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo 
        );
        setTodos(newTodos);
    };

    const [seach, setSearch] = useState('');

    const [filter, setFilter] = useState('All');
    const [sort, setSort] = useState('Asc');

    return(
        <div className="app">
            <h1>Lista de Tarefas</h1>
            <Search seach={seach} setSearch={setSearch} />
            <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
            <div className="todo-list">
                {todos
                    .filter((todo) => filter === 'All' ? true : filter === 'Completed' ? todo.isCompleted : !todo.isCompleted)
                    .filter((todo) => todo.text.toLowerCase().includes(seach.toLowerCase())
                    )
                    .sort((a, b) => sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
                    .map((todo) =>(
                    <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
                ))}
            </div>
            <From addTodo={addTodo} />
        </div>
    )
}

export default App;