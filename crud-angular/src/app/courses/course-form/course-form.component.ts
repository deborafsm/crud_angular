import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course';
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form = this.FormBuilder.group({
    name: [''],
    category: [''],
  });
  constructor(
    private FormBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => this.onSuccess(),

      (error) => {
        this.onError();
      }
    );
  }
  onCancel() {
    this.location.back();
  }
  private onError() {
    this._snackBar.open('Erro ao salvar', '', { duration: 3000 });
  }
  private onSuccess() {
    this._snackBar.open('Sucesso ao salvar', '', { duration: 3000 });
    this.onCancel();
  }
  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course'];
    console.log(course);
  }
}
