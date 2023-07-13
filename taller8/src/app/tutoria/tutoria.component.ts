import { Component } from '@angular/core';
import { TutorshipService } from '../services/tutorship.service'
import { ITutorships } from '../interfaces/ITutorship';


@Component({
  selector: 'app-tutoria',
  templateUrl: './tutoria.component.html',
  styleUrls: ['./tutoria.component.css']
})
export class TutoriaComponent {

  dataTutorships: ITutorships = { sum: 0, tutorships: [] };
  title: string = 'Tutores';

  constructor(
    private tutorshipsService: TutorshipService
  ) {

  }


  ngOnInit() {
    this.tutorshipsService.getAllData()
      .subscribe(data => {
        this.dataTutorships = data;
      })
  }

  submitData(value: any) {
    let body = {
      name: value.name,
      hours: value.hours,
      date: value.date,
      hour: value.hour,
      student: value.student,
      tutor: value.tutor
    }
    this.tutorshipsService.postData(body)
      .subscribe(response => {
        console.log(response)
      })
  }

}
