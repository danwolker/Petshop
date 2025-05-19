# Frontend React App

Este é um projeto frontend construído com **React 19**, **TypeScript**, **Tailwind CSS** e diversas bibliotecas modernas para desenvolvimento de interfaces responsivas, navegação via `react-router-dom` e ícones `FontAwesome`.

## 📦 Tecnologias utilizadas

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM v7](https://reactrouter.com/en/main)
- [FontAwesome React](https://fontawesome.com/v6/docs/web/use-with/react/)
- [Swiper](https://swiperjs.com/) – carrosséis responsivos
- [Jest + Testing Library](https://testing-library.com/) – testes unitários

## 📁 Estrutura do Projeto

```
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── styles/
│   └── App.tsx
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## 🚀 Scripts disponíveis

Use os scripts abaixo com `yarn`:

| Comando      | Descrição                                               |
| ------------ | ------------------------------------------------------- |
| `yarn start` | Inicia o servidor de desenvolvimento (`localhost:3000`) |
| `yarn build` | Compila o projeto para produção                         |
| `yarn test`  | Executa os testes com `Jest`                            |
| `yarn eject` | Eject do Create React App (não recomendado)             |

## ✅ Testes

Este projeto está configurado com o [Testing Library](https://testing-library.com/) e `jest-dom`. Para rodar os testes, use:

```bash
yarn test
```

## 🎨 Estilização com Tailwind

O projeto utiliza Tailwind CSS versão `3.4.1`, com suporte a `PostCSS` e `autoprefixer` para estilização moderna e responsiva.

### Exemplo de uso:

```tsx
<div className="flex flex-col items-center p-4">
  <h1 className="text-2xl font-bold text-blue-500">Bem-vindo</h1>
</div>
```

## 🧪 Tipagens

Este projeto inclui tipagens para:

- React
- React DOM
- React Router DOM
- Jest
- Tailwind CSS

## 🌐 Compatibilidade entre navegadores

Configuração de compatibilidade via `browserslist` para garantir suporte a:

- Últimas versões do Chrome, Firefox e Safari
- Produção: navegadores com mais de 0.2% de uso

## 📁 Gerenciador de Pacotes

Este projeto usa o **Yarn 4.7.0**, com o seguinte comando:

```bash
yarn install
```

---

# 🧰 Configuração do Ambiente de Desenvolvimento - BACKEND (PHP)

📌 Requisitos
- Windows com XAMPP instalado
- WSL habilitado e funcionando (com Ubuntu)
- Acesso ao projeto com a pasta backend/
- Composer instalado no WSL (composer -V)
- VS Code (com integração WSL opcional)

## 1. Instalar e configurar XAMPP
### 🛠 1.1 Mudar a porta padrão do MySQL para `3307` (caso a porta `3306` esteja ocupada)

Edite os seguintes arquivos (de `3306` para `3307`):

#### `C:\xampp\mysql\bin\my.ini`
```ini
port=3307
```

#### `C:\xampp\php\php.ini`
Procure e edite as seguintes linhas (de `3306` para `3307`):
```ini
mysqli.default_port=3307
pdo_mysql.default_port=3307
mysql.default_port=3307
```

Reinicie o XAMPP: abra o XAMPP Control Panel, inicie o Apache e o MySQL, e verifique se o MySQL está rodando na porta 3307.

## 2. Criar link simbólico no Windows apontando para a pasta `backend/` no WSL

### 2.1. Descubra o caminho completo no WSL
Exemplo:
```bash	
\\wsl.localhost\Ubuntu\home\laila\Programming\Projects\Petshop\backend
```
### 2.2. Criar o link simbólico no Windows (CMD como administrador)
```bash
mklink /D "C:\xampp\htdocs\petshop-backend" "\\wsl.localhost\Ubuntu\home\laila\Programming\Projects\Petshop\backend"
```

Esse link torna o backend acessível via navegador em:
```bash
http://localhost/petshop-backend/api/index.php
```

## 3. Instalar Composer no WSL (caso ainda não tenha)
```
sudo apt install composer
```

## 4. Acessar pasta `backend/` e instalar dependências
```bash
cd backend
composer install
```

## 5. Testar o ambiente
Acessar no navegador:
```bash
http://localhost/petshop-backend/api/products.php
```