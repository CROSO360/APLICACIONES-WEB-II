import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { IStudents } from '../interfaces/IStudent';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {
  dataStudents: IStudents = { sum: 0, students: [] };
  title: string = 'Estudiantes';

  constructor(
    private studentsService: StudentService
  ) {

  }

  ngOnInit() {
    this.studentsService.getAllData()
      .subscribe(data => {
        this.dataStudents = data;
      })
  }

  submitData(value: any) {
    let body = {
      name: value.name,
      identification: value.identification,
      expertise: value.expertise
    }
    this.studentsService.postData(body)
      .subscribe(response => {
        console.log(response)
      })
  }

}
