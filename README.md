# Front
# CRUD em Angular com Autenticação usando Cognito AWS
Este é um projeto de exemplo que demonstra como criar um aplicativo de CRUD em Angular com autenticação usando o serviço AWS Cognito no backend.

Pré-requisitos
Antes de começar, você precisa ter os seguintes pré-requisitos instalados e configurados:

Node.js: Instalação do Node.js
Angular CLI: Instale-o globalmente usando o comando npm install -g @angular/cli
AWS CLI: Instalação da AWS CLI
AWS Account: Crie uma conta AWS e configure suas credenciais
Configuração do Backend (Java com AWS Cognito)
Clone este repositório:

bash
Copy code
git clone https://github.com/seu-usuario/seu-repo-backend.git
Acesse o diretório do projeto backend:

bash
Copy code
cd seu-repo-backend
Configure seu projeto Java para interagir com o Amazon Cognito. Certifique-se de definir as informações apropriadas, como a região da AWS, seu Pool de Usuários Cognito, etc.

Compile e execute o projeto backend.

Configuração do Frontend (Angular)
Clone este repositório:

bash
Copy code
git clone https://github.com/seu-usuario/seu-repo-frontend.git
Acesse o diretório do projeto frontend:

bash
Copy code
cd seu-repo-frontend
Configure as variáveis de ambiente necessárias no arquivo src/environments/environment.ts. Por exemplo:

typescript
Copy code
export const environment = {
  production: false,
  awsConfig: {
    cognito: {
      userPoolId: 'SEU_USER_POOL_ID',
      clientId: 'SEU_CLIENT_ID',
    },
  },
};
Instale as dependências do projeto:

bash
Copy code
npm install
Inicie o servidor de desenvolvimento:

bash
Copy code
ng serve
Acesse o aplicativo em seu navegador em http://localhost:4200.
