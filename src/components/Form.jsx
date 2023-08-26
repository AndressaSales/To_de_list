import React from "react";
import { useState } from "react";

const From = ({addTodo}) => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handlesSubmit = (e) =>{
        e.preventDefault();
        if(!value || !category) return;
        // adicionar categoria 
        addTodo(value, category);
        // limpar os campos
        setCategory('');
        setValue('');
    };

    return(
        <div className="todo-form">
            <h2>Criar Tarefa:</h2>
            <form onSubmit={handlesSubmit}>
                <input 
                    type="text" 
                    value={value}
                    placeholder="Digite o título" 
                    onChange={(e) => setValue(e.target.value)}/>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default From;