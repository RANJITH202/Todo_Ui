import {Component, OnInit} from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-kanban',
  templateUrl: './todo-kanban.component.html',
  styleUrls: ['./todo-kanban.component.scss']
})
export class TodoKanbanComponent implements OnInit {

  searchText = ''
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inProgress = ['Get ', ' groceries', 'home', 'asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  count = 15;

  constructor() { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  trackItem(index: number, item: any): any {
    return item; // Replace 'id' with the unique identifier of your item
  }
  search(){
    console.log(this.searchText);
  }
}
