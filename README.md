# Real Style Frontend

Este projeto faz parte do MVP da disciplina Sprint II: Desenvolvimento Back-end Avançado, pós-graduação PUC-Rio.

É implementada uma interface de interação com o usuário, a qual consumirá os dados disponibilizados pela Fake Store API*. 

*Para a realização deste MVP, foi fixada, enquanto diretriz, a inclusão de um serviço consumido de uma API externa. 
Sendo assim, os dados referentes aos produtos de vestuário (como imagens, títulos e preços) foram consumidos diretamente 
da https://fakestoreapi.com/.

Os produtos de vestuário serão comercializados pela loja fictícia denominada “Real Style”. O usuário poderá armazenar 
produtos em um carrinho de compras e seus pedidos serão registrados em uma página de ordens. É permitido ao usuário 
consultar, adicionar, remover ou editar produtos (após efetuar a ordem, poderá editar a quantidade desejada).

Interação com a componente denominada "Real Style Backend" (presente neste repositório:
 https://github.com/ThiagoTerraDev/real-style-backend) utilizando comunicação seguindo o padrão REST.

Ao longo do código estão sendo feitas as chamadas às rotas implementadas pela API.


## Arquitetura

Diagrama da arquitetura da aplicação e estratégias de comunicação implementadas:
https://1drv.ms/i/s!AvTc9X8DiWmVj_MvyWRtPXuzk9SUHA?e=R1WWPD

---

## Como executar

Basta clonar o repositório (ou fazer o download do projeto) e abrir o arquivo index.html no seu browser.

---

## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile no terminal. Execute como administrador o seguinte comando para construir a imagem Docker:

```
$ docker build -t nome_da_sua_imagem .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, o seguinte comando:

```
$ docker run -d -p 8080:80 nome_da_sua_imagem
```

Uma vez executando, para acessar o front-end, basta abrir o [http://localhost:8080/#/](http://localhost:8080/#/) no navegador.
