var formValue = this.getField("Classe").value;
var nivel = this.getField("level").value;
var alinhamento = this.getField("alinhamento").value;

var agilidade = this.getField("magilidade").valueAsString;
var inteligencia = this.getField("minteligencia").valueAsString;
var personalidade = this.getField("mpersonalidade").valueAsString;
var sorte = this.getField("msorte").valueAsString;  

function automatic (dadoacao1, dadoacao2, dadoacao3, dadodecritico, tabela, ataquebonus, reflexo, fortitude, vontade) {
    this.getField("dado de acao 1").value = dadoacao1;
    this.getField("dado de acao 2").value = dadoacao2;
    this.getField("dado de acao 3").value = dadoacao3;
    this.getField("dado critico").value = dadodecritico;
    this.getField("tabela").value = tabela;
    this.getField("ataq base").value = ataquebonus;
    this.getField("agilidadebase").value = reflexo; 
    this.getField("fortitudebase").value = fortitude;
    this.getField("reflexobase").value = vontade;
    this.getField("ataq base a").value = this.getField("ataq base").valueAsString;
}

this.getField("m i ou p").value = inteligencia + "/" + personalidade;  

function habilidadesladrao(alinhamento, dadosorte, ataquecostas, andarsilencio, escondersombras, furtarbolsos, escalarsuperficies, abrirfechaduras, encontrararmadilhas, desarmararmadilhas, forjardocumentos, disfarce, decifrarlingugagem, manipularveneno, usarpergaminhos) {
    var agilidade = this.getField("magilidade").valueAsString;
    var inteligencia = this.getField("minteligencia").valueAsString;
    var personalidade = this.getField("mpersonalidade").valueAsString;

    this.getField("esp classe 1").value = " -Alinhamento: Um alinhamento determina o caminho que o ladrão irá seguir. \n\n -Gíria dos ladrões: Ladrões falam uma língua secreta conhecida apenas pelos membros de sua classe.\n\n -Sorte: Ao queimar sorte, não ganham +1, mas um dado adicional para cada ponto gasto. \n   >Dado de Sorte: " + dadosorte + "\n\n -Habilidades Ladinas: " + alinhamento + " \n   >Ataque Pelas Costas:           (+"+ ataquecostas + ")                            >Desarmar armadilhas*:       (+" + desarmararmadilhas + ") + (" + agilidade + ")" +"\n   >Andar em Silêncio*:             (+" + andarsilencio + ") + (" + agilidade + ")                  >Forjar documentos*:          (+" + forjardocumentos + ") + (" + agilidade + ") \n   >Esconder-se nas Sombras*: (+" + escondersombras + ") + (" + agilidade + ")                  >Disfarçar-se***:                  (+" + disfarce +") + (" + personalidade + ")\n   >Furtar Bolsos*:                    (+" + furtarbolsos + ") + (" + agilidade + ")                  >Decfifrar linguagens**:      (+"+ decifrarlingugagem +") + (" + inteligencia + ")\n   >Escalar Superfícies*:            (+" + escalarsuperficies +") + (" + agilidade +")                  >Manipular veneno:             (+" + manipularveneno + ")\n   >Abrir Fechaduras*:               (+" + abrirfechaduras + ") + (" + agilidade + ")                  >Usar pergaminhos**:          (d"+ usarpergaminhos +") + (" + inteligencia + ") \n   >Encontrar Armadilhas**:    (+" + encontrararmadilhas +") + (" + inteligencia +") \n\n *Modificador de Agilidade | **Modificador de Inteligência | ***Modificador de Personalidade" ;
}

function habilidadesbarbaro(dadoferocidade, subterfugio, escalarsuperficiesbarbaro, forrageamento, emboscar, rastreamento, caca){
    var agilidade = this.getField("magilidade").valueAsString;
    var inteligencia = this.getField("minteligencia").valueAsString;
    var sorte = this.getField("msorte").valueAsString;
    this.getField("esp classe 1").value = " -Sorte: Quando não estiver usando armadura pode adicionar seu Mod de Sorte à sua CA. (" + sorte + ")\n\n -Tabus: O Bárbaro normalmente evita magia. Para manter o controle e não reagir violentamente, o Bárbaro precisará fazer um teste de Vontade (adicionando seu nível de classe a este teste).  \n\n -Ferocidade Selvagem: Sempre que o Bárbaro obtiver um golpe crítico durante o combate, ele ganhará efeitos adicionais. O Bárbaro só pode usar a Ferocidade Selvagem uma vez por rodada. \n  >Dado de Ferocidade Selvagem: " + dadoferocidade + "\n\n -Acerto Crítico: O intervalo de Acerto Crítico é maior que as demais classes. \n  Do 1º até 4º nível: 19-20     |     Do 5º até 10º nível: 18-20 \n\n -Habilidades de Sobreviência \n  >Subterfúgio*:                         (+" + subterfugio + ") +" + " (" + agilidade + ")\n  >Escalar Superfícies*:             (+" + escalarsuperficiesbarbaro + ") +" + " (" + agilidade + ")\n  >Forragear**:                          (+" + forrageamento + ") +" + " (" + inteligencia + ")\n  >Emboscar:                               (+" + emboscar + ")      \n  >Rastreamento(Selvagem)**: (+" + rastreamento + ") +" + " (" + inteligencia + ")\n  >Caça**:                                    (+" + caca + ") +" + " (" + inteligencia + ")" +     "\n           *Modificador de Agilidade     |     **Modificador de Inteligência";
}

function habilidadesdruida (invocarpatrono, forragear, escondersilencio, cacar, conhecimentosnatureza, andarsilencio, rastreamentogeral, rastreamentoselvagem) {
    var agilidade = this.getField("magilidade").valueAsString;
    var inteligencia = this.getField("minteligencia").valueAsString;
    this.getField("esp classe 1").value = " -Empatia Animal: Ao tentar ler, acalmar ou se comunicar com animais, role d24 + Mod. de Pers.\n\n -Restrição Druídica: Preferem equipamentos naturais, pois se usarem de metal, perdem magias por 24 horas. Sabem fazer armas naturais com facilidade, mas em falhas críticas, estas se quebram.\n\n -Caminhada na Floresta: É um só com a natureza e é capaz de se mover através de obstáculos naturais, sem deixar rastros ao caminhar.\n\n -Magias Druídicas: Chamado dos Animais, Forma Animal, Companheiro Animal e Invocar Yddgrrl ("+invocarpatrono+"/Dia). Sofre Desaprovações Divinas ao falhar e utiliza 1d20 + Mod. de Pers. + Nível.\n\n  -Habilidades\n  |>Forragear**:                               (+"+forragear+") + ("+inteligencia+")        >Andar Silenciosamente*:        (+"+andarsilencio+") + ("+agilidade+")         \n  |>Ensconder-se nas Sombras*:      (+"+escondersilencio+") + ("+agilidade+")        >Rastreamento(geral)**:        (+"+rastreamentogeral+") + ("+inteligencia+")\n  |>Caçar**:                                       (+"+cacar+") + ("+inteligencia+")        >Rastreamento(selvagem)**: (+"+rastreamentoselvagem+") + ("+inteligencia+")\n  |>Conhecimentos da Natureza**: (+"+conhecimentosnatureza+") + ("+inteligencia+")\n           *Modificador de Agilidade  |  **Modificador de Inteligência";
}

