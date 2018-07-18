import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Http } from '@angular/http';

import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {

  constructor(private http:Http, private modalService:NgbModal) {
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent)

  }

  ngOnInit() {
    let url = "bsa_tam2/api/v1/scene_config/getBuildinScene/";
    console.log("aaaaa");
    this.http.get(url).subscribe(
        res=> {
        console.log("aaa")
      },
        res=> {
        console.log("bbbb")
      }
    );
  }

}
