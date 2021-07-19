import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MarksheetService } from '../marksheet.service';
import { Student } from '../student';

@Component({
  selector: 'app-marks-feeder',
  templateUrl: './marks-feeder.component.html',
  styleUrls: ['./marks-feeder.component.css']
})
export class MarksFeederComponent implements OnInit {
  @Input() toFeed;

  obj:Student=new Student();
  constructor(private service:MarksheetService) { }

  ngOnInit(): void {
  }

  saveData(feeder: NgForm){
    
    this.obj.id=feeder.value.id;
    this.obj.name=feeder.value.name;
    this.obj.english=feeder.value.english;
    this.obj.hindi=feeder.value.hindi;
    this.obj.maths=feeder.value.maths;
    this.obj.science=feeder.value.science;
    this.obj.sst=feeder.value.sst;

    console.log(JSON.stringify(this.obj));
    this.service.registerNewStudent(this.obj).subscribe();

  }

}
