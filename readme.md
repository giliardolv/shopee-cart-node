# 🛒 Simulador de Carrinho da Shopee

Um projeto simples de simulação de carrinho de compras desenvolvido em JavaScript, com foco em conceitos fundamentais como modularização, manipulação de arrays e regras de negócio.

---

## 🚀 Funcionalidades

- Adicionar itens ao carrinho
- Evitar duplicação de produtos
- Incrementar automaticamente a quantidade de itens
- Remover uma unidade do item
- Remover item completamente do carrinho
- Exibir lista de itens
- Calcular o valor total da compra

---

## 📁 Estrutura do Projeto

```
shopee-cart-node/
│
├── package.json
└── src/
    ├── index.js
    └── services
        ├── cart.js       # Regras de negócio do carrinho
        └── item.js       # Criação dos itens
```

---

## 🧠 Conceitos Aplicados

- Módulos em JavaScript (ES Modules)
- Métodos de arrays:
  - `findIndex`
  - `reduce`
  - `forEach`

- Manipulação de objetos
- Separação de responsabilidades
- Lógica de negócio (controle de carrinho)

---

## ⚙️ Melhorias Implementadas

Durante o desenvolvimento, foram feitas melhorias importantes para tornar o sistema mais robusto e próximo de um cenário real:

- 🔄 **Prevenção de itens duplicados**
  Itens com o mesmo nome não são adicionados novamente, apenas têm sua quantidade incrementada.

- 📦 **Controle correto de quantidade**
  Cada item é adicionado inicialmente com quantidade 1, e o carrinho gerencia os incrementos.

- 🧠 **Correção do cálculo de subtotal**
  O subtotal passou a utilizar `this.quantity`, garantindo atualização correta ao alterar a quantidade.

- 🛡️ **Cópia de objetos ao adicionar**
  Uso de `{ ...item }` para evitar efeitos colaterais por referência compartilhada.

- 🧹 **Correção de erros lógicos**
  Ajustes em condições como verificação de item não encontrado (`index === -1`).

- 🧾 **Formatação do total**
  Uso de `.toFixed(2)` para melhor exibição de valores monetários.

---

## ▶️ Como Funciona

```js
const item = createItem("Hotwheels Ferrari", 20.99, 1);
cartService.addItem(cart, item);
```

- Cada item é adicionado com controle de quantidade
- Itens duplicados não são recriados, apenas têm sua quantidade incrementada
- O total é calculado dinamicamente com base nos itens do carrinho

---

## 💰 Exemplo de Saída

```
Shopee cart list:

1. Hotwheels Porshe - R$ 25.99 | 1 | Subtotal: 25.99
2. Hotwheels Lamborguini - R$ 39.99 | 2 | Subtotal: 79.98

Shopee cart total is:
Total: 105.97
```

---

## 🔮 Melhorias Futuras

- Transformar o carrinho em uma classe (`Cart`)
- Persistência de dados (localStorage ou banco de dados)
- Criar interface com React
- Transformar em API com Node.js

---

## 📌 Autor

Projeto desenvolvido como prática de aprendizado em Node.js no bootcamp da DIO com o professor Felipe Aguiar.
