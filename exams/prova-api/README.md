# PROVA ECMA

## OBSERVAÇÕES

* * *

Leia atentamente as observações a seguir:

* A avaliação será realizada no computador, porém individualmente e em silêncio. Não deve haver nenhum tipo de comunicação entre os alunos;
* Cada questão é expressa através dessa indicação **(DD%)** que significa o critério de pontuação, contudo, a desorganização pode penalizar a pontuação final;
* No arquivo de resposta inclua um bloco de comentário no início de seu conteúdo com o nome e a matrícula do aluno;
* Ao concluir as questões chame o professor para avaliar a sua prova;
* Depois da avaliação envie os arquivos num diretório compactado, seguindo o formato de nome **ALUNO-MATRICULA** para o email **luiz.chaves.ifpb+avaliacoesls20172@gmail.com** com:

> **Assunto:** [IFPB] Prova II LS
>
> **Conteúdo:** Os arquivos da prova do aluno < nome do aluno > (< matrícula >) estão em anexo.

## DESCRIÇÃO DA PROVA

* * *

Um grupo de ciclistas estava procurando uma aplicação Web para facilitar o acompanhamento das condições climática de João Pessoa, mas que fosse simples e com a aparência limpa.

Inicialmente um *designer* chegou a criar a [página Web](code.zip) da *Figura 1* de modo estático, e estava precisando da ajuda de um programador Javascript para tornar a página dinâmica.

*Figura 1 - Site da previsão do tempo (Versão Mobile)*<br>
<!-- ![layout-mobile](assets/layout-mobile.png) -->
<img src="assets/layout-mobile.png" alt="layout-mobile" width="300px" style="border: 1px solid #7f7f7f">

Pensando em facilitar a programação do Javascript o *designer* planejou as seguintes questões.

## QUESTÕES

* * *

**QUESTÃO 1 (50%)** - Crição de componentes dinâmicos da *Figura 1* usando o arquivo [weather-forecast.json](https://ifpb.github.io/ls/exams/prova-api/code/data/weather-forecast.json):

**a)** O cabeçalho, conforme a *Figura 2*.

*Figura 2 - Cabeçalho do site da previsão do tempo.*<br>
![layout-mobile](assets/header.png)

**b)** A área de informações extras, conforme a *Figura 3*.

*Figura 3 - Informação extra do site da previsão do tempo.*<br>
![layout-mobile](assets/status.png)

**c)** A tabela de previsões dos demais dias, conforme a *Figura 4*.

*Figura 4 - Previsão semanal.*<br>
![layout-mobile](assets/forecasts.png)

**QUESTÃO 2 (50% <span style="color:red">Obrigatória</span>)** - Como o grupo de ciclistas às vezes recebe algumas pessoas do exterior, foi solicitado a criação de um seletor de formato de temperatura, como ilustrado na *Figura 5*, que faz a converão entre `Celsius` e `Fahrenheit` de todas as temperaturas da página.

*Figura 5 - Conversor.*<br>
![layout-mobile](assets/converter.png)

> **Dica**: Para converter as temperaturas use as seguintes fórmulas:

```
C = (F - 32) / 1.8
F = C * 1.8 + 32
```

<!-- > [Alternativa de resposta](code-response/). -->
