var formValue = this.getField("raca").value;

switch (formValue) {
case "Humano":
    this.getField("proficiencias").value = "Amados pelos Deuses: Um humano pode re-rolar uma de suas jogadas, uma vez por dia, gastando um ponto de sorte.";
break;

case"Anao":
    this.getField("proficiencias").value = " Infravisão: 18 metros. \n Habilidades Subtrerrâneas: Podem detectar determinados tipos de construções. Abaixo da superfície, possuem bônus para detectar armadilhas, passagens inclinadas, paredes movediças e outras construções igual ao seu nível. Podem farejar gemas e ouro a partir de 12 metros.";
break;

case"Halfling":
    this.getField("proficiencias").value = " Infravisão: 9 metros.\n Pequeninos: Vantagens em esgueirar-se em lugares apertados.\n Café da manhã antes das 11: Se comer o dobro de rações antes das 11:00 horas, recupera 1d4 de sorte.";
break;

case"Tiefling":
    this.getField("proficiencias").value = " Infravisão: 18 metros.\n Resistência ao fogo: Possuem bônus de resistência ao fogo igual ao dobro de seu nível. \n Ligação Infernal: Escolha uma magia arcana ou clerical de nível 1.";
break;

case"Elfo":
    this.getField("proficiencias").value = " Infravisão: 18 metros. \n Imunidades: Sono e Paralisia mágicos. \n Vulnerabilidades: Ferro \n Sentidos Aguçados: +4 de bônus para detectar passagens secretas. Ao passar 3 metros perto de uma porta secreta, possui direito de fazer testes para encontrá-la.";
break;

case"Selecione":
    this.getField("proficiencias").value = "Habilidades de Raça:";
break;

}