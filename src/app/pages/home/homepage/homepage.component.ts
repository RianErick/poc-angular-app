import { HomepageService } from './../../../core/services/homepage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  displayedColumns = ['id', 'autor', 'nome'];
  listBlocks: any;

   constructor(
   public homepageService : HomepageService
   )
   { this.getAll() }

   getAll(){
    this.homepageService.listAll().subscribe( data => {
    this.listBlocks = data;
    })
   }

  ngOnInit(){
  }

}
