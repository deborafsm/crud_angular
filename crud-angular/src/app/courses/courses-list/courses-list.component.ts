import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}
  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
