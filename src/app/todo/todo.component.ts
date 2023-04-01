import {Component, OnInit} from '@angular/core';
import {TodoService} from "../shared/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  todos:any[]=[];

  constructor(private todoService: TodoService) {
  }

  addTODO(titleInput: HTMLInputElement) {
    if (titleInput.value) {
      this.todoService.addTodo(titleInput.value);
      titleInput.value = "";
    }

  }

  ngOnInit(): void {
    this.todoService.firestoreCollection.valueChanges({idField:'id'})
      .subscribe(item =>{
        console.log(item)
      this.todos=item;
    })
  }

  onStatusChange(id:string,newStatus:boolean) {
this.todoService.updateTodoStatus(id,newStatus);
  }
}
