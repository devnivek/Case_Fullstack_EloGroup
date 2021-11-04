import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statuslead',
  templateUrl: './statuslead.component.html',
  styleUrls: ['./statuslead.component.css']
})
export class StatusleadComponent implements OnInit {

  potenciais: string[] = environment.potenciais;
  confirmados: string[] = environment.confirmados;
  agendados: string[] = environment.agendados;

  constructor(private router: Router) { }

  ngOnInit(): void{
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

  novoLead(){
    environment.confirmados = []
    Array.prototype.push.apply(environment.confirmados, this.confirmados);
    environment.agendados = []
    Array.prototype.push.apply(environment.agendados, this.agendados);
    
    this.router.navigate(['/novoLead'])
  }

  
}
