import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 public resultado: String ="Resultado"
  precoAlcool: any;
  precoGasolina: any;

 calcular(){
  //validar campos
  if(this.precoAlcool && this.precoGasolina){
     var pAlcool = parseFloat(this.precoAlcool)
     var pGasolina = parseFloat(this.precoGasolina)
     /* Faz calculo (precoAlccol / precoGasolina
     se: resultado >= 0.7 melhor gasolina
     senão: melhor alcool*/
     var res = pAlcool / pGasolina
     if(res>= 0.7){
      this.resultado = "Melhor utilizar Gasolina"

     }else{
      this.resultado = "Melhor utilizar Alcool"
     }
  }else{
    this.resultado = " Preencha corretamente os campos"
  }
 }

}
