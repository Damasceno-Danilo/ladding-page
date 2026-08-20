# Mina Odontologia & Estética — Landing Page

Landing page institucional da **Mina Odontologia & Estética**, clínica da
Dra. Giovanna Gabriella. Site estático, responsivo, sem dependências de
build — basta abrir o `index.html` no navegador.

## Estrutura do projeto

```
ladding-page/
├── index.html              # Estrutura (HTML semântico)
├── css/
│   └── style.css           # Estilos globais, tokens de design, responsividade
├── js/
│   └── script.js           # Menu mobile, scroll reveal, modal de agendamento
├── assets/
│   └── images/
│       ├── logo.png            # Logo da marca (fundo transparente)
│       ├── dra-giovanna.jpg    # Foto da Dra. Giovanna Gabriella
│       └── consultorio.jpg     # Foto do consultório
└── README.md
```

## Como visualizar

Basta abrir o arquivo `index.html` diretamente no navegador — não há
dependências externas além das fontes do Google Fonts (Fraunces + Jost),
carregadas via CDN.

Para desenvolvimento com live-reload (opcional), qualquer servidor estático
simples funciona, por exemplo:

```bash
# Python
python3 -m http.server 5500

# Node (npx)
npx serve .
```

Depois acesse `http://localhost:5500`.

## Como trocar as imagens

Basta substituir os arquivos dentro de `assets/images/`, mantendo os
mesmos nomes (`logo.png`, `dra-giovanna.jpg`, `consultorio.jpg`) — ou
trocar o nome e atualizar a referência correspondente no `index.html`.

## Formulário de agendamento (WhatsApp)

O botão "Agendar" abre um formulário (nome, telefone, serviço de interesse
e mensagem). Ao enviar, o `js/script.js` monta uma mensagem formatada e
abre o WhatsApp da clínica com o texto pronto — não há backend, é 100%
client-side.

O número do WhatsApp está definido em `js/script.js`, na constante:

```js
var WHATSAPP_NUMBER = '5511930551419';
```

## Dados de contato

Ajuste em `index.html` (rodapé) e `js/script.js` (WhatsApp) caso os dados
mudem:

- **WhatsApp:** (11) 93055-1419
- **Instagram:** [@minaodontologia](https://www.instagram.com/minaodontologia)
- **Endereço:** R. Nhatumani, 260 - sala 3, Vila Ré, São Paulo - SP, 03663-000
- **Horário:** Segunda a sexta 10h–18h · Sábado 10h–14h · Domingo fechado

## Pendências / a preencher

- CRO da Dra. Giovanna Gabriella (`index.html`, seção "Sobre")
- E-mail de contato (`index.html`, rodapé)
