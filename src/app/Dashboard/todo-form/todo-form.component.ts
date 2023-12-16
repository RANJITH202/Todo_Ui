import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  public fb: FormBuilder;
  public taskForm: FormGroup;
  statusList = [{name: 'To Do'}, {name: 'In Progress'}, {name: 'Hold', disabled: true}, {name: 'Done'}];
  tags: string[] = ['Daily', 'Personal', 'Work', 'Shopping', 'Others'];
  taskStatus: string = '';

  constructor(injector: Injector) { 
    this.fb = injector.get(FormBuilder);
    this.taskForm = this.fb.group({
      taskName: new FormControl('', Validators.required),
      taskDescription: new FormControl('', Validators.required),
      taskTag: new FormControl('', []),
      reconciled: new FormControl('')
    });
  }
  ngOnInit(): void {
  }
}
