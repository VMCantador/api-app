import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // Criar a variavel URL da API
  private url = 'http://localhost:3000/usuarios';

  // Criar uma lista da classe de Usuários
  public listaUsuarios : Usuario[] = [];

  // Criar uma instancia do HttpClient
  constructor(private http:HttpClient) { }

  // MÉTODOS CRUD COM A API

  // Para o READ, teremos 2 métodos

  // 1º Busca todos os registros
  public getAll(){
    // Retorna a busca de dados na URL da API
    return this.http.get(this.url);
  }

  // 2º Busca 1 unico registro
  public getOne(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

}