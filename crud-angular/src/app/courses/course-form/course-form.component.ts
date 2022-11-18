import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

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
  ngOnInit(): void {}
}
