package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.rest.webservices.restfulwebservices.todo.jpa.TodoRepository;

@RestController
public class TodoJpaResource {
	TodoService todoService;
	TodoRepository todoRepository;
	public TodoJpaResource(TodoService todoService, TodoRepository todoRepository) {
		this.todoService= todoService;
		this.todoRepository=todoRepository;
	}
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> retrieveTodos(@PathVariable String username){
		//return todoService.findByUsername(username);
		return todoRepository.findByUsername(username);
	}
    
	@GetMapping("/users/{username}/todos/{id}")
	public Todo retrieveTodo(@PathVariable String username, @PathVariable int id){
		//return todoService.findById(id);
		return todoRepository.findById(id).get();
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> DeleteTodo(@PathVariable String username, @PathVariable int id){
		// todoService.deleteById(id);
		 todoRepository.deleteById(id);
		 return ResponseEntity.noContent().build();
		
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public Todo UpdateTodo(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo){
		 // todoService.updateTodo(todo);
		    todoRepository.save(todo);
		  return todo;
	}
	
	@PostMapping("/users/{username}/todos")
	public Todo AddTodo(@PathVariable String username, @RequestBody Todo todo){
		 return todoRepository.save(todo);
		 //Todo createdTodo= todoService.addTodo(username, todo.getDescription(), todo.getTargetDate(), todo.isDone());
		 // return createdTodo;
	}
}
