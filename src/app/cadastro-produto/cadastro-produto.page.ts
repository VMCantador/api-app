import { ProdutoService } from './../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  produto: Produto = {

    nome:'',
    descricao:'',
    validade:'',
    preco: 0
  };

  constructor(private prodService: ProdutoService, private router:Router) { }

  ngOnInit() {
  }

  salvarProduto(){
    this.prodService.salvar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      alert("Produto: " + this.produto.id + " oi salvo!")
    });
    this.prodService.salvar(this.produto);
  }

  voltar() {
    this.router.navigate(['/tabs/tab2']);
  }

}
