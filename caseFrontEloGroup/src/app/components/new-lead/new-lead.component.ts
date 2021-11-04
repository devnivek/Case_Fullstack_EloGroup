import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-new-lead',
  templateUrl: './new-lead.component.html',
  styleUrls: ['./new-lead.component.css']
})
export class NewLeadComponent implements OnInit {

  masterSelected:boolean;
  checklist:any;
  checkedList:any;
  nome = '';
  telefone = '';
  email = '';
  alertNome = '';
  alertPhone = '';
  alertEmail = '';
  alertCheck = '';

  constructor(private router: Router){
    this.masterSelected = false;
    this.checklist = [
      {id:1,value:'RPM',isSelected:false},
      {id:2,value:'Produto Digital',isSelected:false},
      {id:3,value:'Analytics',isSelected:false},
      {id:4,value:'BPM',isSelected:false},
    ];
    this.getCheckedItemList();
}

verificaFormulario(){
  if(!this.nome){
    this.alertNome = 'Favor informar um nome!';
  } else {
    this.alertNome = '';
  }
  if(!this.telefone){
    this.alertPhone = 'Informe um telefone!';
  } else {
    this.alertPhone = '';
  }
  if(!this.email ){
    this.alertEmail = 'Informe um E-mail!';
  } else {
    this.alertEmail = '';
  }
}

// The master checkbox will check/ uncheck all items
checkUncheckAll() {
  for (var i = 0; i < this.checklist.length; i++) {
    this.checklist[i].isSelected = this.masterSelected;
  }
  this.getCheckedItemList();
  this.verificaCheck();
}

// Check All Checkbox Checked
isAllSelected() {
  this.masterSelected = this.checklist.every(function(item:any) {
      return item.isSelected == true;
    })
  this.getCheckedItemList();
  this.verificaCheck();
}

verificaCheck(){
  if(this.checkedList == '[]'){
    this.alertCheck = 'Selecione ao menos uma oportunidade!'
  } else {
    this.alertCheck = '';
  }
}

// Get List of Checked Items
getCheckedItemList(){
  this.checkedList = [];
  for (var i = 0; i < this.checklist.length; i++) {
    if(this.checklist[i].isSelected)
    this.checkedList.push(this.checklist[i].value);
  }
  this.checkedList = JSON.stringify(this.checkedList);
}

  ngOnInit(): void {
  }

  salvar(){
    this.verificaCheck();
    this.verificaFormulario();
    
    if(!this.alertNome && !this.alertPhone && !this.alertEmail && !this.alertCheck){
      environment.potenciais.push(this.nome)
      this.router.navigate(['/home'])
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  }

}
