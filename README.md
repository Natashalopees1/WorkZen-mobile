```markdown
# WorkZen — Bem-estar Mental no Trabalho

Este repositório contém o aplicativo móvel Work Zen, agora focado em promover bem-estar mental no ambiente de trabalho. O app oferece meditações guiadas, exercícios de respiração, trilhas de sono e foco, conteúdo de autoajuda e planos de assinatura para empresas e colaboradores.

## Visão geral

O objetivo é fornecer ferramentas práticas e acessíveis para reduzir estresse, melhorar o sono e aumentar a concentração de colaboradores. O aplicativo combina sessões curtas, trilhas personalizadas e acompanhamento de progresso para criar uma rotina sustentável de cuidado mental.

Principais recursos:
- Meditações guiadas (curtas e longas)
- Exercícios respiratórios com temporizador
- Trilhas de sono e foco personalizadas
- Conteúdo de autoajuda e exercícios práticos
- Planos Free e Premium (assinatura)
- Estatísticas básicas de uso e progresso

## Estrutura do projeto

Arquivos e pastas principais:

- `App.js` - ponto de entrada do aplicativo
- `index.js` - bootstrap
- `package.json` - dependências e scripts
- `src/` - código fonte
	- `assets/` - imagens e ícones (icons, splash, etc.)
	- `components/` - componentes de UI reutilizáveis (ui/button.js, card.js, Loading.js)
	- `Componentes/` - componentes específicos (Header, ThemeSwitcher, LanguageSwitcher)
	- `Telas/` - telas do aplicativo (TelaHome, TelaPrincipal, TelaRecursos, TelaRespiracao, SobreNos)
	- `theme/` - tema e contexto (ThemeContext.js, theme.js)
Obs: a estrutura mantém algumas pastas com nomes similares (`Componentes` e `components`) conforme organização atual do projeto.

## Como rodar (ambiente de desenvolvimento)

1. Instalar dependências:

```bash
npm install
```

2. Instalar pods (iOS) — rode dentro da pasta `ios` se for necessário usar `expo run:ios` ou builds nativos:

```bash
cd ios && pod install
```

3. Iniciar o projeto (Expo):

```bash
npm start
```

4. Abrir em dispositivo/emulador seguindo o QR do Expo ou using `npm run android` / `npm run ios`.

Notas:
- Este projeto usa Expo; se você usar o workflow bare, pode ser necessário instalar dependências nativas e rodar `pod install` no iOS.

## Bibliotecas e dependências importantes

As dependências principais do projeto (extraídas de `package.json`):

- expo — ambiente de desenvolvimento React Native (SDK ~52)
- react, react-native — core do app
- @react-navigation/native, @react-navigation/stack — navegação
- axios — requisições HTTP
- @react-native-async-storage/async-storage — armazenamento local
- react-native-vector-icons — ícones vetoriais
- react-native-reanimated, react-native-gesture-handler, react-native-safe-area-context, react-native-screens — animações, gestos e compatibilidade
- react-native-svg — suporte a SVGs (usado por ícones e gráficos)
- lucide-react-native — biblioteca de ícones (adicionada recentemente)
- @react-native-picker/picker — componente Picker nativo
- expo-notifications, expo-constants, expo-device, expo-status-bar, expo-system-ui — utilitários Expo

Se outras bibliotecas forem adicionadas (ex.: analytics, auth, push providers), atualize `package.json` e esta seção.

## Integrantes

- Natasha Lopes — RM 554816 — GitHub: `natahalopees1`
- Barbara Dias — RM 556974 — GitHub: `bahdiaz`

## Desenvolvimento e boas práticas

- Use o `ThemeContext` para manter consistência visual entre telas.
- Reutilize componentes em `src/components/ui` para manter consistência e facilitar manutenção.
- Escreva testes simples em componentes críticos (opcional) e mantenha linter configurado para checar qualidade do código.

## Contribuição

- Crie uma branch a partir de `main` para sua feature/bugfix.
- Abra pull requests claros, com descrição do que foi alterado e como testar.

## Observações e próximos passos

- Atualize as traduções em `src/i18n` para as novas strings adicionadas na interface (ex.: textos de planos, recursos).
- Se integrar provedores de pagamento para assinatura, documente variáveis de ambiente e passos de configuração.

---


