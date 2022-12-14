import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  displayedColumns = ['name', 'category', 'actions'];
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  constructor() {}

  ngOnInit(): void {}
  onAdd() {
    this.add.emit(true);
    // this.router.navigate(['new'], { relativeTo: this.route });
  }
  onEdit(course: Course) {
    this.edit.emit(course);
  }
  onDelete(course: Course) {
    this.remove.emit(course);
  }
}
