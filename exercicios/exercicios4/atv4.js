function contar() {
  let saida = document.getElementById('saida')

  saida.innerHTML += `<p>Contando de 100 até 120 (Mostrando apenas os pares)</p>`

  let cont = 100
  while (cont <= 120) {
      if (cont % 2 == 0) {
          saida.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;`    
      }
      cont ++
  }
  saida.innerHTML += ` &#x1F3C1;`
}