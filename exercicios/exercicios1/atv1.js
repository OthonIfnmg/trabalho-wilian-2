function calcMedia() {

  var diasTrabalhados = parseInt(prompt("Quantos salarios deseja informar?:"));
  var diasPassados = 0;
  var mediaSalarial = 0;

  while (diasTrabalhados > diasPassados) {
      diasPassados++;
      var dinheiroGanho = parseInt(prompt("Digite a quantia recebida no " + diasPassados + "° salario:"));
      var mediaSalarial = dinheiroGanho + mediaSalarial;
  }

  var mediaTotal = mediaSalarial / diasTrabalhados;

  alert("A sua média salarial é R$" + mediaTotal);
}