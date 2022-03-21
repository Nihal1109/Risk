import { Component, OnInit } from '@angular/core';
import { AnalystService } from 'src/app/services/analyst.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-analyst',
  templateUrl: './view-analyst.component.html',
  styleUrls: ['./view-analyst.component.css']
})
export class ViewAnalystComponent implements OnInit {

  analyst =[{
userId:'',
firstName:'',
lastName:'',
username:'',
useremail:'',

  }
  ]

  constructor( public _analyst : AnalystService) { }

  ngOnInit(): void {
    this._analyst.analyst().subscribe(
      (data: any) => {
        this.analyst = data;
        console.log(this.analyst);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }


}
