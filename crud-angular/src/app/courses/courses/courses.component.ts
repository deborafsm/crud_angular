import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from '../services/courses.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Course } from '../model/course';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];
  // coursesService: CoursesService;
  constructor(
    public dialog: MatDialog,
    private coursesService: CsoursesService
  ) {
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        console.log(error);
        this.onError('Erro ao Carregar cursos.' + error.status);
        return of([]);
      })
    );
    // this.courses = [];
    // this.coursesService = new CoursesService();
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
  ngOnInit(): void {}
}
