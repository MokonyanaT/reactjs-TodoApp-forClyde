import React from "react"
import TodoItem from "./Todoitem"
import TodosData from "./TodosData"

function Body (){
        const TodoItems = TodosData.map(item => <TodoItem item={item}/>)

    return (<div className="todo-list"> 

                {TodoItems}
                
                
        </div>)
}

export default Body