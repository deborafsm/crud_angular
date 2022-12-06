import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from '../services/courses.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Course } from '../model/course';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category', 'actions'];
  // coursesService: CoursesService;
  constructor(
    public dialog: MatDialog,
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
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
  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  onEdit(course: Course) {
    this.router.navigate(['edit', course._id], { relativeTo: this.route });
  }
  onDelete(course: Course) {
    this.coursesService.remove(course._id).subscribe(() => {
      this._snackBar.open('Curso remnovido com sucesso!', 'x', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    });
  }
}
