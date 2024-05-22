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

function habilidadesScout (dadosorte, emboscada,andarsilencio, escondernatureza, rastrear, escalarsuperficies, encontrararmadilhas, desarmararmadilhas, colocararmadilhas, manipularveneno) {

    var agilidade = this.getField("magilidade").valueAsString;
    var inteligencia = this.getField("minteligencia").valueAsString;

    this.getField("esp classe 1").value = " -Emboscada: É usada antes de um combate, durante a rodada de surpresa. Sofre -1 para cada aliado e a penalidade da armadura mais pesada usada pelos aliados. Você e os aliados ganham bônus de ataque e crítico automático no próximo ataque.\n\n -Esconder na Natureza: Esconde-se apenas em terrenos naturais. Pode esconder aliados.\n\n -Rastrear: Trilha Fácil: CD 5; Trilha Normal: CD 10; Trilha Difícil: 15; Trilha Impossível: CD 20;\n\n -Armar Armadilhas: Prepara o local onde o grupo fica por mais de 1d4 horas. Em combates, pode gastar 1 de Sorte para declarar uma armadilha onde um inimigo está. Role um ataque especial e, se acertar, o alvo deve passar em um teste de Reflexos contra a rolagem ou sofrerá 1d6 de dano. Pode gastar mais Sorte para aumentar a CD da armadilha (+1 CD/Ponto) ou o dano (+1d6/2 pontos).\n\n -Sorte: Ao queimar sorte ganham um dado adicional para cada ponto gasto. Cada noite de descanso recuperam Sorte igual ao seu nível. \n  >Dado de Sorte: " + dadosorte + "\n\n -Habilidades:\n  |>Emboscada:                       (+" + emboscada + ")             >Escalar Superfícies*:         (+"+escalarsuperficies+") + (" + agilidade + ")\n  |>Andar em Silêncio*:         (+" + andarsilencio + ") + (" + agilidade + ")  >Encontrar Armadilhas**: (+" + encontrararmadilhas + ") + (" + inteligencia + ")\n  |>Esconder na Natureza*: (+" + escondernatureza + ") + (" + agilidade + ")  >Desarmar Armadilhas*:     (+" + desarmararmadilhas + ") + (" + agilidade + ")\n  |>Rastrear**:                      (+" + rastrear + ") + (" + inteligencia + ")  >Colocar Armadilhas**:      (+"+colocararmadilhas+") + ("+inteligencia+")\n  |>Manipular Veneno:         (+"+manipularveneno+")              *Mod. Agilidade | **Mod. Inteligência"
}

function habilidadesMonk (dadozen, dadocriticozen, tabelacritico, alinhamentomonge, armas, caminhomonge, andarsilencio, escondersombras, furtar, abrirfechaduras,escalarsuperficies, disfarce, manipularveneno) {
    var agilidade = this.getField("magilidade").valueAsString;
    var personalidade = this.getField("minteligencia").valueAsString;

    this.getField("esp classe 1").value = " -Zen: Ao lutar desarmado com sua arma especial, adicione seu dado Zen à sua rolagem de iniciativa, ataque e dano. Pode lutar com duas armas desarmado. Ao lutar assim, são considerados como tendo +4 pontos em Agilidade (máximo de 18). Ao lutar desarmados ou com sua arma especial, use o Dado/Tabela de Crítico Zen, podendo também realizar Feitos Extraordinários de Combate.\n\n  >Dado Zen: " +dadozen+"\n  >Dado de Crítico Zen: " + dadocriticozen + "\n  >Tabela de Crítico Zen: " + tabelacritico + "\n\n -Defesa Sem Armadura: Adiciona seu Reflexo e Vontade base à sua CA quando não utilizar armadura.\n\n -Corpo Indefeso: Quando recupera pontos de vida por meios naturais, como ter uma boa noite de sono, ele adiciona sua Fortitude Base à quantidade de pontos de vida que recupera. \n\n -Alinhamento: Determina as armas especiais e o estilo de luta que o Monge luta.\n   >" + alinhamentomonge + ": " + armas +" e Luta Desarmada.\n\n -Habilidades: "+caminhomonge+"\n  |>Andar em Silêncio*:             (+"+andarsilencio+") + ("+agilidade+")     >Escalar Superfícies*: (+"+escalarsuperficies+") + ("+agilidade+")\n  |>Esconder-se nas Sombras*: (+"+escondersombras+") + ("+agilidade+")     >Disfarçar-se***:        (+"+disfarce+") + ("+personalidade+")\n  |>Furtar Bolsos*:                    (+"+furtar+") + ("+agilidade+")     >Manipular Veneno:  (+"+manipularveneno+")\n  |>Abrir Fechaduras*:               (+"+abrirfechaduras+") + ("+agilidade+")\n  | *Modificador de Agilidade | ***Modificador de Personalidade";
}

