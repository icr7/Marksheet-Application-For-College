import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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


  @Output() geed=new EventEmitter()

  obj: Student = new Student();
  constructor(private service: MarksheetService) { }

  ngOnInit(): void {
  }

  saveData(feeder: NgForm) {
    this.obj.id = this.toFeed.id;
    this.obj.name = this.toFeed.name;
    this.obj.english = feeder.value.english;
    this.obj.hindi = feeder.value.hindi;
    this.obj.maths = feeder.value.maths;
    this.obj.science = feeder.value.science;
    this.obj.sst = feeder.value.sst;

    console.log(JSON.stringify(this.obj));
    this.service.feedStudentMarks(this.obj).subscribe();
    this.service.sendClickEvent();

  }

}
