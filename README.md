# Case_Fullstack_EloGroup
Desafio de Desenvolvedor Jr. da EloGroup  

Camada de Front construída em Angular seguindo as regras de negócio estabelecidas

- 3 Telas: Login, Painel e Lead

- TELA LOGIN:	
	- Todos os campos obrigatórios
	- Senha precisa de no mínimo 8 caracteres
	- A confirmação de senha precisa ser igual a senha digitada
	- O botão 'Registrar' só libera a entrada na segunda tela após todos os alertas sumirem

- TELA DO PAINEL:
	- 3 leads já pré-definidos (conforme documentação fornecida)
	- Permite 'Drag&Drop' de um lead da coluna 'Cliente em Potencial' apenas para a coluna 'Dados Confirmados'
	- Permite 'Drag&Drop' de um lead da coluna 'Dados Confirmados' apenas para a coluna 'Reunião Agendada'
	- Não é permitido pular um item direto da coluna 'Cliente em Potencial' para 'Reunião Agendada' ou vice-versa
	- Não é permitido retornar um item para a coluna anterior
	- Para adicionar um novo lead é necessário clicar no botão 'Novo Lead' e será redirecionada para a terceira tela

- TELA NOVO LEAD:
	- Todos os campos obrigatórios
	- O primeiro checkbox da tabela 'oportunidades' seleciona ou desmarca todos os itens
	- Não é permitido deixar algum campo de formulário em branco
	- O botão 'Salvar' adiciona o lead e redireciona de volta para o painel apenas após todos os alertas sumirem