switch(formValue) {
case "Tiefling (arquetipo)":
    this.getField("proficiencias armas").value = " -Armas c/c: espada longa, espada curta, estilete, adaga, ranseur e cimitarra.\n -Armas à distância: Adaga de arremesso, lança longa, besta e funda.\n -Poucos guerreiros tiefling carregam escudos, preferindo confiar em uma armadura escamada.";
    this.getField("dado de vida").value = "D7";
    switch(nivel){
        case 1: 
            automatic("d20", '', '', '1d10', "Tabela II", "+0", "+1", "+1", "+0")
            nivelconjurador = '0'
            dadosortetiefling = 'd3'
            nivelmaximomagia = '1'
            magiasconhecidastiefling = '3'
        break;
        case 2: 
            automatic("d20", "", "", "1d12", "Tabela II", "+1", "+1", "+1", "+0")
            nivelconjurador = '1'
            dadosortetiefling = 'd3'
            nivelmaximomagia = '1'
            magiasconhecidastiefling = '3'
        break;
        case 3:
            automatic("d20", '', '', "1d14", "Tabela II", "+2", "+2", "+1", "+1")
            nivelconjurador = '1'
            dadosortetiefling = 'd4'
            nivelmaximomagia = '2'
            magiasconhecidastiefling = '5'
        break;
        case 4:
            automatic("d20", '', '', '1d16', "Tabela II", "+2", "+2", "+2", "+1")
            nivelconjurador = '2'
            dadosortetiefling = 'd4'
            nivelmaximomagia = '2'
            magiasconhecidastiefling = '5'
        break;
        case 5:
            automatic("d20", '', '', "1d20", "Tabela II", "+3", "+3", "+2", "+1")
            nivelconjurador = '2'
            dadosortetiefling = 'd6'
            nivelmaximomagia = '3'
            magiasconhecidastiefling = '7'
        break;
        case 6:
            automatic("d20", "d14", "", "1d24", "Tabela II", "+4", "+4", "+2", "+2")
            nivelconjurador = '3'
            dadosortetiefling = 'd6'
            nivelmaximomagia = '3'
            magiasconhecidastiefling = '7'
        break;
        case 7:
            automatic("d20", "d16", '', "1d30", "Tabela II", "+5", "+4", "+3", "+2")
            nivelconjurador = '3'
            dadosortetiefling = 'd8'
            nivelmaximomagia = '4'
            magiasconhecidastiefling = '9'
        break;
        case 8:
            automatic("d20", "d20", '', "d30+2", "Tabela II", "+5", "+5", "+3", "+2")
            nivelconjurador = '4'
            dadosortetiefling = 'd8'
            nivelmaximomagia = '4'
            magiasconhecidastiefling = '9'
        break;
        case 9:
            automatic("d20", "d20", "", "d30+4", "Tabela II", "+6", "+5", "+3", "+3")
            nivelconjurador = '4'
            dadosortetiefling = 'd10'
            nivelmaximomagia = '5'
            magiasconhecidastiefling = '12'
        break;
        case 10:
            automatic("d20", "d20", "", "d30+6", "Tabela II", "+7", "+6", "+4", "+3")
            nivelconjurador = '5'
            dadosortetiefling = 'd10'
            nivelmaximomagia = '5'
            magiasconhecidastiefling = '12'
        break;
    }
    this.getField("esp classe 1").value = " -Combate com Duas Armas: É considerado ter uma Agilidade mínima de 18 ao lutar com duas armas. Ele rola apenas com -1 dado para seu segundo ataque. Pode lutar com duas armas desde que sua arma secundária seja mais leve.\n\n -Magia e Nível de Conjurador: O nível de conjurador é a metade de seu nível de classe (arredondado para baixo). No primeiro nível, uma das três magias conhecidas deve ser a versão arcana da magia escuridão, que podem conjurar sem falha crítica ou corrupção.\n  >Nível de Conjurador: " + nivelconjurador + "\n\n -Sorte do Tiefling: Tieflings recebem um dado de sorte como ladrões. O tiefling não recupera a sorte gasta diariamente mas precisa construir sua própria sorte festejando e apostando.  Pode rolar um d20 na sua tabela de sorte quando adequado. A rolagem é modificada pelo seu bônus de Sorte e pode ganhar +1 na rolagem para cada 50 PO investidos. Uma rolagem de 1 natural não pode ser altearada.\n   >Dado de Sorte: " + dadosortetiefling + "\n\n  |>Magias Conhecidas: " + magiasconhecidastiefling + " (" + inteligencia + ")\n  |>Nível Máximo da Magia: " + nivelmaximomagia;  
break;
case "Blood Witch":
    this.getField("proficiencias armas").value = " -Armas c/c: adaga, espada longa, foice, espada curta e bastão.\n -Armas à distância: arco longo e arco curto.\n -Raramente usam armaduras, pois isso dificulta a conjuração de feitiços.";
    this.getField("dado de vida").value = "D4";
    switch(nivel){
        case 1: 
            automatic("d20", '', '', '1d8', "Tabela I", "+0", "+0", "+1", "+1")
            nivelmaximomagia = '1'
            magiasconhecidasbw = '2'
        break;
        case 2: 
            automatic("d20", "", "", "1d8", "Tabela I", "+1", "+1", "+2", "+1")
            nivelmaximomagia = '1'
            magiasconhecidasbw = '3'
        break;
        case 3:
            automatic("d20", '', '', "d10", "Tabela I", "+1", "+1", "+2", "+2")
            nivelmaximomagia = '2'
            magiasconhecidasbw = '4'
        break;
        case 4:
            automatic("d20", '', '', 'd10', "Tabela I", "+2", "+1", "+3", "+2")
            nivelmaximomagia = '2'
            magiasconhecidasbw = '5'
        break;
        case 5:
            automatic("d20", 'd14', '', "d12", "Tabela I", "+2", "+2", "+3", "+3")
            nivelmaximomagia = '3'
            magiasconhecidasbw = '6'
        break;
        case 6:
            automatic("d20", "d16", "", "d12", "Tabela I", "+3", "+2", "+4", "+3")
            nivelmaximomagia = '3'
            magiasconhecidasbw = '7'
        break;
        case 7:
            automatic("d20", "d16", '', "d14", "Tabela I", "+3", "+2", "+4", "+4")
            nivelmaximomagia = '4'
            magiasconhecidasbw = '8'
        break;
        case 8:
            automatic("d20", "d20", '', "d14", "Tabela I", "+4", "+3", "+5", "+4")
            nivelmaximomagia = '4'
            magiasconhecidasbw = '9'
        break;
        case 9:
            automatic("d20", "d20", "", "d16", "Tabela I", "+4", "+3", "+5", "+5")
            nivelmaximomagia = '5'
            magiasconhecidasbw = '10'
        break;
        case 10:
            automatic("d20", "d20", "", "d16", "Tabela I", "+5", "+3", "+6", "+5")
            nivelmaximomagia = '5'
            magiasconhecidasbw = '12'
        break;
    }
    this.getField("esp classe 1").value = "  -Poção de Sangue: Sacrifica 1d4 PV para fazer uma poção em 6 horas + 100 po. Ela recupera 2d4 PVs. Pode ter até seu mod. de vit. em poções. Para outros, causa 2d4 de dano. Se alguém beber a poção, ela passa em um teste de Fort. CD 12 ou sofrerá 2d4 de dano na Vitalidade (temporário).\n\n  -Caminho de Sangue: Atravessa um ser vivo e com sangue vermelho de tamanho igual ou maior que o seu. Role 1d20 + nível + mod. de Vit - Armadura. É uma ação de movimento.\n\n  -Coagulação: Faz o sangue de um alvo engrossar. O alvo deve passar por um teste de Fort. CD 10 + nível + Mod. Vitalidade. Fracasso: Seu movimento é reduzido em 1/4 e realiza rolagens físicas com 1d menor. Este efeito dura por um número de rodadas igual ao nível da Bruxa +1d4.\n\n  -Familiares: Ao conjurar Encontrar Familiar, ele surge a partir de um alvo morto. Esta criatura ataca com pseudópodes, tendo +5 em testes de esconder-se e sofre metade do dano de ataques físicos.\n\n  -Infligir Ferimentos:  Toca e extrai sangue de um alvo vivo e com sangue vermelho. Role 1d20 + mod de Vit. + nível. O Alvo realiza um teste de Fort. (CD igual à rolagem) para sofrer metade do dano.\n\n  -Magias: Deve fazer queimarcana ou extrair sangue vermelho de alvos vivos. Caso contrário, role 1d20 + mod. Vit. - 1d5. Ao extrair o sangue, o alvo faz um teste de Fort. CD 10 + nível + mod. Vit. Falha: é extraído 3d6 + 1/2 nível em PV. Sucesso: a bruxa sofre 2d4 de dano. Conjuração: 1d20 + queimarcana (Ou Sangue) + mod. Vit.; Um 2 ou 3 na conjuração é tratado como um 1.\n\n  |>Magias Conhecidas: " + magiasconhecidasbw + " + (" + inteligencia + ")\n  |>Nível Máximo da Magia: " + nivelmaximomagia;
break;
case "Necromante":
        this.getField("proficiencias armas").value = " -Armas c/c: adagas, espadas curtas, espadas longas, cacetes, maças, machados de mão e cajados.\n -Armas à distância: fundas.\n -Necromantes raramente usam armaduras, pois isso dificulta sua conjuração de feitiços.";
        this.getField("dado de vida").value = "D5";
        switch(nivel){
            case 1: 
                automatic("d20", '', '', '1d6', "Tabela I", "+1", "+1", "+1", "+1")
                nivelmaximomagia = '1'
                magiasconhecidasnm = '4'
            break;
            case 2: 
                automatic("d20", "", "", "1d8", "Tabela I", "+1", "+1", "+1", "+1")
                nivelmaximomagia = '1'
                magiasconhecidasnm = '5'
            break;
            case 3:
                automatic("d20", '', '', "d8", "Tabela I", "+1", "+1", "+2", "+2")
                nivelmaximomagia = '2'
                magiasconhecidasnm = '6'
            break;
            case 4:
                automatic("d20", '', '', 'd10', "Tabela I", "+2", "+2", "+2", "+2")
                nivelmaximomagia = '2'
                magiasconhecidasnm = '7'
            break;
            case 5:
                automatic("d20", 'd14', '', "d10", "Tabela I", "+2", "+2", "+3", "+3")
                nivelmaximomagia = '3'
                magiasconhecidasnm = '8'
            break;
            case 6:
                automatic("d20", "d16", "", "d12", "Tabela I", "+3", "+2", "+3", "+4")
                nivelmaximomagia = '3'
                magiasconhecidasnm = '9'
            break;
            case 7:
                automatic("d20", "d16", '', "d12", "Tabela I", "+3", "+3", "+3", "+4")
                nivelmaximomagia = '4'
                magiasconhecidasnm = '10'
            break;
            case 8:
                automatic("d20", "d20", '', "d14", "Tabela I", "+4", "+3", "+4", "+5")
                nivelmaximomagia = '4'
                magiasconhecidasnm = '11'
            break;
            case 9:
                automatic("d20", "d20", "", "d14", "Tabela I", "+4", "+3", "+4", "+5")
                nivelmaximomagia = '5'
                magiasconhecidasnm = '12'
            break;
            case 10:
                automatic("d20", "d20", "d14", "d16", "Tabela I", "+5", "+4", "+5", "+6")
                nivelmaximomagia = '5'
                magiasconhecidasnm = '13'
            break;
        }
        this.getField("esp classe 1").value = " -Nível de conjurador: Igual ao seu nível de classe. ( " + nivel + ")\n\n -Magia necromântica: Há algumas magias com exceções para necromantes\n\n -Corrompido Vivo: Ao rolar corrupção para um necromante, use a tabela alternativa. \n\n -Sorte: Se aplica às rolagens de corrupção e magia mercurial.\n\n -Magias roubadas de clérigos: Trate resultado de 1 como: Perdido, falha e pior! Role 1d6 + mod. Sorte: 0 ou menos: Corrupção + Marca Patrononal + Falha Crítica; 1-3 corrupção; 4: marca  patronal (ou corrupção); 5+ Falha Crítica. Resultados 1 ou 2 abaixo do primeiro sucesso resulta em falha, mas não é perdido. Resultados entre 1 e esse valor resultam em falha e o magia é perdida.\n\n -Língua dos Mortos: Pode realizar ritual com o resto mortal de um alvo para se comunicar com ele.\n\n -Servidão Pós Vida: Pode realizar queimarcana ou sacrificar força vital de outros seres vivos para extender a duração de suas criaturas em 1 dia para cada ponto queimado. Ao ser queimado 10 pontos de uma vez só, aquela criatura vira permanente.\n\n  |>Magias Conhecidas: " + magiasconhecidasnm + " + (" + inteligencia + ")\n  |>Nível Máximo da Magia: " + nivelmaximomagia;
    break;
    case "Paladino":
        this.getField("proficiencias armas").value = " -Treinado nas armas usadas pelos seguidores de seu deus.\n -Armas c/c: machado de guerra, clava, adaga, machadinha, espada longa, maça, espada curta, espada de duas mãos e martelo de guerra.\n -Armas à distância: lança, azagaia, arco longo, arco curto, besta e funda.\n -Podem usar qualquer armadura e suas jogadas de conjuração não são prejudicadas pelo seu uso.";
        this.getField("dado de vida").value = "D10";
        switch(nivel){
            case 1: 
                automatic("d20", '', '', '1d8', "Tabela III", "+1", "+1", "+1", "+1")
                nivelmaximomagia = '0'
                magiasconhecidas = '0'
                dadodivino = 'd3'
            break;
            case 2: 
                automatic("d20", "", "", "1d8", "Tabela III", "+1", "+1", "+1", "+1")
                nivelmaximomagia = '1'
                magiasconhecidas = '1'
                dadodivino = 'd4'
            break;
            case 3:
                automatic("d20", '', '', "1d10", "Tabela III", "+2", "+1", "+2", "+1")
                nivelmaximomagia = '1'
                magiasconhecidas = '1'
                dadodivino = 'd5'
            break;
            case 4:
                automatic("d20", '', '', '1d10', "Tabela III", "+2", "+2", "+2", "+2")
                nivelmaximomagia = '2'
                magiasconhecidas = '2'
                dadodivino = 'd6'
            break;
            case 5:
                automatic("d20", 'd14', '', "1d12", "Tabela IV", "+3", "+2", "+3", "+2")
                nivelmaximomagia = '2'
                magiasconhecidas = '3'
                dadodivino = 'd7'
            break;
            case 6:
                automatic("d20", "d16", "", "1d12", "Tabela IV", "+3", "+2", "+4", "+2")
                nivelmaximomagia = '2'
                magiasconhecidas = '4'
                dadodivino = 'd8'
            break;
            case 7:
                automatic("d20", "d20", '', "1d14", "Tabela IV", "+4", "+3", "+4", "+3")
                nivelmaximomagia = '3'
                magiasconhecidas = '4'
                dadodivino = 'd10'
            break;
            case 8:
                automatic("d20", "d20", '', "1d14", "Tabela V", "+4", "+3", "+5", "+3")
                nivelmaximomagia = '3'
                magiasconhecidas = '5'
                dadodivino = 'd10+1'
            break;
            case 9:
                automatic("d20", "d20", "", "1d16", "Tabela V", "+5", "+3", "+5", "+3")
                nivelmaximomagia = '3'
                magiasconhecidas = '12'
                dadodivino = 'd10+2'
            break;
            case 10:
                automatic("d20", "d20", "d14", "1d16", "Tabela V", "+6", "+4", "+6", "+4")
                nivelmaximomagia = '4'
                magiasconhecidas = '6'
                dadodivino = 'd10+3'
            break;
        }
        this.getField("esp classe 1").value = " -Golpe Divino: No lugar de um bônus de ataque regular, o paladino usa seu Dado de Golpe Divino às jogadas de ataque e dano àqueles considerados profanos.\n   >Dado de Golpe Divino: " + dadodivino +"\n\n -Feitos Sagrados: d20 + nível + mod. de pers. + mod. de sorte. Pode Gerar Desaprovação Divina.\n\n  >Toque de Cura: realiza Cura divina baseada no DV e alinhamento do alvo (igual, adjacente oposto)\n       12: |2dv|1dv|1dv|  14: |3dv|2dv|1dv|  20: |4dv|3dv|2dv|  22+: |5dv|4dv|3dv|\n\n  >Incutir Coragem: Institui coragem nos outros ao seu redor. Essa habilidade concede um bônus em testes de resistência contra efeitos de medo. A duração é de 1 min + 1 min por nível do paladino.\n       12: +1/um alvo | 14: +2/1d3 alvos | 20: +3/1d4 alvos | 22: +4/1d6 alvos | 25+: +5/1d7 alvos.\n\n  >Causar Medo: Causa medo nos profanos de DV igual ou menor ao seu. Devem fazer um teste de Vontade contra seu resultado ou fugir por 1 rodada + 1 rodada por nível do paladino.\n       12: 1 alvo | 14: 1d3 alvos | 20: 1d5 alvos | 22: 1d7 alvos | 25+: 1d8 alvos.\n\n -Nível de Conjurador: O nível de conjurador é igual ao nível de classe, e Usam seu mod. de personalidade para lançar magias Divinas, sofrendo também desaprovações.\n\n  |>Magias Conhecidas: " + magiasconhecidas + " + (" + inteligencia + ")\n  |>Nível Máximo da Magia: " + nivelmaximomagia;
    break;
    case "Houndmaster":
        this.getField("proficiencias armas").value = " -Armas c/c: adaga, laço, rede, chicote, clava, cajado, machadinha.\n -Mestres de cães podem usar armaduras acolchoadas, de couro, de couro pregueado e de peles.";
        this.getField("dado de vida").value = "D8";
        switch(nivel){
            case 1: 
                automatic("d20", '', '', '1d4', "Tabela M", "+1", "+1", "+1", "+1")
                dadomordida = 'd4'
                comandos = '3'
            break;
            case 2: 
                automatic("d20", "", "", "1d5", "Tabela M", "+1", "+1", "+1", "+1")
                dadomordida = 'd4'
                comandos = '4'
            break;
            case 3:
                automatic("d20", '', '', "1d6", "Tabela M", "+2", "+1", "+1", "+1")
                dadomordida = 'd5'
                comandos = '5'
            break;
            case 4:
                automatic("d20", 'd14', '', '1d7', "Tabela M", "+3", "+2", "+2", "+2")
                dadomordida = 'd5'
                comandos = '6'
            break;
            case 5:
                automatic("d20", 'd16', '', "1d8", "Tabela M", "+3", "+2", "+2", "+2")
                dadomordida = 'd6'
                comandos = '7'
            break;
            case 6:
                automatic("d20", "d20", "", "1d10", "Tabela M", "+4", "+2", "+2", "+2")
                dadomordida = 'd6'
                comandos = '8'
            break;
            case 7:
                automatic("d20", "d20", '', "1d12", "Tabela M", "+5", "+3", "+3", "+3")
                dadomordida = 'd7'
                comandos = '9'
            break;
            case 8:
                automatic("d20", "d20", 'd14', "1d14", "Tabela M", "+5", "+3", "+3", "+3")
                dadomordida = 'd7'
                comandos = '10'
            break;
            case 9:
                automatic("d20", "d20", "d16", "1d16", "Tabela M", "+6", "+3", "+3", "+3")
                dadomordida = 'd8'
                comandos = '11'
            break;
            case 10:
                automatic("d20", "d20", "d20", "1d20", "Tabela M", "+7", "+4", "+4", "+4")
                dadomordida = 'd10'
                comandos = '12'
            break;
        }
        this.getField("esp classe 1").value = "  -Cães de Caça: Começa com um cão no nível 1 e pode controlar até dois para cada dado de ação. Ao controlar um cão adicional dessa maneira sofre uma penalidade de -1d no dado de ação mas rola um dado adicional e pode dar comandos diferentes para cada cão.\n  >Dano de Mordida: " + dadomordida + "\n\n  >Sorte: Aplica seu bônus de Sorte a um dos seus cães. Se morrer, o bônus é aplicado a um novo cão.\n\n  >Ataques:  Use seu dado de ação para atacar ou emitir comando. Rola na Tabela de Críticos M.\n\n  >Guarda: Pode fazer um teste de Sorte sempre que seu grupo seria surpreendido por inimigos.\n\n -Encanto Canino: Ganhe uma versão do feitiço encantar pessoa que afeta apenas caninos e leva um dia inteiro para encantar. Role 1d20 + personalidade + nível. O feitiço pode ser lançado em outras espécies Cânis, mas com de -1d. A duração máxima do feitiço é de um dia por nível de classe.\n\n -Comandos: No nível 1, os cães conhecem o comando de ataque e mais 2 comandos, além de mais um para cada ponto do bônus de Personalidade. A cada nível, podem aprender um comando adicional. \n  >Comandos Conhecidos: " + comandos + " (" + personalidade + ")\n\n| Ataque | Derrubar | Buscar | Dar a Pata | Ataque à Jugular | Proteger | Uivar | Ameaçar | Rastrear |\n| Lamber Feridas | Ataque em Grupo | Despedaçar.";
    break;
    case "Bardo":
        this.getField("proficiencias armas").value = " -Armas c/c: Porrete, adaga, bordão, machado de mão e lança.\n -À distância: Lança, adaga, arco curto, besta e funda.\n -O bardo é proficiente em qualquer armadura e escudo. As penalidades de verificação de armadura não afetam os talentos bárdicos.";
        this.getField("dado de vida").value = "D6";
        switch(nivel){
            case 1: 
                automatic("d20", '', '', '1d6', "Tabela I", "+0", "+1", "+0", "+1")
                dadoconhecimento = 'd14'
                nivelmaximomagia = '1'
                magiasconhecidas = '1'
            break;
            case 2: 
                automatic("d20", "", "", "1d8", "Tabela I", "+1", "+1", "+0", "+1")
                dadoconhecimento = 'd14'
                nivelmaximomagia = '1'
                magiasconhecidas = '2'
            break;
            case 3:
                automatic("d20", '', '', "1d8", "Tabela II", "+1", "+2", "+1", "+2")
                dadoconhecimento = 'd16'
                nivelmaximomagia = '1'
                magiasconhecidas = '2'
            break;
            case 4:
                automatic("d20", '', '', '1d10', "Tabela II", "+2", "+2", "+1", "+2")
                dadoconhecimento = 'd16'
                nivelmaximomagia = '2'
                magiasconhecidas = '3'
            break;
            case 5:
                automatic("d20", '', '', "1d12", "Tabela II", "+2", "+2", "+1", "+3")
                dadoconhecimento = 'd20'
                nivelmaximomagia = '2'
                magiasconhecidas = '3'
            break;
            case 6:
                automatic("d20", "d14", "", "1d14", "Tabela II", "+3", "+3", "+2", "+4")
                dadoconhecimento = 'd24'
                nivelmaximomagia = '2'
                magiasconhecidas = '4'
            break;
            case 7:
                automatic("d20", "d16", '', "1d16", "Tabela II", "+4", "+3", "+2", "+4")
                dadoconhecimento = 'd30'
                nivelmaximomagia = '3'
                magiasconhecidas = '4'
            break;
            case 8:
                automatic("d20", "d20", '', "1d20", "Tabela II", "+5", "+3", "+2", "+5")
                dadoconhecimento = 'd30 + 1'
                nivelmaximomagia = '3'
                magiasconhecidas = '5'
            break;
            case 9:
                automatic("d20", "d20", "", "1d24", "Tabela II", "+6", "+4", "+2", "+5")
                dadoconhecimento = 'd30 + 2'
                nivelmaximomagia = '3'
                magiasconhecidas = '5'
            break;
            case 10:
                automatic("d20", "d20", "", "1d30", "Tabela II", "+7", "+4", "+3", "+6")
                dadoconhecimento = 'd30 + 3'
                nivelmaximomagia = '4'
                magiasconhecidas = '6'
            break;
        }
        this.getField("esp classe 1").value = " -Magia: Adquirem suas magias de forma aleatória por nível. A conjuração é: d20 + mod. pers + nível.\n  |>Magias Conhecidas: " + magiasconhecidas + " + (" + inteligencia + ")\n  |>Nível Máximo da Magia: " + nivelmaximomagia +"\n\n -Feitos de Performance: Pode escolher um tipo de performance no nível 1 e a cada nível ímpar, ganha outro tipo. Performances auditivas devem ser ouvidas pelo alvo e visuais exigem que o público consiga vê-las. A rolagem é: D20 + Nível + Modificador Apropriado (performance).\n\n |>Chamado às Armas (visual/audivel)   >Lâmina Dançante (visual)      >Lágrimas e Riso (visual/auvidel)\n |>Duelista (visual)                                 >Encantador (audivel)          \n |>A Marca (visual)                                >Instigador  (visual/audivel)\n\n -Fama: A partir do nível 2, pode realizar shows para aumentar ou diminuir sua fama (uma por mês).\n\n -Conhecimento: Usado para verificações de conhecimento fora das habilidades existentes do bardo, histórias contadas. A rolagem de dados é Dado de Conhecimento + Nível.\n  >Dado de Conhecimento: " + dadoconhecimento + "\n\n -Sorte: No nível 1, deve escolher se o Mod. Sorte influencia Conhecimento ou suas Performances.";
        
    break;
    case "Witch":
        this.getField("proficiencias armas").value = " -Armas c/c: adagas, cacetes, foices e cajados.\n -Armas à distância: fundas.\n -A maioria das bruxas considera a armadura constritiva e prefere não usá-la. Uma bruxa aventureira pode optar por usar armaduras não metálicas se necessário.";
        this.getField("dado de vida").value = "D6";
        switch(nivel){
            case 1: 
                automatic("d20", '', '', '1d6', "Tabela I", "+0", "+1", "+0", "+1")
                magiasconhecidas1 = '3'
                magiasconhecidas2 = '-'
                magiasconhecidas3 = '-'
                magiasconhecidas4 = '-'
                magiasconhecidas5 = '-'
            break;
            case 2: 
                automatic("d20", "", "", "1d6", "Tabela I", "+0", "+1", "+0", "+1")
                magiasconhecidas1 = '4'
                magiasconhecidas2 = '-'
                magiasconhecidas3 = '-'
                magiasconhecidas4 = '-'
                magiasconhecidas5 = '-'
            break;
            case 3:
                automatic("d20", '', '', "1d8", "Tabela I", "+1", "+1", "+1", "+2")
                magiasconhecidas1 = '4'
                magiasconhecidas2 = '2'
                magiasconhecidas3 = '-'
                magiasconhecidas4 = '-'
                magiasconhecidas5 = '-'
            break;
            case 4:
                automatic("d20", '', '', '1d8', "Tabela I", "+1", "+2", "+1", "+2")
                magiasconhecidas1 = '5'
                magiasconhecidas2 = '3'
                magiasconhecidas3 = '-'
                magiasconhecidas4 = '-'
                magiasconhecidas5 = '-'
            break;
            case 5:
                automatic("d20", 'd14', '', "1d10", "Tabela I", "+2", "+2", "+1", "+3")
                magiasconhecidas1 = '5'
                magiasconhecidas2 = '4'
                magiasconhecidas3 = '1'
                magiasconhecidas4 = '-'
                magiasconhecidas5 = '-'
            break;
            case 6:
                automatic("d20", "d16", "", "1d10", "Tabela I", "+2", "+2", "+2", "+4")
                magiasconhecidas1 = '6'
                magiasconhecidas2 = '4'
                magiasconhecidas3 = '2'
                magiasconhecidas4 = '-'
                magiasconhecidas5 = '-'
            break;
            case 7:
                automatic("d20", "d20", '', "1d12", "Tabela I", "+3", "+3", "+2", "+4")
                magiasconhecidas1 = '6'
                magiasconhecidas2 = '5'
                magiasconhecidas3 = '3'
                magiasconhecidas4 = '1'
                magiasconhecidas5 = '-'
            break;
            case 8:
                automatic("d20", "d20", '', "1d12", "Tabela I", "+3", "+3", "+2", "+5")
                magiasconhecidas1 = '7'
                magiasconhecidas2 = '5'
                magiasconhecidas3 = '4'
                magiasconhecidas4 = '2'
                magiasconhecidas5 = '-'
            break;
            case 9:
                automatic("d20", "d20", "", "1d14", "Tabela I", "+4", "+3", "+3", "+5")
                magiasconhecidas1 = '7'
                magiasconhecidas2 = '6'
                magiasconhecidas3 = '4'
                magiasconhecidas4 = '3'
                magiasconhecidas5 = '1'
            break;
            case 10:
                automatic("d20", "d20", "d14", "1d14", "Tabela I", "+4", "+4", "+3", "+6")
                magiasconhecidas1 = '8'
                magiasconhecidas2 = '6'
                magiasconhecidas3 = '5'
                magiasconhecidas4 = '4'
                magiasconhecidas5 = '2'
            break;
        }
        this.getField("esp classe 1").value = " -Magias: Rolam: 1d20 + Mod. Pers. + Nível. Além disso, não sofrem a penalidade de -2 ao usar magias clericais e não sofrem desaprovações clericais, mas corrupções. Podem realizar queimarcana.  O Modificador de Sorte se aplica à conjuração de magias baseadas na Natureza.\n\n -Preparar Poções: Consegue conjurar Preparar Poções. O tempo da produção é reduzido ao meio.\n\n -Adivinhadora: Olhe o futuro próximo de um alvo e possíveis escolhas que virá enfrentar. Ao Conjurar: Segunda Visão, Sentido do Mago e Consultar Espírito, inclua seu Mod. de Sorte à rolagem.\n\n -Sedutora: Pode usar seu charme para influenciar reações dos outros ou intimidar. Adicione seu mod. de Personalidade quando sedução ou intimidação são usadas para obter os resultados desejados.\n\n -Curandeira: Pode curar seres vivos. A verificação de feitiço é 1d20 + mod. de Pers. + nível. Falhar indica que não funcionou e não pode ser tentado novamente por 1d24 hrs. As fases da lua ditam a quantidade de cura.\n\nNova|Crescente|Cheia|Minguante|Negra\n|12: 0dv|1dv|2dv|1dv|Falha\n|14: 1dv|2dv|3dv|2dv|0dv\n|20: 2dv|3dv|4dv|3dv|1dv\n|22: 3dv|4dv|5dv|4dv|2dv\n\n|>Magias Conhecidas: \n Nível 1: " + magiasconhecidas1 + "     | Nível 2: " + magiasconhecidas2 + "     | Nível 3: " + magiasconhecidas3 + "     | Nível 4: " + magiasconhecidas4 + "     | Nível 5: " + magiasconhecidas5;;
    break;
    case "Shadowdancer":
        this.getField("proficiencias armas").value = " -Armas c/c: rede com farpas, cassetete, adaga, espada longa, rede, espada curta, foice, corrente espinhada.\n -Armas à distância: zarabatana, bolas, dardo, besta de mão, besta, arco curto e funda.\n -Shadowdancers são cuidadosos em sua escolha de armaduras, pois ela afeta o uso de suas habilidades.";
        this.getField("dado de vida").value = "D6" ;
        switch(nivel){
            case 1: 
                automatic("d20", '', '', '1d10', "Tabela II", "+0", "+1", "+0", "+1")
            break;
            case 2: 
                automatic("d20", "", "", "1d12", "Tabela II", "+1", "+1", "+0", "+1")
            break;
            case 3:
                automatic("d20", '', '', "1d14", "Tabela II", "+2", "+1", "+1", "+2")
            break;
            case 4:
                automatic("d20", '', '', '1d16', "Tabela II", "+2", "+2", "+1", "+2")
            break;
            case 5:
                automatic("d20", '', '', "1d20", "Tabela II", "+3", "+2", "+1", "+3")
            break;
            case 6:
                automatic("d20", "d14", "", "1d24", "Tabela II", "+4", "+3", "+2", "+3")
            break;
            case 7:
                automatic("d20", "d16", '', "1d30", "Tabela II", "+4", "+3", "+2", "+4")
            break;
            case 8:
                automatic("d20", "d20", '', "1d30+2", "Tabela II", "+5", "+3", "+2", "+5")
            break;
            case 9:
                automatic("d20", "d20", "", "1d30+4", "Tabela II", "+6", "+3", "+3", "+5")
            break;
            case 10:
                automatic("d20", "d20", "", "1d30+6", "Tabela II", "+7", "+4", "+5", "+6")
            break;
        }
        this.getField("esp classe 1").value = " -Esconder-se à Vista: Pode se esconder nas sombras mesmo sendo observado, desde que esteja a até 3m de uma área pouco iluminada. É capaz de se esconder em áreas abertas mas que tenham sombra.\n\n -Treinamento de Ladrão: Selecione 4 habilidades do Ladrão (Evolução do Assassino) no nível 1.\n\n -Habilidades Arcanas: São conjurados rolando 1d20 + Nível + Sorte. Não pode usar queimarcana e a armadura afeta os testes. Estas habilidades são consideradas ações de ataque. Habilidades:\n  >Truque  \n  >Escuridão. Se rolar 1 em escuridão, há uma chance de 50% de sofrer corrupção: 1-2) Menor; 3-5) Maior; 6) Grandiosa. Rolar 1 resulta na perda da habilidade de escuridão por 24h.\n\n -Visão no Escuro: Permite que veja na escuridão. Role 1d20 + Nível + Sorte. Esta habilidade é uma ação de movimento.\n\n -Defesa das Sombras: É capaz de envolver-se na escuridão para ganhar proteção extra. Usar esta habilidade é uma ação de ataque.\n\n -Salto Sombrio: Pode se transportar para outro ponto escuro ou de uma sombra nas proximidades. Role 1d20 + Nível + Sorte. A armadura afeta esta habilidade. Esta é uma ação de movimento.";
    break;
    case "Scout":
        this.getField("proficiencias armas").value = " -Armas c/c: porrete, adaga, garrote, espada longa, espada curta e cajado.\n -Armas à distância: zarabatana, besta, dardo, funda.\n -Scouts são cuidadosos em sua escolha de armaduras, pois ela afeta o uso de suas habilidades.";
        this.getField("dado de vida").value = "D6";
        switch(nivel){
            case 1: 
                automatic("d20", '', '', '1d10', "Tabela II", "+0", "+1", "+0", "+1")
                habilidadesScout ('D3', '1', '1', '3', '3', '3', '3', '3', '3', '0')
            break;
            case 2: 
                automatic("d20", "", "", "1d12", "Tabela II", "+1", "+1", "+0", "+1")
                habilidadesScout ('D4', '3', '3', '5', '5', '5', '5', '5', '5', '1')
            break;
            case 3:
                automatic("d20", '', '', "1d14", "Tabela II", "+2", "+1", "+1", "+2")
                habilidadesScout ('D5', '5', '5', '7', '7', '7', '7', '7', '7', '2')
            break;
            case 4:
                automatic("d20", '', '', '1d16', "Tabela II", "+2", "+2", "+1", "+2")
                habilidadesScout ('D6', '7', '7', '8', '8', '8', '8', '8', '8', '3')
            break;
            case 5:
                automatic("d20", '', '', "1d20", "Tabela II", "+3", "+2", "+1", "+3")
                habilidadesScout ('D7', '8', '8', '9', '9', '9', '9', '9', '9', '4')
            break;
            case 6:
                automatic("d20", "d14", "", "1d24", "Tabela II", "+4", "+3", "+2", "+3")
                habilidadesScout ('D8', '9', '9', '11', '11', '11', '11', '11', '11', '5')
            break;
            case 7:
                automatic("d20", "d16", '', "1d30", "Tabela II", "+4", "+3", "+2", "+4")
                habilidadesScout ('D10', '10', '10', '12', '12', '12', '12', '12', '12', '6')
            break;
            case 8:
                automatic("d20", "d20", '', "1d30+2", "Tabela II", "+5", "+3", "+2", "+5")
                habilidadesScout ('D12', '11', '11', '13', '13', '13', '13', '13', '13', '7')
            break;
            case 9:
                automatic("d20", "d20", "", "1d30+4", "Tabela II", "+6", "+3", "+3", "+5")
                habilidadesScout ('D14', '12', '12', '14', '14', '14', '14', '14', '14', '8')
            break;
            case 10:
                automatic("d20", "d20", "", "1d30+6", "Tabela II", "+7", "+4", "+5", "+6")
                habilidadesScout ('D16','13', '13', '15', '15', '15', '15', '15', '15', '9')
            break;
        }
    break;
    case "Monk":
        this.getField("proficiencias armas").value = " -Armas c/c: clava, adaga e bastão.\n -Armas à distância: zarabatana,  dardo e lança.\n -Dependendo de qual alinhamento um monge seleciona, eles recebem proficiência adicional em uma única arma.\n -Kendo: Espada Longa | Kyudo: Arco Longo | Anatsuken: Garrote\n -Possuem preferência em não usar armaduras";
        this.getField("dado de vida").value = "D8";
        switch(nivel){
            case 1: 
                automatic("D20", '', '', '+1d8', 'Tabela II', '+0', '+1', "+1", "+1")
            break;
            case 2: 
                automatic("D20", '', '', '1d8', 'Tabela II', '+1', '+1', "+1", "+1")
            break;
            case 3:
                automatic("D20", '', '', '1d10', 'Tabela II', '+2', '+1', "+1", "+1")
            break;
            case 4:
                automatic("D20", '', '', '1d10', 'Tabela II', '+2', '+2', "+2", "+2")
            break;
            case 5:
                automatic("D20", 'D14', '', '1d12', 'Tabela II', '+3', '+2', "+2", "+2")
            break;
            case 6:
                automatic("D20", 'D16', '', '1d12', 'Tabela II', '+4', '+2', "+2", "+2")
            break;
            case 7:
                automatic("D20", 'D20', '', '1d14', 'Tabela II', '+5', '+3', "+3", "+3")
            break;
            case 8:
                automatic("D20", 'D20', '', '1d14', 'Tabela II', '+5', '+3', "+3", "+3")
            break;
            case 9:
                automatic("D20", 'D20', '', '1d16', 'Tabela II', '+6', '+3', "+3", "+3")
            break;
            case 10:
                automatic("D20", 'D20', 'D14', '1d16', 'Tabela II', '+7', '+4', "+4", "+4")
            break;
        }
            switch(alinhamento){
                case "Ordeiro":
                    switch(nivel){
                        case 1:
                            habilidadesMonk ("1d3", "1d12", "Tabela III", "Kendo: A Arte da Espada", "Espadas Longas", "O Caminho do Samurai", '3', '1', '1', '3', '0', '1', '0')
                        break;
                        case 2:
                            habilidadesMonk ("1d4", "1d14", "Tabela III", "Kendo: A Arte da Espada", "Espadas Longas", "O Caminho do Samurai",'5', '3', '3', '5', '1', '3', '1')
                        break;
                        case 3:
                            habilidadesMonk ("1d4", "1d16", "Tabela III", "Kendo: A Arte da Espada", "Espadas Longas", "O Caminho do Samurai", '7', '5', '5', '7', '2', '5', '2')
                        break;
                        case 4:
                            habilidadesMonk ("1d5", "1d20", "Tabela IV", "Kendo: A Arte da Espada", "Espadas Longas", "O Caminho do Samurai",'8', '7', '7', '8', '3', '7', '3')
                        break;
                        case 5:
                            habilidadesMonk ("1d6", "1d24", "Tabela IV", "Kendo: A Arte da Espada", "Espadas Longas", "O Caminho do Samurai",'9', '8', '8', '9', '4', '8', '4')
                        break;
                        case 6:
                            habilidadesMonk ("1d6", "1d30", "Tabela IV", "Kendo: A Arte da Espada", "Espadas Longas", "O Caminho do Samurai",'11', '9', '9', '11', '5', '9', '5')
                        break;
                        case 7:
                            habilidadesMonk ("1d7", "1d30", "Tabela V", "Kendo: A Arte da Espada", "Espadas Longas", "O Caminho do Samurai",'12', '10', '10', '12', '6', '10', '6')
                        break;
                        case 8:
                            habilidadesMonk ("1d8", "2d20", "Tabela V", "Kendo: A Arte da Espada", "Espadas Longas", "O Caminho do Samurai",'13', '11', '11', '13', '7', '11', '7')
                        break;
                        case 9:
                            habilidadesMonk ("1d8", "2d20", "Tabela V", "Kendo: A Arte da Espada", "Espadas Longas", "O Caminho do Samurai",'14', '12', '12', '14', '8', '12', '8')
                        break;
                        case 10:
                            habilidadesMonk ("1d10", "2d20", "Tabela V", "Kendo: A Arte da Espada", "Espadas Longas", "O Caminho do Samurai",'15', '13', '13', '15', '9', '13', '9')
                        break;

                        default:
                            this.getField("esp classe 1").value = "";
                        break;
                    }
                break;
                case "Neutro":
                    switch(nivel){
                        case 1:
                            habilidadesMonk ("1d3", "1d12", "Tabela III", "Kyudo: A Arte do Arco", "Arcos Longos", "O Caminho do Sensei", '1', '3', '3', '0', '1', '0', '1')
                        break;
                        case 2:
                            habilidadesMonk ("1d4", "1d14", "Tabela III", "Kyudo: A Arte do Arco", "Arcos Longos", "O Caminho do Sensei", '3', '5', '5', '1', '3', '1', '3')
                        break;
                        case 3:
                            habilidadesMonk ("1d4", "1d16", "Tabela III", "Kyudo: A Arte do Arco", "Arcos Longos", "O Caminho do Sensei", '5', '7', '7', '2', '5', '2', '5')
                        break;
                        case 4:
                            habilidadesMonk ("1d5", "1d20", "Tabela IV", "Kyudo: A Arte do Arco", "Arcos Longos", "O Caminho do Sensei", '7', '8', '8', '3', '7', '3', '7')
                        break;
                        case 5:
                            habilidadesMonk ("1d6", "1d24", "Tabela IV", "Kyudo: A Arte do Arco", "Arcos Longos", "O Caminho do Sensei", '8', '9', '9', '4', '8', '4', '8')
                        break;
                        case 6:
                            habilidadesMonk ("1d6", "1d30", "Tabela IV", "Kyudo: A Arte do Arco", "Arcos Longos", "O Caminho do Sensei", '9', '11', '11', '5', '9', '5', '9')
                        break;
                        case 7:
                            habilidadesMonk ("1d7", "1d30", "Tabela V", "Kyudo: A Arte do Arco", "Arcos Longos", "O Caminho do Sensei", '10', '12', '12', '6', '10', '6', '10')
                        break;
                        case 8:
                            habilidadesMonk ("1d8", "2d20", "Tabela V", "Kyudo: A Arte do Arco", "Arcos Longos", "O Caminho do Sensei", '11', '13', '13', '7', '11', '7', '11')
                        break;
                        case 9:
                            habilidadesMonk ("1d8", "2d20", "Tabela V", "Kyudo: A Arte do Arco", "Arcos Longos", "O Caminho do Sensei", '12', '14', '14', '8', '12', '8', '12')
                        break;
                        case 10:
                            habilidadesMonk ("1d10", "2d20", "Tabela V", "Kyudo: A Arte do Arco", "Arcos Longos", "O Caminho do Sensei", '13', '15', '15', '9', '13', '9', '13')
                        break;

                        default:
                            this.getField("esp classe 1").value = "";
                        break;
                    }
                break;
                case "Caótico":
                    switch(nivel){
                        case 1:
                            habilidadesMonk ("1d3", "1d12", "Tabela III", "Anatsuken: A Arte do Assassinato", "Garrote", "O Caminho do Shinobi", '1', '1', '0', '0', '1', '3', '3')
                        break;
                        case 2:
                            habilidadesMonk ("1d4", "1d14", "Tabela III", "Anatsuken: A Arte do Assassinato", "Garrote", "O Caminho do Shinobi", '3', '3', '1', '1', '3', '5', '5')
                        break;
                        case 3:
                            habilidadesMonk ("1d4", "1d16", "Tabela III", "Anatsuken: A Arte do Assassinato", "Garrote", "O Caminho do Shinobi", '5', '5', '2', '2', '5', '7', '7')
                        break;
                        case 4:
                            habilidadesMonk ("1d5", "1d20", "Tabela IV", "Anatsuken: A Arte do Assassinato", "Garrote", "O Caminho do Shinobi", '7','7','3','3','7','8','8')
                        break;
                        case 5:
                            habilidadesMonk ("1d6", "1d24", "Tabela IV", "Anatsuken: A Arte do Assassinato", "Garrote", "O Caminho do Shinobi", '8', '8', '4', '4', '8', '9', '9')
                        break;
                        case 6:
                            habilidadesMonk ("1d6", "1d30", "Tabela IV", "Anatsuken: A Arte do Assassinato", "Garrote", "O Caminho do Shinobi", '9', '9', '5', '5', '9', '11', '11')
                        break;
                        case 7:
                            habilidadesMonk ("1d7", "1d30", "Tabela V", "Anatsuken: A Arte do Assassinato", "Garrote", "O Caminho do Shinobi", '10', '10', '6', '6', '10', '12', '12')
                        break;
                        case 8:
                            habilidadesMonk ("1d8", "2d20", "Tabela V", "Anatsuken: A Arte do Assassinato", "Garrote", "O Caminho do Shinobi", '11', '11', '7', '7', '11', '13', '13')
                        break;
                        case 9:
                            habilidadesMonk ("1d8", "2d20", "Tabela V", "Anatsuken: A Arte do Assassinato", "Garrote", "O Caminho do Shinobi", '12', '12', '8', '8', '12', '14', '14')
                        break;
                        case 10:
                            habilidadesMonk ("1d10", "2d20", "Tabela V", "Anatsuken: A Arte do Assassinato", "Garrote", "O Caminho do Shinobi", '13', '13', '9', '9', '13', '15', '15')
                        break;

                        default:
                            this.getField("esp classe 1").value = "";
                        break;
                }
                break;
            }
    break;
}