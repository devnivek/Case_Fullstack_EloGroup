import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';
  confirmaSenha = '';
  alertUsuario = '';
  alertSenha = '';
  alertConfirmaSenha = '';

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
  }

  verificaFormulario(){
    if(this.senha.length < 8 ){
      this.alertSenha = 'A senha precisa ter no mínimo 8 caracteres!';
    } else {
      this.alertSenha = '';
    }
    if(this.senha != this.confirmaSenha ){
      this.alertConfirmaSenha = 'As senhas precisam ser iguais!';
    } else {
      this.alertConfirmaSenha = '';
    }
    if(!this.usuario ){
      this.alertUsuario = 'O nome de usuário é obrigatório!';
    } else {
      this.alertUsuario = '';
    }
  }

  entrar(){

    if(!this.alertUsuario && !this.alertSenha && !this.alertConfirmaSenha ){
      environment.nome = this.usuario
      this.router.navigate(['/home'])
    } else {
      alert('Preencha todos os campos corretamente para entrar!');
    }

  }

}
