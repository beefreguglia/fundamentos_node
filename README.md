# 🚀 Fundamentos Node.js | Rocketseat

Bem-vindo ao repositório dos meus estudos e projetos desenvolvidos durante o curso de fundamentos **Node.js** da [Rocketseat](https://www.rocketseat.com.br/). Este repositório documenta a evolução desde os fundamentos de baixo nível do runtime até a construção de APIs robustas integradas com inteligência artificial.

## 🛠️ Tecnologias e Ferramentas

Nesta jornada, utilizamos as ferramentas mais modernas e performáticas do ecossistema back-end:

- **Linguagem & Runtime:** Node.js, JavaScript, TypeScript
- **Bancos de Dados:** SQLite, PostgreSQL (via Docker)
- **Inteligência Artificial:** OpenAI API, Mastra (Geração de conteúdo)
- **Ferramentas e Qualidade de Código:** Zod, OxLint, OxFmt, Lefthook, Lint-staged, Commit-lint
- **Arquitetura & Outros:** Streams nativas, `readline`, Test Runner nativo do Node.js, Swagger (OpenAPI), Docker, Dockerfile

---

## 📚 Estrutura do Curso e Projetos

### 🟢 Nível 1: Fundamentos do Runtime (A Base)
Uma imersão no funcionamento interno do Node.js e da engine do JavaScript.
- **Ecossistema:** Motor V8, Arquitetura do Node, LibUV, Event Loop e as diferenças práticas entre Single-Thread e Multi-Thread.
- **Assincronismo Profundo:** Callbacks, Promises, `async/await`, manipulação da API de Promise e estratégias para evitar *Callback/Promise Hell*.
- **Módulos Nativos:** Padrões CommonJS e ES Modules, `EventEmitter`, `Buffer`, sistema de arquivos (`fs`), variáveis de ambiente e a fundação de **Streams**.

### 🟡 Nível 2: Praticando os Fundamentos (SQL Terminal Agent)
Um agente de terminal CLI construído para processar dados em massa e traduzir linguagem natural para SQL.
- **Ingestão de Dados:** Leitura de arquivos gigantes de log utilizando Streams nativas e controle de *backpressure*.
- **IA na Prática:** Integração com a API da OpenAI para gerar consultas SQL seguras a partir de perguntas em texto livre.
- **Persistência & Validação:** Banco de dados SQLite, geração de dados falsos com Faker e validação de schemas com Zod.
- **Testes & CLI:** Interface interativa via módulo `readline` e cobertura de testes usando o runner nativo do Node.js.

### 🔴 Nível 3: HTTP com Node.js Puro ("The Hard Way")
Construção de uma API completa do zero, sem utilizar frameworks (como Express, Nest ou Fastify), para entender o protocolo HTTP a fundo.
- **Fundamentos HTTP:** TCP/IP, HTTP vs HTTPS, métodos (GET, POST, PATCH, DELETE), ciclo de Request/Response, Status Codes e Headers.
- **Projeto (API de Blog com IA):** 
  - CRUD completo de postagens com sistema de aprovação e reprovação.
  - Utilização do framework **Mastra** e agentes de código para geração autônoma de conteúdo via IA.
  - Persistência de dados em **PostgreSQL** rodando via **Docker**.
  - Padronização e qualidade de código com ferramentas em Rust (OxLint, OxFmt) e hooks de git (Lefthook, Lint-staged, Commit-lint).
  - Documentação da API com **Swagger** e preparo para produção com **Dockerfile**.

---

