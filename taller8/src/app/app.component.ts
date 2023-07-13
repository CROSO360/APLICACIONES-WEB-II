import { Component } from '@angular/core';
import { TutorService } from './services/tutor.service';
import { ITutors } from './interfaces/ITutor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataTutors: ITutors = { sum: 0, tutors: [] };
  title: string = 'Tutores';

  constructor(
    private tutorsService: TutorService
  ) {

  }

  /*ngOnInit() {
    this.tutorsService.getAllData()
      .subscribe(data => {
        this.dataTutors = data;
      })
  }

  submitData(value: any) {
    let body = {
      name: value.name,
      identification: value.identification,
      expertise: value.expertise
    }
    this.tutorsService.postData(body)
    .subscribe(response => {
      console.log(response)
    })
  }*/

}
