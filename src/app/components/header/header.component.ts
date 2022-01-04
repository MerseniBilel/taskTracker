import { Component, OnInit } from '@angular/core';
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title : string = "Task Tracker"
  showForm: boolean = false;
  subscription : Subscription;
  

  constructor(private uiService : UiService, private router :Router) {
    this.subscription = this.uiService.onToggle().subscribe(
      value => this.showForm = value
    );
  }

  ngOnInit(): void {

  }

  toggleEventTask(){
    this.uiService.toggleForm();
  }


  hasRoute(route : string) : boolean {
    return route === this.router.url;
  }

}




