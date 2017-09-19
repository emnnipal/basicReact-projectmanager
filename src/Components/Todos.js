import React, { Component } from 'react';
import TodoItem from "./TodoItem"

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        return(
          // <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
          <TodoItem key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className="Todos">
        <h3>Todo List </h3>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: React.PropTypes.array
}


export default Todos;
