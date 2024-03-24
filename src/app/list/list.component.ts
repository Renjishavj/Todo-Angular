import { Component, Type } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgbAccordionModule, FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  title: string = '';
  description: string = '';
  disabled: boolean = true;
  savebtn:boolean=true;
  index:number=-1;
  todos: { title: string; description: string }[] = [];

  fetchData() {
    if (this.title != '' && this.description != '') {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }
  addTodo() {
    this.todos.push({ title: this.title, description: this.description });
    this.title = '';
    this.description = '';
    this.disabled = true;
  }
  editTodo(todo: any, index: number) {
    this.title =todo.title;
    this.description= todo.description;
    this.savebtn=false;
    this.index=index;

  }
  saveTodo(){
    this.todos[this.index].title=this.title;
    this.todos[this.index].description=this.description;
    this.title='';
    this.description='';
    this.savebtn=true;
    this.index=-1;
  }
  checkTodo(check:HTMLInputElement, head:HTMLHeadingElement){
      if(check.checked == true){
        head.style.textDecoration = 'line-through'
      }else{
        head.style.textDecoration = 'none'
      }
  }
  deleteTodo(todo: any, index: number){
    let r = confirm("Do you want to delete "+todo.title+" ?");
    if (r==true) {
      this.todos.splice(index, 1);
    }            
  }
}
 
