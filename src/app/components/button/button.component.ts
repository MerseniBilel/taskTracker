import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color : string = 'black' ;
  @Input() text : string = 'Toggle';
  @Output() toggleForm = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  onClick(){
    this.toggleForm.emit();
    this.color === "green" ? this.color = "red" : this.color = "green"
  }

}
