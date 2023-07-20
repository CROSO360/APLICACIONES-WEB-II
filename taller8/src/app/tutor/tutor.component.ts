import { Component } from '@angular/core';
import { TutorService } from '../services/tutor.service';
import { ITutors, ITutor } from '../interfaces/ITutor';
import { useAnimation } from '@angular/animations';
import { raceWith } from 'rxjs';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent {
  dataTutors: ITutors = { sum: 0, tutors: [] };
  title: string = 'Tutores';

  ediRegistro: ITutor = {
    _id: "",
    name: "",
    identification: "",
    expertise: ""
  }

  constructor(
    private tutorsService: TutorService
  ) {

  }

  ngOnInit() {
    this.GET()
  }

  GET(){
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
  }

  modifyData(value: any) {
    /*let body = {
      name: value.name,
      status: value.status,
      identification: value.identification,
      expertise: value.expertise
    }*/
    this.ediRegistro={
      ...value
    }
    this.tutorsService.updateData(value, value._id)
    .subscribe(response=>{
      console.log(response)
    })
    this.GET()
  }

  /*PUT(tutor:ITutor){
    console.log(tutor)
      this.modifyData(tutor).subscribe(response => {
        console.log('tutor modificado con exito:', response);

        this.GET();
      });
  }*/

  DELETE(id:string){
    this.tutorsService.deleteData(id)
    .subscribe(data=>{
      console.log(`Usuario eliminado ${id}`,data)
      this.GET();
    })
  }

}
