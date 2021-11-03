import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-statuslead',
  templateUrl: './statuslead.component.html',
  styleUrls: ['./statuslead.component.css']
})
export class StatusleadComponent implements OnInit {

  potenciais: string[] = environment.potenciais;
  confirmados: string[] = [];
  agendados: string[] = [];

  novolead: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  addLead(){

    if(this.novolead === ''){
      return;
    }

    environment.potenciais.push(this.novolead);
    this.novolead = '';
    
  }

  
}
