# Mottu Sense

Mottu Sense é um aplicativo móvel desenvolvido para cadastrar motos e fornecer localização em tempo real dentro de pátios de estacionamento e centros de distribuição. O objetivo é permitir que equipes operacionais encontrem motos rapidamente, acompanhem entradas/saídas em tempo real e tenham um inventário confiável do pátio, reduzindo retrabalho e otimizando deslocamentos.

## Proposta

Mottu Sense foi criado para empresas que precisam gerenciar grandes volumes de motos em pátios, centros de distribuição ou garagens. O sistema centraliza o cadastro, histórico e status das motos que entram e saem do pátio, permitindo buscas rápidas e visão geral do espaço.

Objetivos principais:
- Registrar e listar motos que entram no pátio com informações essenciais (placa, modelo, hora de entrada, responsável, observações).
- Facilitar a localização das motos dentro do pátio para reduzir tempo gasto pela equipe operacional.
- Oferecer dashboards e relatórios básicos sobre ocupação do pátio e movimentações.

Visão futura (roadmap):
- Mapa/planta do pátio com posicionamento aproximado das motos.
- Integração com leitores QR/RFID e sensores para automação de entrada/saída.
- Notificações e alertas sobre permanência prolongada e manutenção pendente.
- Exportação de relatórios para CSV/PDF.

## Funcionalidades

- Dashboard com resumo das atividades e estatísticas.
- Tela de cadastro de motos.
- Tela de busca e listagem de motos.
- Tela de controle/visualização do pátio.
- Componentes reutilizáveis de UI (cards, botões, ícones, loading).
- Suporte a troca de tema (ThemeSwitcher).

## Estrutura do projeto

Baseada na organização atual do repositório:

- `App.js` - ponto de entrada do aplicativo
- `index.js` - bootstrap
- `package.json` - dependências e scripts
- `src/` - código fonte
	- `assets/` - imagens e ícones (icons, splash, etc.)
	- `Componentes/` - componentes específicos do projeto
		- `Dashboard/` - componentes do dashboard (Card, InfoCard, ActivityItem, estilos)
		- `telaPrincipal/` - componentes relacionados à tela principal
	- `components/` - componentes de UI reutilizáveis
		- `ui/` - botões, cards, icons, Loading
	- `Telas/` - telas do aplicativo
		- `BuscarMoto.js` - tela de busca
		- `CadastroMoto.js` - tela de cadastro
		- `PatioMoto.js` - tela de pátio
		- `TelaCadastro.js`, `TelaFormulario.js`, `TelaHome.js` e outras telas auxiliares
		- `telaPrincipal/` - versão ou conjunto de componentes da tela principal
	- `theme/` - tema e contexto (ThemeContext.js, theme.js)

Obs: a estrutura pode conter duplicidades de nomes (ex.: `Componentes` e `components`) que refletem a organização atual do projeto.

## Como rodar (ambiente de desenvolvimento)

1. Instalar dependências:

```bash
npm install
```

2. Iniciar o projeto (Expo ou React Native):

```bash
npm start
```

3. Seguir instruções do Expo para abrir em emulador ou dispositivo físico.

## Integrantes

- Natasha Lopes — RM 554816 — GitHub: `natahalopees1`
- Barbara Dias — RM 556974 — GitHub: `bahdiaz`
- Ruan Pablo — RM 557727 — GitHub: `juanpabloruiz583`

## Observações

- Este README é uma base inicial; adapte e complemente com instruções de configuração específicas (por exemplo, variáveis de ambiente, serviços backend, scripts de build) quando forem adicionados ao projeto.
- Para documentação de API, diagramas de pátio ou exemplos de uso, crie arquivos adicionais na pasta `docs/`.

---

Se quiser, posso:
- Gerar um arquivo `docs/plant_patio.md` com sugestões de modelagem da planta do pátio.
- Adicionar badges (build, license) e instruções separadas para Expo vs React Native CLI.
- Inserir exemplos de telas ou capturas (se fornecer imagens em `src/assets`).

## Tecnologias

Principais bibliotecas e frameworks usados no projeto (baseado em `package.json`):

- Expo (SDK) — ambiente para desenvolvimento React Native.
- React Native — framework para desenvolvimento móvel.
- React — biblioteca de UI.
- React Navigation (`@react-navigation/native`, `@react-navigation/stack`) — navegação entre telas.
- Axios — requisições HTTP.
- Async Storage (`@react-native-async-storage/async-storage`) — armazenamento local.
- React Native Vector Icons — ícones vetoriais.
- react-native-reanimated, react-native-gesture-handler, react-native-safe-area-context, react-native-screens — bibliotecas para melhorar gestos, animações e compatibilidade com dispositivos.

Se houver integrações de backend, sensores ou APIs de localização em tempo real, podemos acrescentar dependências e instruções específicas conforme a arquitetura escolhida.

