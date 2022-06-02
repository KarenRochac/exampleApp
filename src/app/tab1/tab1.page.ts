import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(public serviceService: ServiceService) {}

  ngOnInit() {
      this.serviceService.buscarTodosExample().subscribe((dados) => {
        console.log(dados);
      });
  }
}
