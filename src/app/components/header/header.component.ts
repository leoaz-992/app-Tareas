import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string= "App de tareas";
  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    console.log("click");
  }

}