switch(formValue) {
    case "Alchemist":
        this.getField("proficiencias armas").value = " -Armas c/c: adaga, machadinha, maça, espada curta, azagaia, foice, bastão e armas de pederneira.\n -Armas à distância: zarabatana e besta.\n -Pode usar qualquer armadura que escolher.";
        this.getField("dado de vida").value = "D6";
        switch(nivel){
            case 1: 
                automatic("D20", '', '', '1d6', 'Tabela I', '+0', '+1', "+0", "+1")
                danobomba = '1d4'
                dclaquimista = '1d12'
                tabelaalquimista = 'Tabela III'
            break;
            case 2: 
                automatic("D20", '', '', '1d6', 'Tabela I', '+1', '+1', "+0", "+1")
                danobomba = '1d6'
                dclaquimista = '1d14'
                tabelaalquimista = 'Tabela III'
            break;
            case 3:
                automatic("D20", '', '', '1d8', 'Tabela I', '+1', '+1', "+1", "+2")
                danobomba = '1d8'
                dclaquimista = '1d16'
                tabelaalquimista = 'Tabela IV'
            break;
            case 4:
                automatic("D20", '', '', '1d8', 'Tabela I', '+2', '+2', "+1", "+2")
                danobomba = '1d10'
                dclaquimista = '1d20'
                tabelaalquimista = 'Tabela IV'
            break;
            case 5:
                automatic("D20", 'D14', '', '1d10', 'Tabela I', '+2', '+2', "+1", "+3")
                danobomba = '1d12'
                dclaquimista = '1d24'
                tabelaalquimista = 'Tabela V'
            break;
            case 6:
                automatic("D20", 'D16', '', '1d10', 'Tabela I', '+3', '+2', "+2", "+4")
                danobomba = '2d8'
                dclaquimista = '1d30'
                tabelaalquimista = 'Tabela V'
            break;
            case 7:
                automatic("D20", 'D20', '', '1d12', 'Tabela I', '+3', '+3', "+2", "+4")
                danobomba = '2d8'
                dclaquimista = '1d30'
                tabelaalquimista = 'Tabela V'
            break;
            case 8:
                automatic("D20", 'D20', '', '1d12', 'Tabela I', '+4', '+3', "+2", "+5")
                danobomba = '2d10'
                dclaquimista = '2d20'
                tabelaalquimista = 'Tabela V'
            break;
            case 9:
                automatic("D20", 'D20', '', '1d14', 'Tabela I', '+4', '+3', "+3", "+5")
                danobomba = '2d10'
                dclaquimista = '2d20'
                tabelaalquimista = 'Tabela V'
            break;
            case 10:
                automatic("D20", 'D20', 'D14', '1d14', 'Tabela I', '+5', '+4', "+3", "+6")
                danoboma = '2d14'
                dclaquimista = '2d20'
                tabelaalquimista = 'Tabela V'
            break;
        }
        this.getField("esp classe 1").value = " -Bombas: Pode criar um número de bombas por dia igual ao seu nível + 1. A fabricação leva 1d4 rodadas. Elas atingem um raio de 3m. Há uma chance de 2/6 de cada bomba explodir se sofrer dano de fogo ou sofrer queda(+6m). A bomba perde efeito após 24 horas. Dano da Bomba: " + danobomba + "\n\n -Sorte: O modificador de sorte influencia testes de Preparar Poção e lançar bombas. Bônus: (" + sorte + ")\n\n -Mutagênico: Leva 1 hora para criar uma poção que o transforma em um monstro. A ação leva 1 rodada. A CA aumenta em +4 e atributos físicos são rolados um passo acima e atributos mentais são rolados um passo abaixo. O DC e a tabela mudam. Seus punhos dão 1d8+1 de dano e ataca como se tivesse Agilidade de 16. A transformação dura 10 min e as roupas são destruídas. DC: " + dclaquimista + " | " + tabelaalquimista + "\n\n -Preparar Poção: Ganha a magia Preparar Poção. Em vez de levar 1d6+1 horas, prapara poções em 1d3+1 horas. Pode criar uma mistura que replica a substância especial necessária para a poção porém aumenta a CD em 10 (5 se dobrar o custo da poção). Não sofre corrupção. Pode usar Queimarcana. \n\n  -Trabalhos Alquímicos: É capaz de criar misturas menores. Role 1d20 + ("+inteligencia+") + (+"+nivel+") contra a DC do item. Leva 1 hora para ser feito e custa 1/4¼ do preço de venda em ingredientes."
    break;
    case "Anao (arquetipo)":
        this.getField("proficiencias armas").value = " -Armas c/c: Machado de guerra, Clava, Adaga, Machado, Espada longa, Maça, Espada curta, Lança, Espada de duas mãos e Martelo de guerra.\n -Armas à distância: Besta, Azagaia, Arco curto e Funda. \n -Anões usam quaisquer armaduras.";
        this.getField("dado de vida").value = "D10";

        switch(nivel){
            case 1: 
                automatic("D20", '', '', '1d10', 'Tabela III', '+d3', '+1', "+1", "1")
            break;
            case 2: 
                automatic("D20", '', '', '1d12', 'Tabela III', '+d4', '+1', "+1", "1")
            break;
            case 3:
                automatic("D20", '', '', '1d14', 'Tabela III', '+d5', '+1', "+2", "+1")
            break;
            case 4:
                automatic("D20", '', '', '1d16', 'Tabela IV', '+d6', '+2', "+2", "+2")
            break;
            case 5:
                automatic("D20", 'D14', '', '1d20', 'Tabela IV', '+d7', '+2', "+3", "+2")
            break;
            case 6:
                automatic("D20", 'D16', '', '1d24', 'Tabela V', '+d8', '+2', "+4", "+2")
            break;
            case 7:
                automatic("D20", 'D20', '', '1d30', 'Tabela V', 'd10+1', '+3', "+4", "+3")
            break;
            case 8:
                automatic("D20", 'D20', '', '1d30', 'Tabela V', 'd10+2', '+3', "+5", "+3")
            break;
            case 9:
                automatic("D20", 'D20', '', '2d20', 'Tabela V', 'd10+3', '+3', "+5", "+3")
            break;
            case 10:
                automatic("D20", 'D20', 'D14', '2d20', 'Tabela V', 'd10+4', '+4', "+6", "+4")
            break;
        }

        this.getField("esp classe 1").value = " -Modificador de Ataque: Recebem um dado de feito como modificador ao invés de um valor fixo \n\n -Feitos Extraordinários de Combate: Podem Realizar Feitos Extraordinários em batalha com seu Dado de Feito. \n   >Dado de Feito: " + this.getField("ataq base").valueAsString + "\n\n Sorte: O modificador de Sorte é aplicado às jogadas de Ataque com um tipo de arma específica. \n   >Bônus de Sorte: " + sorte + "\n\n -Espada e Escudo: Ao lutar com espada e escudo, pode realizar uma pancada de escudo como segundo ataque usando 1d14 (dano base de 1d3). \n\n -Runas: Anões podem usar runas para receberem melhorias em diversos aspectos. Utilizam o dado de Feito Extraordinário para as ativar."; 

    break;
    case "Barbaro":
        this.getField("proficiencias armas").value = " -Armas c/c: Machado de Batalha, Clava, , Adaga, Mangual, Machadinha,  Espada Longa, Maça, Cimitarra, Espada Curta, Lança, Espada de Duas Mãos e Martelo de Guerra.\n -Armas à distância: Besta, Azagaia, Arco Longo, Arco Curto e Lança.\n -Bárbaros preferem armaduras de couro e pele, mas usam de cota de malha quando confrontados com oponentes mais difíceis.";
        this.getField("dado de vida").value = "D14";
        switch(nivel){
            case 1: 
                automatic("D20", '', '', '1d12', 'Tabela III', '+1', '+1', "+1", "+1")
                habilidadesbarbaro("d3", "1", '3', '1', '1', '3', '3')
            break;
            case 2: 
                automatic("D20", '', '', '1d14', 'Tabela III', '+2', '+1', "+1", "+1")
                habilidadesbarbaro("d4", '3', '5','3','3','5','5')
            break;
            case 3:
                automatic("D20", '', '', '1d16', 'Tabela III', '+3', '+1', "+2", "+1")
                habilidadesbarbaro("d5", '5','7','5','5','7','7')
            break;
            case 4:
                automatic("D20", '', '', '1d20', 'Tabela IV', '+4', '+2', "+2", "+2")
                habilidadesbarbaro("d6",'7','8','7','7','8','8')
            break;
            case 5:
                automatic("D20", 'D14', '', '1d24', 'Tabela IV', '+5', '+2', "+3", "+2")
                habilidadesbarbaro("d7", '8','9','8','8','9','9')
            break;
            case 6:
                automatic("D20", 'D16', '', '1d30', 'Tabela V', '+6', '+2', "+4", "+2")
                habilidadesbarbaro("d8",'9','10','9','9','10','10')
            break;
            case 7:
                automatic("D20", 'D20', '', 'd30 + d8', 'Tabela V', '+7', '+3', "+4", "+3")
                habilidadesbarbaro("d10",'10','11','10','10','11','11')
            break;
            case 8:
                automatic("D20", 'D20', '', 'd30 + 10', 'Tabela V', '+8', '+3', "+5", "+3")
                habilidadesbarbaro("d12",'11','12','11','11','12','12')
            break;
            case 9:
                automatic("D20", 'D20', '', '2d20', 'Tabela V', '+9', '+3', "+5", "+3")
                habilidadesbarbaro("d14",'12','13','12','12','13','13')
            break;
            case 10:
                automatic("D20", 'D20', 'D14', '2d20', 'Tabela V', '+10', '+4', "+6", "+4")
                habilidadesbarbaro("d16",'13','14','13','13','14','14')
            break;
        }
    break;
    case "Berserker":
        this.getField("proficiencias armas").value = " -Armas c/c: machado de batalha, clava, adaga, machadinha, espada longa, maça, arma de haste, espada curta, bastão, espada de duas mãos e martelo de guerra e lança.\n -Berserkers podem usar qualquer armadura com um máximo de um bônus de CA de +5. Normalmente evitam o uso de escudos.";
        this.getField("dado de vida").value = "D10";
        switch(nivel){
            case 1: 
                automatic("D20", '', '', '1d10', 'Tabela III', '+1', '+1', "+1", "1")
                dadoselvagem = "d3";
            break;
            case 2: 
                automatic("D20", '', '', '1d12', 'Tabela III', '+2', '+1', "+1", "1")
                dadoselvagem = "d4";
            break;
            case 3:
                automatic("D20", '', '', '1d14', 'Tabela III', '+3', '+1', "+2", "+1")
                dadoselvagem = "d5";

            break;
            case 4:
                automatic("D20", '', '', '1d16', 'Tabela IV', '+4', '+2', "+2", "+2")
                dadoselvagem = "d5 + d3";

            break;
            case 5:
                automatic("D20", 'D14', '', '1d20', 'Tabela IV', '+5', '+2', "+3", "+2")
                dadoselvagem = "d6 + d4";

            break;
            case 6:
                automatic("D20", 'D16', '', '1d24', 'Tabela V', '+6', '+2', "+4", "+2")
                dadoselvagem = "2d6 + d4";

            break;
            case 7:
                automatic("D20", 'D20', '', '1d30', 'Tabela V', '+7', '+3', "+4", "+3")
                dadoselvagem = "d8/d6 + d4 + d3";

            break;
            case 8:
                automatic("D20", 'D20', '', '1d30', 'Tabela V', '+8', '+3', "+5", "+3")
                dadoselvagem = "2d8 + d6 + d4";

            break;
            case 9:
                automatic("D20", 'D20', '', '2d20', 'Tabela V', '+9', '+3', "+5", "+3")
                dadoselvagem = "2d8 + d6 + d4";

            break;
            case 10:
                automatic("D20", 'D20', 'D14', '2d20', 'Tabela V', '+10', '+4', "+6", "+4")
                dadoselvagem = "d10/d8 + 2d6 + 2d6";

            break;
        }
        this.getField("esp classe 1").value = " -Sexto Sentido: Adiciona o nível da sua classe para detectar emboscadas ou evitar armadilhas. \n\n -Cleave: Quando abate um inimigo em combate, pode realizar outro ataque c/c com -1d mirando em outro oponente adjacente. É aplicado também o dano excedente do golpe anterior.\n\n -Frustração Perigosa: Ao errar um ataque c/c, ganha um dado de frustração d3 que é adicionado ao próximo ataque e dano. Caso erre novamente, o dado é evoluído em 1 na cadeia de dados. \n\n -Instintos Selvagens: É ativado quando um oponente ativa um gatilho: Uma vez por rodada no nível 1, Duas no nível 4 e Três no nível 7. Após, é rolado na tabela a(s) vantagem(s) obtida.\n\n  >Dado de Instinto Selvagem: " + dadoselvagem + "  \n\n | Nvl      Gatilho\n | 1-2    = Ataque natural c/c do oponente é igual ou menor que a CA do berserker\n | 3-4   = Danificado por um oponente em combate c/c\n | 5-6   = Alvo de medo, dominação ou efeito mental\n | 7-8   = Ser alvo de um ataque c/c\n | 9-10 = Um oponente se move à uma distância c/c de você";
    break;
    case "Clerigo":
        this.getField("proficiencias armas").value = " -Um clérigo é proficiente com as armas usadas pelos seguidores de seu deus.\n -Clérigos podem usar quaisquer armaduras e elas não afetam suas Jogadas de Conjuração.";
        this.getField("dado de vida").value = "D8";
        switch(nivel){
            case 1: 
                automatic("d20", '', '', '1d8', "Tabela III", "+0", "+0", "+1", "+1")
                magiasconhecidas1 = '4'
                magiasconhecidas2 = '-'
                magiasconhecidas3 = '-'
                magiasconhecidas4 = '-'
                magiasconhecidas5 = '-'
            break;
            case 2: 
                automatic("d20", "", "", "1d8", "Tabela III", "+1", "+0", "+1", "+1")
                magiasconhecidas1 = '5'
                magiasconhecidas2 = '-'
                magiasconhecidas3 = '-'
                magiasconhecidas4 = '-'
                magiasconhecidas5 = '-'
            break;
            case 3:
                automatic("d20", '', '', "1d10", "Tabela III", "+2", "+1", "+1", "2")
                magiasconhecidas1 = '5'
                magiasconhecidas2 = '3'
                magiasconhecidas3 = '-'
                magiasconhecidas4 = '-'
                magiasconhecidas5 = '-'
            break;
            case 4:
                automatic("d20", '', '', '1d10', "Tabela III", "+2", "+1", "+2", "+2")
                magiasconhecidas1 = '6'
                magiasconhecidas2 = '4'
                magiasconhecidas3 = '-'
                magiasconhecidas4 = '-'
                magiasconhecidas5 = '-'
            break;
            case 5:
                automatic("d20", 'd14', '', "1d12", "Tabela III", "+3", "+1", "+2", "+3")
                magiasconhecidas1 = '6'
                magiasconhecidas2 = '5'
                magiasconhecidas3 = '2'
                magiasconhecidas4 = '-' 
                magiasconhecidas5 = '-'
            break;
            case 6:
                automatic("d20", "d16", "", "1d12", "Tabela III", "+4", "+2", "+2", "+4")
                magiasconhecidas1 = '7'
                magiasconhecidas2 = '5'
                magiasconhecidas3 = '3'
                magiasconhecidas4 = '-' 
                magiasconhecidas5 = '-'
            break;
            case 7:
                automatic("d20", "d20", '', "1d14", "Tabela III", "+5", "+2", "+3", "+4")
                magiasconhecidas1 = '7'
                magiasconhecidas2 = '6'
                magiasconhecidas3 = '4'
                magiasconhecidas4 = '1'
                magiasconhecidas5 = '-' 
            break;
            case 8:
                automatic("d20", "d20", '', "1d14", "Tabela III", "+5", "+2", "+3", "+5")
                magiasconhecidas1 = '8'
                magiasconhecidas2 = '6'
                magiasconhecidas3 = '5'
                magiasconhecidas4 = '2'
                magiasconhecidas5 = '-'
            break;
            case 9:
                automatic("d20", "d20", "", "1d16", "Tabela III", "+6", "+3", "+3", "+5")
                magiasconhecidas1 = '8'
                magiasconhecidas2 = '7'
                magiasconhecidas3 = '5'
                magiasconhecidas4 = '3'
                magiasconhecidas5 = '1'
            break;
            case 10:
                automatic("d20", "d20", "", "1d16", "Tabela III", "+7", "+3", "+4", "+6")
                magiasconhecidas1 = '9'
                magiasconhecidas2 = '7'
                magiasconhecidas3 = '6'
                magiasconhecidas4 = '4'
                magiasconhecidas5 = '2'
            break;
        }
        this.getField("esp classe 1").value = " -Nível de Conjuração é igual ao nível do Clérigo: " + nivel + "\n\n -Magias: Clérigo conjura magias divinas com seu Mod. De Personalidade + Nível de Conjuração. \n\n -Desaprovação Divina: Quando falhar para conjurar magias, caso tire 1 no dado, ele sofre uma Desaprovação Divina. Caso apenas falhe ou use de forma pecaminosa seus poderes, a margem para desaprovação avança em +1.\n\n -Espantar Hereges: Um clérigo empunha seu símbolo sagrado para expulsar abominações. O mod. de Sorte é aplicado nas Jogadas de Conjuração de Espantar Hereges. (" + sorte + ")\n\n -Toque de Cura: Podem realizar Cura divina baseada no DV e alinhamento do alvo.\n  |Igual|Adjacente|Oposto|  12: |2dv|1dv|1dv|  14: |3dv|2dv|1dv|  20: |4dv|3dv|2dv|  22+: |5dv|4dv|3dv| \n\n -Ajuda Divina: Podem clamar a seu deus por ajuda divina. Este ato impõe penalidade de Desaprovação Divina +10. \n\n >Magias Conhecidas: \n\n Nível 1: " + magiasconhecidas1 + "     | Nível 2: " + magiasconhecidas2 + "     | Nível 3: " + magiasconhecidas3 + "     | Nível 4: " + magiasconhecidas4 + "     | Nível 5: " + magiasconhecidas5; 
    break;
    case "Elfo (arquetipo)":
        this.getField("proficiencias armas").value = " -Armas c/c: adaga, lança de cavalaria, espada longa, espada curta, cajado e espada de duas mãos.\n -Armas à distância: arco longo, azagaia, arco curto, lança.\n -Elfos costumam usar armadura de mithril, mesmo que elas afetem a conjuração de suas magias.";
        this.getField("dado de vida").value = "D6";
        switch(nivel){
            case 1: 
                automatic("d20", '', '', '1d6', "Tabela II", "+1", "+1", "+1", "+1")
                magiasconhecidas = "3"
                nivelmagias = "1"
            break;
            case 2: 
                automatic("d20", "", "", "1d8", "Tabela II", "+1", "+1", "+1", "+1")
                magiasconhecidas = "4"
                nivelmagias = "1"
            break;
            case 3:
                automatic("d20", '', '', "1d8", "Tabela II", "+2", "+1", "+1", "2")
                magiasconhecidas = "5"
                nivelmagias = "2"
            break;
            case 4:
                automatic("d20", '', '', '1d10', "Tabela II", "+2", "+2", "+2", "+2")
                magiasconhecidas = "6"
                nivelmagias = "2"
            break;
            case 5:
                automatic("d20", 'd14', '', "1d10", "Tabela II", "+3", "+2", "+2", "+3")
                magiasconhecidas = "7"
                nivelmagias = "3"
            break;
            case 6:
                automatic("d20", "d16", "", "1d12", "Tabela II", "+3", "+2", "+2", "+4")
                magiasconhecidas = "8"
                nivelmagias = "3"
            break;
            case 7:
                automatic("d20", "d20", '', "1d12", "Tabela II", "+4", "+3", "+3", "+4")
                magiasconhecidas = "9"
                nivelmagias = "4"
            break;
            case 8:
                automatic("d20", "d20", '', "1d14", "Tabela II", "+4", "+3", "+3", "+5")
                magiasconhecidas = "10"
                nivelmagias = "4"
            break;
            case 9:
                automatic("d20", "d20", "", "1d14", "Tabela II", "+5", "+3", "+3", "+5")
                magiasconhecidas = "12"
                nivelmagias = "5"
            break;
            case 10:
                automatic("d20", "d20", "d14", "1d16", "Tabela II", "+5", "+4", "+4", "+6")
                magiasconhecidas = "14"
                nivelmagias = "5"
            break;
        }
        this.getField("esp classe 1").value = " -Nível de Conjuração: Igual ao Nível do Elfo. \n  >Nível de Conjuração: " + nivel + "\n\n -Magias: Elfos conjuram magias arcanas com seu Mod. De Inteligência + Nível de Conjuração. \n\n -Patronos: Elfos começam com as magias: Ligação Patronal e Invocar Patrono.\n\n -No nível 1, podem aplicar seu Mod. de Sorte em uma magia específica.\n  >Modificador de Sorte: " + sorte + "\n\n >Magias Conhecidas: " + magiasconhecidas + " (" + inteligencia + ")\n >Nível Máximo de Magias: " + nivelmagias; 
    break;
    case "Druida":
        this.getField("proficiencias armas").value = " -Um druida pode usar qualquer arma e armadura, desde que atenda aos requisitos de sua Restrição Druídica.";
        this.getField("dado de vida").value = "D8";
        switch(nivel){
            case 1: 
                automatic("D20", '', '', '1d8', 'Tabela III', '+0', '+1', "+0", "+1")
                habilidadesdruida("1", '3', '0', '1', '3', '0', '0', '1')
            break;
            case 2: 
                automatic("D20", '', '', '1d8', 'Tabela III', '+1', '+1', "+0", "+1")
                habilidadesdruida('1', '5', '0', '3', '5', '0', '1', '3')
            break;
            case 3:
                automatic("D20", '', '', '1d10', 'Tabela III', '+2', '+1', "+1", "+2")
                habilidadesdruida('2', '7', '1', '5', '7', '1', '2', '5')
            break;
            case 4:
                automatic("D20", '', '', '1d10', 'Tabela III', '+2', '+2', "+1", "+2")
                habilidadesdruida('2', '9', '2', '7', '9', '2', '3', '7')
            break;
            case 5:
                automatic("D20", '', '', '1d12', 'Tabela III', '+3', '+2', "+1", "+3")
                habilidadesdruida('3', '10', '3', '8', '10', '3', '4', '8')
            break;
            case 6:
                automatic("D20", 'D14', '', '1d12', 'Tabela III', '+4', '+3', "+2", "+3")
                habilidadesdruida('3', '11', '4', '9', '11', '4', '5', '9')
            break;
            case 7:
                automatic("D20", 'D16', '', '1d14', 'Tabela III', '+5', '+3', "+2", "+4")
                habilidadesdruida('4', '12', '5', '10', '12', '5', '6', '10')
            break;
            case 8:
                automatic("D20", 'D20', '', '1d14', 'Tabela III', '+5', '+3', "+2", "+5")
                habilidadesdruida('4', '13', '6', '11', '13', '6', '7', '11')
            break;
            case 9:
                automatic("D20", 'D20', '', '1d16', 'Tabela III', '+6', '+3', "+3", "+5")
                habilidadesdruida('5', '14', '7', '12', '14', '7', '8', '12')
            break;
            case 10:
                automatic("D20", 'D20', 'D14', '1d16', 'Tabela III', '+7', '+4', "+3", "+6")
                habilidadesdruida('5', '15', '8', '13', '15', '8', '9', '13')
            break;
        }

    break;
    case "Guerreiro":
        this.getField("proficiencias armas").value = " -Armas c/c: machado de guerra, clava, adaga, mangual, machado, lança de cavalaria, espada longa, maça, arma da haste, espada curta, cajado, espada de duas mãos e martelo de guerra.\n -Armas à distância: besta, dardo, azagaia, arco longo, arco curto, funda e lança.\n -Guerreiros usam qualquer armadura.";
        this.getField("dado de vida").value = "D12";
        switch(nivel){
            case 1: 
                automatic("D20", '', '', '1d12', 'Tabela III', '+d3', '+1', "+1", "0")
            break;
            case 2: 
                automatic("D20", '', '', '1d14', 'Tabela III', '+d4', '+1', "+1", "0")
            break;
            case 3:
                automatic("D20", '', '', '1d16', 'Tabela IV', '+d5', '+1', "+2", "+1")
            break;
            case 4:
                automatic("D20", '', '', '1d20', 'Tabela IV', '+d6', '+2', "+2", "+1")
            break;
            case 5:
                automatic("D20", 'D14', '', '1d24', 'Tabela V', '+d7', '+2', "+3", "+1")
            break;
            case 6:
                automatic("D20", 'D16', '', '1d30', 'Tabela V', '+d8', '+2', "+4", "+2")
            break;
            case 7:
                automatic("D20", 'D20', '', '1d30', 'Tabela V', 'd10+1', '+3', "+4", "+2")
            break;
            case 8:
                automatic("D20", 'D20', '', '2d20', 'Tabela V', 'd10+2', '+3', "+5", "+2")
            break;
            case 9:
                automatic("D20", 'D20', '', '2d20', 'Tabela V', 'd10+3', '+3', "+5", "+3")
            break;
            case 10:
                automatic("D20", 'D20', 'D14', '2d20', 'Tabela V', 'd10+4', '+4', "+6", "+3")
            break;
        }

        this.getField("esp classe 1").value = " -Modificador de Ataque: Recebem um dado de feito como modificador ao invés de um valor fixo \n\n -Feitos Extraordinários de Combate: Podem Realizar Feitos Extraordinários em batalha com seu Dado de Feito. \n   >Dado de Feito: " + this.getField("ataq base").valueAsString + "\n\n -Acerto Crítico: O intervalo de Acerto Crítico do Guerreiro é maior que as demais classes. \n  Do 1º até 4º nível: 19-20 \n  Do 5º até 8 nível: 18-20 \n  Do 9º até 10º nível: 17-20 \n\n Iniciativa: O Guerreiro adiciona seu nível de classe à sua jogada de iniciativa. \n   >Bônus de Iniciativa: +" + nivel + "\n\n Sorte: O modificador de Sorte é aplicado às jogadas de Ataque com um tipo de arma específica. \n   >Bônus de Sorte: " + sorte; 
    break;
    case "Halfling (arquetipo)":
        this.getField("proficiencias armas").value = " -Armas c/c: clava, adaga, machado, espada curta e cajado.\n -Armas à distância: besta, azagaia, arco curto e funda.\n -Halflings geralmente usam armadura.";
        this.getField("dado de vida").value = "D6";
        
        switch(nivel){
            case 1: 
                automatic("D20", '', '', '1d8', 'Tabela III', '+1', '+1', "+1", "+1")
                furtividadehalfling = "+3"
            break;
            case 2: 
                automatic("D20", '', '', '1d8', 'Tabela III', '+2', '+1', "+1", "+1")
                furtividadehalfling = "+5"
            break;
            case 3:
                automatic("D20", '', '', '1d10', 'Tabela III', '+2', '+2', "+1", "+2")
                furtividadehalfling = "+7"
            break;
            case 4:
                automatic("D20", '', '', '1d10', 'Tabela III', '+3', '+2', "+2", "+2")
                furtividadehalfling = "+8"
            break;
            case 5:
                automatic("D20", '', '', '1d12', 'Tabela III', '+4', '+3', "+2", "+3")
                furtividadehalfling = "+9"
            break;
            case 6:
                automatic("D20", 'D14', '', '1d12', 'Tabela III', '+5', '+4', "+2", "+4")
                furtividadehalfling = "+11"
            break;
            case 7:
                automatic("D20", 'D16', '', '1d14', 'Tabela III', '+5', '+4', "+3", "+4")
                furtividadehalfling = "+12"
            break;
            case 8:
                automatic("D20", 'D20', '', '1d14', 'Tabela III', '+6', '+5', "+3", "+5")
                furtividadehalfling = "+13"
            break;
            case 9:
                automatic("D20", 'D20', '', '1d16', 'Tabela III', '+7', '+5', "+3", "+5")
                furtividadehalfling = "+14"
            break;
            case 10:
                automatic("D20", 'D20', '', '1d16', 'Tabela III', '+8', '+6', "+4", "+6")
                furtividadehalfling = "+15"
            break;
        }
        this.getField("esp classe 1").value = " -Lutar com duas Armas: Halflings podem lutar com duas armas como se tivessem 16 pontos de agilidade. Diferente de outras classes, obtém acerto crítico com um 16 natural. \n\n -Amuleto da Sorte: O Halfling pode queimar pontos de sorte para ajudar um aliado. \n\n -Sorte Aprimorada: Quando pontos de sorte são queimados, a vantagem é dobrada. \n  >Halflings recuperam sorte igual ao seu nível após cada noite. \n\n -Furtividade: " + furtividadehalfling;  

    break;
    case "Ladrao":
        this.getField("proficiencias armas").value = " -Armas c/c: porrete, adaga, garrote, espada longa, espada curta e cajado.\n -Armas à distância: zarabatana, besta, dardo, funda.\n -Ladrões são cuidadosos em sua escolha de armaduras, pois ela afeta o uso de suas habilidades.";
        this.getField("dado de vida").value = "D6";
        switch(nivel){
            case 1: 
                automatic("D20", '', '', 'd10', 'Tabela II', '+0', '+1', "+1", "0")
            break;
            case 2: 
                automatic("D20", '', '', 'd12', 'Tabela II', '+1', '+1', "+1", "0")
            break;
            case 3:
                automatic("D20", '', '', 'd14', 'Tabela II', '+2', '+2', "+1", "+1")
            break;
            case 4:
                automatic("D20", '', '', 'd16', 'Tabela II', '+2', '+2', "+2", "+1")
            break;
            case 5:
                automatic("D20", '', '', 'd20', 'Tabela II', '+3', '+3', "+2", "+1")
            break;
            case 6:
                automatic("D20", 'D14', '', 'd24', 'Tabela II', '+4', '+4', "+2", "+2")
            break;
            case 7:
                automatic("D20", 'D16', '', 'd30', 'Tabela II', '+5', '+4', "+3", "+2")
            break;
            case 8:
                automatic("D20", 'D20', '', 'd30+2', 'Tabela II', '+5', '+5', "+3", "+2")
            break;
            case 9:
                automatic("D20", 'D20', '', 'd30+4', 'Tabela II', '+6', '+5', "+3", "+3")
            break;
            case 10:
                automatic("D20", 'D20', '', 'd30+6', 'Tabela II', '+7', '+6', "+4", "+3")
            break;
        }
            switch(alinhamento){
                case "Ordeiro":
                    switch(nivel){
                        case 1:
                            habilidadesladrao("Chefão", "D3", "1", "1", "3", "1", "3", "1", "3", "3", "0", "0", "0", "0", "10")
                        break;
                        case 2:
                            habilidadesladrao("Chefão", "D4", '3', '3', '5', '3', '5', '3', '5', '5', '0', '1', '0', '1', '10');
                        break;
                        case 3:
                            habilidadesladrao("Chefão", "D5",'5', '5', '7', '5', '7', '5', '7', '7', '1', '2', '1', '2', '12');
                        break;
                        case 4:
                            habilidadesladrao("Chefão", "D6", "7", "7", "8", "7", "8", "7", "8", "8", "2", "3", "2", "3", "12"); 
                        break;
                        case 5:
                            habilidadesladrao("Chefão", "D7", "8", "8" ,"9", "8", "9", "8", "9", "9", "3", "4", "3", "4", "14");
                        break;
                        case 6:
                            habilidadesladrao("Chefão", "D8", "9", "9", "11", "9", "11", "9", "11", "11", "4", "5", "4", "5", "14");
                        break;
                        case 7:
                            habilidadesladrao("Chefão", "D10", "10", "10", "12", "10", "12", "10", "12", "12", "5", "6", "5", "6", "16");
                        break;
                        case 8:
                            habilidadesladrao("Chefão", "D12", "11", "11", "13", "11", "13", "11", "13", "13", "6", "7", "6", "7", "16");
                        break;
                        case 9:
                            habilidadesladrao("Chefão", "D14", "12", "12", "14", "12", "14", "12", "14", "14", "7", "8", "7", "8", "20");
                        break;
                        case 10:
                            habilidadesladrao("Chefão", "D16", "13", "13", "15", "13", "15", "13", "15", "15", "8", "9", "8", "9", "20");
                        break;

                        default:
                            this.getField("esp classe 1").value = "";
                        break;
                    }
                break;
                case "Neutro":
                    switch(nivel){
                        case 1:
                            habilidadesladrao("Vigarista", "D3", "0", "3", "1", "3", "3", "1", "1", "1", "3", "0", "0", "0", "12")
                        break;
                        case 2:
                            habilidadesladrao("Vigarista", "D4", "1","5", "3", "5", "5", "3", "3", "3", "5", "0", "1", "0", "12");
                        break;
                        case 3:
                            habilidadesladrao("Vigarista", "D5", "2", "7", "5", "7", "7", "5", "5", "5", "7", "1", "2", "1", "14");
                        break;
                        case 4:
                            habilidadesladrao("Vigarista", "D6", "3", "8", "7", "8", "8", "7", "7", "7", "8", "2", "3", "2", "14"); 
                        break;
                        case 5:
                            habilidadesladrao("Vigarista", "D7", "4", "9", "8", "9", "9", "8", "8", "8", "9", "3", "4", "3", "16");
                        break;
                        case 6:
                            habilidadesladrao("Vigarista", "D8", "5", "11", "9", "11", "11", "9", "9", "9", "11", "4", "5", "4", "16");
                        break;
                        case 7:
                            habilidadesladrao("Vigarista", "D10", "6", "12", "10", "12", "12", "10", "10", "10", "12", "5", "6", "5", "20");
                        break;
                        case 8:
                            habilidadesladrao("Vigarista", "D12", "7", "13", "11", "13", "13", "11", "11", "11", "13", "6", "7", "6", "20");
                        break;
                        case 9:
                            habilidadesladrao("Vigarista", "D14", "8", "14", "12", "14", "14", "12", "12", "12", "14", "7", "8", "7", "20");
                        break;
                        case 10:
                            habilidadesladrao("Vigarista", "D16", "9", "15", "13", "15", "15", "13", "13", "13", "15", "8", "9", "8", "20");
                        break;

                        default:
                            this.getField("esp classe 1").value = "";
                        break;
                    }
                break;
                case "Caótico":
                    switch(nivel){
                        case 1:
                            habilidadesladrao("Assassino", "D3", "3", "3", "1", "0", "1", "1", "1", "0", "0", "3", "0", "3", "10")
                        break;
                        case 2:
                            habilidadesladrao("Assassino", "D4", "5", "5", "3", "1", "3", "3", "3", "1", "0", "5", "0", "5", "10");
                        break;
                        case 3:
                            habilidadesladrao("Assassino", "D5", "7", "7", "5", "2", "5", "5", "5", "2", "1", "7", "1", "7", "12");
                        break;
                        case 4:
                            habilidadesladrao("Assassino", "D6", "8", "8", "7", "3", "7", "7", "7", "3", "2", "8", "2", "8", "12"); 
                        break;
                        case 5:
                            habilidadesladrao("Assassino", "D7", "9", "9", "8", "4", "8", "8", "8", "4", "3", "9", "3", "9", "14");
                        break;
                        case 6:
                            habilidadesladrao("Assassino", "D8", "11", "11", "9", "5", "9", "9", "9", "5", "4", "11", "4", "11", "14");
                        break;
                        case 7:
                            habilidadesladrao("Assassino", "D10", "12", "12", "10", "6", "10", "10", "10", "6", "5", "12", "5", "12", "16");
                        break;
                        case 8:
                            habilidadesladrao("Assassino", "D12", "13", "13", "11", "7", "11", "11", "11", "7", "6", "13", "6", "13", "16");
                        break;
                        case 9:
                            habilidadesladrao("Assassino", "D14", "14", "14", "12", "8", "12", "12", "12", "8", "7", "14", "7", "14", "20");
                        break;
                        case 10:
                            habilidadesladrao("Assassino", "D16", "15", "15", "13", "9", "13", "13", "13", "9", "8", "15", "8", "15", "20");
                        break;

                        default:
                            this.getField("esp classe 1").value = "";
                        break;
                }
                break;
            }
    break;
    case "Mago": 
        this.getField("proficiencias armas").value = " -Armas c/c: adaga, espada longa, espada curta e cajado.\n -Armas à distância: arco longo e arco curto.\n -Magos raramente usam armaduras, já que isso atrapalha suas conjurações.";
        this.getField("dado de vida").value = "D4";
        switch(nivel){
            case 1: 
                automatic("d20", '', '', '1d6', "Tabela I", "+0", "+1", "+0", "+1")
                magiasconhecidas = "4"
                nivelmagias = "1"
            break;
            case 2: 
                automatic("d20", "", "", "1d6", "Tabela I", "+1", "+1", "+0", "+1")
                magiasconhecidas = "5"
                nivelmagias = "1"
            break;
            case 3:
                automatic("d20", '', '', "1d8", "Tabela I", "+1", "+1", "+1", "2")
                magiasconhecidas = "6"
                nivelmagias = "2"
            break;
            case 4:
                automatic("d20", '', '', '1d8', "Tabela I", "+1", "+2", "+1", "+2")
                magiasconhecidas = "7"
                nivelmagias = "2"
            break;
            case 5:
                automatic("d20", 'd14', '', "1d10", "Tabela I", "+2", "+2", "+1", "+3")
                magiasconhecidas = "8"
                nivelmagias = "3"
            break;
            case 6:
                automatic("d20", "d16", "", "1d10", "Tabela I", "+2", "+2", "+2", "+4")
                magiasconhecidas = "9"
                nivelmagias = "3"
            break;
            case 7:
                automatic("d20", "d20", '', "1d12", "Tabela I", "+3", "+3", "+2", "+4")
                magiasconhecidas = "10"
                nivelmagias = "4"
            break;
            case 8:
                automatic("d20", "d20", '', "1d12", "Tabela I", "+3", "+3", "+2", "+5")
                magiasconhecidas = "12"
                nivelmagias = "4"
            break;
            case 9:
                automatic("d20", "d20", "", "1d14", "Tabela I", "+4", "+3", "+3", "+5")
                magiasconhecidas = "14"
                nivelmagias = "5"
            break;
            case 10:
                automatic("d20", "d20", "d14", "1d14", "Tabela I", "+4", "+4", "+3", "+6")
                magiasconhecidas = "16"
                nivelmagias = "5"
            break;
        }
        this.getField("esp classe 1").value = " -Nível de Conjuração: Igual ao Nível do Mago. \n  >Nível de Conjuração: " + nivel + "\n\n -Magias: Magos conjuram magias arcanas com seu Mod. De Inteligência + Nível de Conjuração. \n\n -Patronos: Magos tendem a possuir suas magias de algum Patrono. Para invocar um patrono, é necessário fazer queimarcana de 1 Atributo e lançar a magia Invocar Patrono. \n\n -Sorte: Mod. De Sorte é aplicado nas suas rolagens de Corrupção e Magia Mercurial. \n  >Modificador de Sorte: " + sorte + "\n\n -Linguagens: Conhece duas línguas adicionais para cada ponto de Mod. De Inteligência. \n\n >Magias Conhecidas: " + magiasconhecidas + " (" + inteligencia + ")\n >Nível Máximo de Magias: " + nivelmagias; 
    break;
    case "Mutant":
        this.getField("proficiencias armas").value = " -Armas c/c: adaga, espada longa, maça, rede, rede de espinhos, arma de haste, espada curta, corrente espinhada, espada de duas lâminas e espada de duas mãos.\n -Armas à distância:besta, arco longo, arco curto, lança, funda e rede.\n -Caso o mutante seja dotado de uma arma por meio de mutação, eles também são proficientes nela.\n -Um mutante pode usar qualquer tipo de armadura.";
        this.getField("dado de vida").value = "Varia";
        switch(nivel){
            case 1: 
                automatic("d20", '', '', '1d8', "Tabela III", "+0", "+1", "+1", "+0")
            break;
            case 2: 
                automatic("d20", "", "", "1d8", "Tabela III", "+1", "+1", "+2", "+1")
            break;
            case 3:
                automatic("d20", '', '', "1d10", "Tabela III", "+2", "+2", "+2", "+1")
            break;
            case 4:
                automatic("d20", '', '', '1d10', "Tabela III", "+2", "+2", "+3", "+1")
            break;
            case 5:
                automatic("d20", '', '', "1d12", "Tabela III", "+3", "+2", "+4", "+2")
            break;
            case 6:
                automatic("d20", "d10", "", "1d12", "Tabela III", "+4", "+3", "+4", "+2")
            break;
            case 7:
                automatic("d20", "d12", '', "1d14", "Tabela III", "+5", "+3", "+4", "+2")
            break;
            case 8:
                automatic("d20", "d16", '', "1d14", "Tabela III", "+5", "+3", "+5", "+3")
            break;
            case 9:
                automatic("d20", "d20", "", "1d16", "Tabela III", "+6", "+4", "+5", "+3")
            break;
            case 10:
                automatic("d20", "d20", "", "1d16", "Tabela III", "+7", "+4", "+6", "+3")
            break;
        }
        this.getField("esp classe 1").value = " -Dados de Vida: Em cada nível, role 1d4 para o tipo de dado de vida, e role para os pontos de vida. 1) d4; 2) d6; 3) d8; 4) d10. Quando recebe cura baseada em dados de vida, o dado utilizado é o do nível atual. \n\n -Cão de Caça: Ao concentrar-se por 1d4 rodadas e ter sucesso em um teste de Inteligência CD 12, é capaz de sentir outros mutantes em um raio de 30 metros. Caso se concentre por 1 minuto e obtiver sucesso em um teste de Inteligência CD 16, podem rastrear um mutante específico, saber onde estão e conhecer suas mutações. \n\n -Mutação: No nível 1, começa com duas mutações cosméticas e duas de poder, rola 1d6 para ver se têm uma mutação catastrófica. Sempre que um mutante ganha um nível, realize um teste de Sorte. Caso tenha sucesso, ganha uma mutação cosmética e de poder, caso contrário não ganha novas mutações neste nível. Também rolam 1d6 para saber se ganharam uma Mutação Castrófica (podem queimar permanentemente um ponto de Sorte para evitar a mesma) \n\n  >1-4) Boa Mutação- não ganham uma mutação catastrófica; \n  >5-6) Não tão Boa Mutação- ganham uma mutação catastrófica."
    break;
    case "Psychic Knight":
        this.getField("proficiencias armas").value = " -Armas c/c: adaga, espada longa, espada, lança, espada de duas mãos e machado.\n -Armas à distância: bestas, arcos longos e arcos curtos.\n -Estão limitados ao uso de armaduras não mais volumosas do que couro e um ocasional pequeno escudo.";
        this.getField("dado de vida").value = "D8";
        switch(nivel){
            case 1: 
                automatic("d20", '', '', '1d6', "Tabela III", "+1", "+1", "+1", "+1")
                dadopsiquico = 'd3'
            break;
            case 2: 
                automatic("d20", "", "", "1d7", "Tabela III", "+1", "+2", "+2", "+1")
                dadopsiquico = 'd4'
            break;
            case 3:
                automatic("d20", '', '', "1d8", "Tabela III", "+2", "+2", "+2", "+1")
                dadopsiquico = 'd5'
            break;
            case 4:
                automatic("d20", '', '', '1d12', "Tabela III", "+2", "+2", "+2", "+2")
                dadopsiquico = 'd6'
            break;
            case 5:
                automatic("d20", 'D14', '', "1d14", "Tabela III", "+3", "+3", "+3", "+2")
                dadopsiquico = 'd7'
            break;
            case 6:
                automatic("d20", "d16", "", "1d16", "Tabela IV", "+3", "+3", "+4", "+2")
                dadopsiquico = 'd8'
            break;
            case 7:
                automatic("d20", "d20", '', "1d20", "Tabela IV", "+4", "+4", "+4", "+3")
                dadopsiquico = 'd10'
            break;
            case 8:
                automatic("d20", "d20", '', "1d24", "Tabela IV", "+4", "+4", "+4", "+3")
                dadopsiquico = 'd12'
            break;
            case 9:
                automatic("d20", "d20", "", "1d20", "Tabela V", "+5", "+4", "+4", "+3")
                dadopsiquico = 'd14'
            break;
            case 10:
                automatic("d20", "d20", "d14", "1d20", "Tabela V", "+5", "+5", "+5", "+4")
                dadopsiquico = 'd16'
            break;
        }
        this.getField("esp classe 1").value = " -Dado Psíquico: Como uma ação livre, pode rolar seu dado psíquico. Após o rolar, o jogador consulta a Tabela do Dado Psíquico e ganha a habilidade até sofrer dano ou até a próxima noite completa de descanso. Após a dissipação psíquica ou descanso completo, pode rolar novamente.\n   >Dado Psíquico: " + dadopsiquico + "\n\n|1-2: Reação Ágil  | 3  : Ataque Preciso  | 4  : Localizar Objetos/Pessoas.  | 5-8: Telekinesis  | 9  : Voar |\n                                                              | 10 : Projeção de Energia |\n\n -Clareza Mental: Aplica seu modificador de Int ao realizar qualquer teste não relacionado ao combate, desde que declare o uso da Clareza Mental para se concentrar na tarefa. Bônus: (" + inteligencia + ")\n\n -Montaria Superior: Possuem uma sintonia especial com animais de montaria e todos os ataques enquanto montados em um animal ganham um adicional de +X no resultado, onde X é igual ao nível de classe. Possuem mais chances de serem capazes de domar e montar animais incomuns. Bônus: (+" + nivel + ")\n\n -Sorte: Pode aplicar seu modificador de Sorte tanto ao seu bônus de ataque base ou ao seu dado psíquico. Essa decisão deve ser tomada no 1º nível. Bônus: (" + sorte + ")"
    break;
    case "Ranger":
        this.getField("proficiencias armas").value = " -Armas c/c: clava, adaga, machadinha, espada longa, maça, espada curta e cajado.\n -Armas à distância: besta, dardo, Azagaia, arco longo, arco curto, funda e lança.\n -Rangers não utilizam uma combinação de escudo e armadura com um total de Penalidade ≤ -6.";
        this.getField("dado de vida").value = "D10";
        switch(nivel){
            case 1: 
                automatic("D20", '', '', '1d10', 'Tabela II/III', '+d3', '+1', "+1", "0")
                dcmelhorado = "1d12"
            break;
            case 2: 
                automatic("D20", '', '', '1d12', 'Tabela II/III', '+d3', '+1', "+1", "0")
                dcmelhorado = "1d14"
            break;
            case 3:
                automatic("D20", '', '', '1d14', 'Tabela II/IV', '+d4', '+1', "+2", "+1")
                dcmelhorado = "1d16"
            break;
            case 4:
                automatic("D20", '', '', '1d16', 'Tabela II/IV', '+d4', '+2', "+2", "+1")
                dcmelhorado = "1d20"
            break;
            case 5:
                automatic("D20", 'D14', '', '1d20', 'Tabela II/V', '+d5', '+2', "+3", "+1")
                dcmelhorado = "1d24"
            break;
            case 6:
                automatic("D20", 'D16', '', '1d24', 'Tabela II/V', '+d6', '+2', "+4", "+2")
                dcmelhorado = "1d30"
            break;
            case 7:
                automatic("D20", 'D20', '', '1d30', 'Tabela II/V', 'd7', '+3', "+4", "+2")
                dcmelhorado = "1d30"
            break;
            case 8:
                automatic("D20", 'D20', '', '1d30+2', 'Tabela II/V', 'd8', '+3', "+5", "+2")
                dcmelhorado = "2d20"
            break;
            case 9:
                automatic("D20", 'D20', '', '1d30+4', 'Tabela II/V', 'd10', '+3', "+5", "+3")
                dcmelhorado = "2d20"
            break;
            case 10:
                automatic("D20", 'D20', 'D14', '1d30+6', 'Tabela II/V', 'd10+1', '+4', "+6", "+3")
                dcmelhorado = "2d20"
            break;
        }

        this.getField("esp classe 1").value = " -Caminho do Patrulheiro: Qual Combate será melhorado e será adicionado o Dado de Feito: " + this.getField("ataq base").valueAsString +" \n  >Especialista em Arqueria: Em combate c/c, ignora a chance de 50% de acertar um aliado.  \n  >Especialista em Duas Armas: Pode lutar com 2 armas como se sua Agilidade fosse 16.\n\n  -Sorte: Ao ar livre, pode fazer um teste de Sorte para evitar ser surpreendido. \n\n  -Ervas Curativas: Esta ação leva 1 turno e funciona como a cura do clérigo na coluna Adjacente. Se rolar 1 natural, envenenou o alvo que deve fazer um teste de Fortitude de CD 20 - (" + nivel + "). Sucesso: perde 1 ponto temporário de Vitalidade.  Falha: perde permanentemente 1d6 de Vitalidade.\n\n -Inimigos Favoritos: No Nível 1, 3, 6 e 9, pode escolher tipos de inimigos favoritos. Ao lutar contra eles, o Dado de Feito melhora em um passo e pode ser usado em Habilidades Selvagens contra os mesmos. O intervalo (19-20), tabela e dado de crítico também são melhorados. DC Melhorado:" + dcmelhorado + " \n\n -Habilidade Selvagens: \n   >Escalar (Agilidade)     >Sobrevivência (Personalidade)     >Andarilho (Agilidade) \n   >Esconder e Furtividade (Agilidade)     >Encontrar/Neutralizar armadilhas naturais (Agilidade)  "; 
    break;
    case "Warforged":
        this.getField("proficiencias armas").value = " -Warforged é treinado em todo tipo de armas.\n -Não podem usar nenhuma armadura.";
        this.getField("dado de vida").value = "D10";

        switch(nivel){
            case 1: 
                automatic("d20", '', '', '1d10', "Tabela III", "+d3", "+0", "+1", "+1")
            break;
            case 2: 
                automatic("d20", "", "", "1d12", "Tabela III", "+d4", "+1", "+1", "+1")
            break;
            case 3:
                automatic("d20", '', '', "1d14", "Tabela III", "+d4", "+1", "+2", "+1")
            break;
            case 4:
                automatic("d20", '', '', '1d16', "Tabela IV", "+d5", "+1", "+2", "+2")
            break;
            case 5:
                automatic("d20", '', '', "1d20", "Tabela IV", "+d6", "+2", "+3", "+2")
            break;
            case 6:
                automatic("d20", "d8", "", "1d24", "Tabela IV", "+d6", "+2", "+3", "+3")
            break;
            case 7:
                automatic("d20", "d12", '', "1d30", "Tabela IV", "+d8", "+3", "+4", "+3")
            break;
            case 8:
                automatic("d20", "d16", '', "1d30", "Tabela IV", "+d10", "+3", "+4", "+4")
            break;
            case 9:
                automatic("d20", "d20", "", "2d20", "Tabela IV", "+d10+1", "+3", "+5", "+4")
            break;
            case 10:
                automatic("d20", "d20", "d10", "2d20", "Tabela IV", "+d10+2", "+3", "+5", "+5")
            break;
        }
        this.getField("esp classe 1").value = " -Modificador de Ataque: Recebem um dado de feito como modificador ao invés de um valor fixo \n -Feitos Extraordinários de Combate: Podem Realizar Feitos Extraordinários em batalha com seu Dado de Feito. \n   >Dado de Feito: " + this.getField("ataq base").valueAsString + "\n\n -Swiss-Army Hand: Sua mão pode rodar e alterar entre 3 armas. No nível 1, deve selecionar 3 armas da lista: Besta de Mão, Adaga, Machado de Mão, Maça, Espada Curta, Mangual ou Pistola. \n\n -Tinkering: Pode possuir melhorias adicionais ao seu corpo, apenas 1 ao nível 1. Exemplos: Dual Swiss-Army Hand; Thick Plating; Shoulder Cannon; Cannon Ball; Shrapnel Shot e Shrapnel. \n\n -Nuts and Bolts: Podem realizar aparos para serem utilizados que restauram 1d6+1 até 3d6+3 de HP. Custa 150gp e 4 horas para criar aparos simples e 700gp e 6 horas para criar aparos superiores. \n\n -Armadura Natural: Não necessitam de armaduras. É considerado que possuem equipado uma armadura de escamas (+4 CA / -4 Penalidades / -1,5m / d12)";
       
        this.getField("proficiencias").value = " -Constructo: Não necessita dormir, comer ou de oxigênio. São imunes à doenças e venenos. Recebem cura mágica não tão efetivamente, recebendo apenas metade dos pontos de vida. \n -Outsider: Testes de personalidade são feitos sempre com um dado inferior. \n -Punhos de Metal: O punho de um Warforged inflinge 1d4 de dano."

    break;
    case "Selecione":
        this.getField("proficiencias armas").value = "Proficiências:";
        this.getField("dado de vida").value = "";
        automatic('','','','','','','','','')
        this.getField("esp classe 1").value = "";
    break;
}