import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = ['taskName', 'description', 'completedDate', 'createdDate', 'status'];

  dataSource = [
    { taskName: 'Task 1', description: 'Description 1', completedDate: new Date(), createdDate: new Date(), status: 'Completed' },
    { taskName: 'Task 2', description: 'Description 2', completedDate: new Date(), createdDate: new Date(), status: 'Pending' },
    { taskName: 'Task 3', description: 'Description 3', completedDate: new Date(), createdDate: new Date(), status: 'In Progress' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
