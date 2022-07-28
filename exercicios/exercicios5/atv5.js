function contar() {
  let saida = document.getElementById('saida')

  saida.innerHTML += `<p>Contando de 10 até 30</p>`

  let cont = 10
  while (cont <= 30) {
      saida.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;`    
      cont ++
  }
  saida.innerHTML += ` &#x1F3C1;`
}