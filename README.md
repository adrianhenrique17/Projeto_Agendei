# Agendei
Este é um projeto que vai envolver Web + Mobile + Api. Para desenvolvimento de um aplicativo de agendamentos de consultas médicas, e com gerenciamento web e registo em banco de dados, SQL3. É um projeto FULLSTACK usando JAVASCRIPT, NODE.JS, REACT E REACT NATIVE.

# Inicialização

Este foi o inicio onde fiz a instação de todos os softwares que iria ultilizar por inicio: Vscode (já tinha só atualizei) , Node.js , Postman (para as Api's) , SQLITESTUDIO (gerenciamento do bd) e eu comecei usando o node com o npx para ultilizar a vizualização das alterações em tempo real, porem meu iphone não sincronizava ai depois de revirar o Stack Overflow achei o comando npx expo start --tunnel, e consegui usar meu iphone por bastante tempo até que como esse comando usa um ip anonimo e na hora de aplicar a conexão com a Api precisava do meu ip , ai não dava, fui obrigado aa instalar o Genymotion. O inicio do projeto foi bem interessante fazer a parte do frontend sem nenhuma conexão ainda e vendo as alterações no celular, usei o Figma para ir me espelhando https://www.figma.com/design/QkyPwLwIGiuD41BNYtOz9k/Agendei-JS?node-id=0-1&node-type=canvas&t=vT7xJIhYROYP02Gj-0, esse projeto não é meu e de um curso que estou fazendo, mas sempre nos codigos deixei do jeito que eu queria dando os meus toque e deixando da forma que acho melhor.

# Finalizando a interface mobile

Depois de tomar varias surras pro codigos pois tinha hora que não aparecia oque eu queria e sempre era algo que eu não importei ou palavras erradas, porem me diverti bastante no processo que parece bastante com html e css na hora de organizar os elementos na tela


# Banco de Dados e API

A construção da API foi interessante pois vi que ela serve como um garçom para servir oque o app ira precisar, usei o postman uma plataforma simples mais ultil, na contrução da API foi o uso do back-end. Com o banco de dados registrei algumas tabelas testes no SQLITESTUDIO e fiz as linkagens entre os 3 para fazer os testes basicos , na  API do postman inseri os codigos dos banco e logica para ser aplicada na hora de montar as interatividades do APP


# Finalizando o desenvolvimento da API

Aqui terminei de fazer o back-end da api fiz todas as linkagens do bd e estava tudo pronto foi uma parte mais logica.

# Finalizando app e acessando dados da API

Aqui e na construção do front do APP foi onde eu mais demorei, fiz todas as estruturas para cada botão funcionar, ativar as rolagens de telas , usei o metodo de sobre por para os abas internas e para as de registro usei o metodo de aba, foi bem dificil essa parte mas como a api estava pronta so fui inserindo ela no codigo e aplicando tudo, fazendo alguns ajustes na interface no app, e testando tudo , colocando mensagens de app, inserindo as veriaveis de email e senha , login e registro .
Fiz a parte de reservar os medicos, colocar cada especialidade cada preço, acertando os calendario e horarios, defindo botoes de cancelamento e tudo mais . Essa foi a parte mais demorada de tudo.

# Iniciado desenvolvimento web

Inicio o desenvolvimento web do projeto para manutenções das reservas feitas no app, uma parte web voltada ao administradores para controle, inicie já o desenvolvimento 
usando JS e react e HTML, usando a biblioteca do BOOTSTRAP, já inicie desenvolvendo as telas de login e cadastro e parte do layout de onde sera feito as manutenções de reservas, estou preparando todo os Front-end para logo depois ser aplicada a API que já esta criada e precisa somente só inserir ela.

# Conectando Web com Api

Então nessa etapa o Front-end já estava finalizado e eu só precisa usar minha api para inserir os dados do meu banco nas telas e fazer o processo de login e cadastro e demais funções que vou relatar agora. fiz o processo de realização do login e cadastro, pois essa aplicação web é para administradores, montei os logs de erros para logins errados e possiveis erros de servidores, e para o metodo de colocar duas senhas, tambem apresenta log de erro ao usuario, inseri metodo de proteção se o usuario so botar a url e os caminhos sem passar pelo login, ele indentifica que ta sem token e da logout. fiz o processo de mudar nome do usuario na sua tela, colocando o seu nome, fiz processo de desconectar para jogar a tela inicial, fiz processo de filtragem de informações pegadas do bd.

# Finalização

Nas ultimas alterações do cogigo do projeto, fui acertando as coisas que faltavam, inserindo get e put e delete da tabela nas funcões do meu projeto, designando a parte de poder criar novas reservas, editar e deletar reservas, e também acertando os bugs que tiveram no codigo, e realizando a finalização estética da aplicação, certamente tem muitos campo e logicas que podem ser implementadas, como a versão final vai sair em sua V01, muitas coisas podem ser mudadas e implementadas no projeto. De maneira geral o projeto foi muito interessante por passar por Back-end e Front-end, muitos bugs e estresse vieram mais isso é normal, projeto muito interessante de muita experiencia.


