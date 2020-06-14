import { Component, OnInit } from '@angular/core';
import {SecugenService} from '../../services/secugen.service';

@Component({
  selector: 'app-secugen-single',
  templateUrl: './secugen-single.component.html',
  styleUrls: ['./secugen-single.component.scss']
})
export class SecugenSingleComponent implements OnInit {
   displayResponse: any;
  constructor(private service: SecugenService) { }

  ngOnInit(): void {
  }

  generatePrint() {
    const uriString = 'Timeout=1000&Quality=50&licstr=&templateFormat=ISO&imageWSQRate=0.95';
    this.service.postData(uriString).subscribe(v => {
      console.log('secuGen data', v);
    });
    console.log('clicked');
  }
}
