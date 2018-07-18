import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    close() {
        this.activeModal.close();
    }

    constructor(private activeModal:NgbActiveModal) {
    }

    ngOnInit() {
    }

}
