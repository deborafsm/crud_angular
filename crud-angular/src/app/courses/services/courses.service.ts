import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {

  }
  list(): Course[] {
    return [
      { _id: '1', name: 'React', category: 'Front-End' },
      { _id: '3', name: 'Java', category: 'Back-End' },
    ];
  }
}
