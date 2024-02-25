
----

**date**: 2024-02-24

----

# Levantamento de Requisitos

> Este documento contém a especificação dos requisitos funcionais para o sistema de estimativas trivariadas de projetos - PrecisePath.

### RF-001

**Login com GitHub**

A aplicação deve permitir que os usuários façam login utilizando suas contas do **GitHub**.

#### Critérios de Aceitação
1. O usuário deve ser capaz de iniciar o processo de login clicando em um botão "Login com GitHub".
2. O usuário deve ser redirecionado para uma página de autenticação do GitHub.
3. Após a autenticação no GitHub, o usuário deve ser redirecionado de volta à aplicação, agora logado

#### Descrição dos Testes

|Nome|Pré-condição|Procedimentos|Resultado Esperado|Pós-condição|
|---|---|---|---|---|
| Login bem-sucedido com GitHub | Usuário não está logado. | 1. Clique no botão "Login com GitHub".<br>2. Autentique no GitHub. | Usuário é redirecionado e logado na aplicação. | Usuário visualiza a dashboard principal. |

### RF-002

**Login com Email e Senha**

A aplicação deve permitir que os usuários façam login utilizando seu endereço de e-mail e senha.

#### Critérios de Aceitação
1. O usuário deve ser capaz de inserir seu endereço de e-mail e senha em campos de entrada específicos.
2. A aplicação deve validar os dados inseridos e autenticar o usuário se os dados estiverem corretos.
3. Se os dados de login estiverem incorretos, a aplicação deve exibir uma mensagem de erro específica (ex.: "E-mail ou senha incorretos").
4. Após um login bem-sucedido, o usuário deve ser redirecionado para a dashboard principal da aplicação.
5. A aplicação deve oferecer a opção de "Esqueci minha senha" para recuperação de senha.

#### Descrição dos Testes

|Nome|Pré-condição|Procedimentos|Resultado Esperado|Pós-condição|
|---|---|---|---|---|
| Login bem-sucedido | Usuário não está logado.| 1. Inserir e-mail e senha válidos.<br>2. Clicar no botão de login.                 | Usuário é redirecionado para a dashboard principal.  | Usuário visualiza a dashboard principal e está logado.       |
| Login com dados incorretos    | Usuário não está logado.| 1. Inserir e-mail e/ou senha incorretos.<br>2. Clicar no botão de login.           | Mensagem de erro "E-mail ou senha incorretos" é exibida.                 | Usuário permanece na página de login.<br>|
| Recuperação de senha iniciada | Usuário não está logado e esqueceu a senha. | 1. Clicar em "Esqueci minha senha".<br>2. Inserir e-mail para recuperação.<br>3. Seguir as instruções enviadas por e-mail. | Instruções de recuperação de senha são enviadas para o e-mail informado. | Usuário pode redefinir sua senha seguindo as instruções.<br> |

### RF-003

**Cadastro de Usuário**

A aplicação deve permitir o cadastro de novos usuários através do preenchimento de um formulário de cadastro.

#### Critérios de Aceitação

1. O usuário deve fornecer um nome, endereço de e-mail (com confirmação), senha (com confirmação), telefone (opcional), cargo, empresa, e deve aceitar os termos de uso e a política de privacidade.
2. A aplicação deve validar o e-mail para garantir que não está em uso por outro usuário.
3. As senhas inseridas nos campos de senha e confirmação de senha devem coincidir.
4. O e-mail inserido nos campos de e-mail e confirmação de e-mail deve coincidir.
5. Após um cadastro bem-sucedido, o usuário deve receber um e-mail de confirmação de cadastro.
6. Se houver erros no formulário (ex.: e-mail já em uso, senhas não coincidem), a aplicação deve exibir mensagens de erro específicas.
7. O usuário só pode concluir o cadastro se aceitar os termos de uso e a política de privacidade.

#### Descrição dos Testes

|Nome|Pré-condição|Procedimentos|Resultado Esperado|Pós-condição|
|---|---|---|---|---|
|Cadastro bem-sucedido|Usuário não está cadastrado.|1. Preencher todos os campos obrigatórios corretamente, incluindo aceitar os termos de uso e a política de privacidade.<br>2. Submeter o formulário de cadastro.|Usuário recebe e-mail de confirmação e é redirecionado para a página de login ou dashboard.|Usuário está cadastrado no sistema.|
|Cadastro com e-mail já em uso|O e-mail fornecido já está cadastrado.|1. Tentar cadastrar um novo usuário com um e-mail já em uso.<br>2. Submeter o formulário de cadastro.|Mensagem de erro sobre e-mail já em uso é exibida.|Usuário não é cadastrado.|
|Senhas não coincidem|Usuário está no processo de cadastro.|1. Preencher o campo de senha e confirmação de senha com valores diferentes.<br>2. Submeter o formulário de cadastro.|Mensagem de erro sobre senhas não coincidentes é exibida.|Usuário não é cadastrado.|
|E-mails não coincidem|Usuário está no processo de cadastro.|1. Preencher o campo de e-mail e confirmação de e-mail com valores diferentes.<br>2. Submeter o formulário de cadastro.|Mensagem de erro sobre e-mails não coincidentes é exibida.|Usuário não é cadastrado.|
|Termos não aceitos|Usuário está no processo de cadastro.|1. Preencher todos os campos obrigatórios corretamente, exceto por não aceitar os termos de uso e a política de privacidade.<br>2. Submeter o formulário de cadastro.|Mensagem de erro ou bloqueio do cadastro por não aceitar os termos.|Usuário não é cadastrado.|

### RF-004

**Cadastro de Projeto**

A aplicação deve permitir que os usuários cadastrados criem novos projetos, fornecendo informações detalhadas sobre cada projeto.

#### Critérios de Aceitação

1. O usuário deve fornecer um nome para o projeto, uma descrição detalhada, a data prevista de início e a data prevista de término.
2. A aplicação deve permitir que o usuário selecione membros da equipe que participarão do projeto.
3. O usuário deve ter a opção de definir a visibilidade do projeto (público ou privado).
4. Após o cadastro bem-sucedido, o projeto deve ser adicionado à lista de projetos do usuário e ser acessível para edição e visualização.
5. Se houver erros no formulário (ex.: datas inválidas, nome do projeto já em uso), a aplicação deve exibir mensagens de erro específicas.
6. A aplicação deve validar a data de término para garantir que não seja anterior à data de início.

#### Descrição dos Testes

|Nome|Pré-condição|Procedimentos|Resultado Esperado|Pós-condição|
|---|---|---|---|---|
|Cadastro bem-sucedido de projeto|Usuário logado e na página de cadastro de projeto.|1. Preencher todos os campos obrigatórios, incluindo nome, descrição, datas de início e término.<br>2. Submeter o formulário de cadastro do projeto.|Projeto é criado e exibido na lista de projetos do usuário.|Projeto adicionado à lista de projetos do usuário.|
|Cadastro de projeto com nome duplicado|Usuário logado e tentando cadastrar um novo projeto com um nome já utilizado em outro projeto seu.|1. Preencher o formulário de cadastro do projeto com um nome já existente.<br>2. Submeter o formulário.|Mensagem de erro sobre nome de projeto já em uso é exibida.|Projeto não é cadastrado.|
|Associação de membros da equipe ao projeto|Usuário logado e no processo de cadastro de um novo projeto.|1. Preencher o formulário de cadastro do projeto e adicionar membros da equipe.<br>2. Submeter o formulário.|Projeto é criado com membros da equipe associados.|Membros da equipe associados ao projeto.|
|Cadastro de projeto sem datas definidas|Usuário logado e no processo de cadastro de um novo projeto.|1. Preencher o formulário exceto pelas datas de início e término.<br>2. Tentar submeter o formulário.|Mensagem de erro ou solicitação para preencher as datas de início e término.|Projeto não é cadastrado até que as datas sejam definidas.|

### RF-005

**Listagem de Projeto(s)**

A aplicação deve permitir que os usuários visualizem uma lista de todos os seus projetos cadastrados, oferecendo uma visão geral e facilitando o acesso às informações de cada projeto.

#### Critérios de Aceitação

1. Todos os projetos ativos do usuário devem ser listados na interface de usuário designada para a listagem de projetos.
2. Projetos que foram sujeitos a deleção suave (ou seja, marcados como deletados sem serem removidos do banco de dados) não devem aparecer na listagem.
3. A listagem deve incluir informações essenciais de cada projeto, como nome, descrição, data de início e término previstas.
4. Deve haver opções ou ícones de ação rápidos (como editar, excluir, visualizar detalhes) associados a cada projeto na lista.
5. A interface deve permitir filtragem e ordenação dos projetos por diversos critérios, como data de início, nome, ou status.
6. A aplicação deve oferecer uma opção de busca para encontrar projetos específicos por nome.

#### Descrição dos Testes

|Nome|Pré-condição|Procedimentos|Resultado Esperado|Pós-condição|
|---|---|---|---|---|
|Visualização de todos os projetos|Usuário logado e possui projetos cadastrados.|1. Acessar a seção de listagem de projetos.|Todos os projetos ativos são exibidos, com opções de ação para cada um.|Usuário pode interagir com os projetos através das opções de ação.|
|Filtragem de projetos|Usuário logado e na seção de listagem de projetos com múltiplos projetos cadastrados.|1. Utilizar a funcionalidade de filtragem para selecionar projetos com base em um critério específico (ex.: data de início).|Apenas os projetos que atendem ao critério de filtragem são exibidos.|A lista de projetos é atualizada de acordo com o filtro aplicado.|
|Busca por nome de projeto|Usuário logado e possui projetos cadastrados.|1. Utilizar a funcionalidade de busca para inserir o nome de um projeto específico.<br>2. Executar a busca.|Projetos cujos nomes correspondem à busca são exibidos.|Usuário pode visualizar ou interagir com os resultados da busca.|
|Ordenação de projetos|Usuário logado e na seção de listagem de projetos com múltiplos projetos cadastrados.|1. Selecionar um critério de ordenação (ex.: data de término).|Projetos são exibidos em ordem conforme o critério selecionado.|A lista de projetos é reordenada de acordo com o critério aplicado.|

### RF-006

**Edição de Projeto**

A aplicação deve permitir que os usuários editem as informações de seus projetos cadastrados, possibilitando atualizações nos detalhes do projeto conforme necessário.

#### Critérios de Aceitação

1. O usuário deve ser capaz de acessar uma interface de edição ao selecionar a opção de editar em qualquer projeto listado na sua lista de projetos.
2. A interface de edição deve pré-carregar os dados atuais do projeto, permitindo ao usuário modificar qualquer informação, como nome, descrição, datas de início e término, membros da equipe, entre outros.
3. A aplicação deve validar as edições para garantir a integridade dos dados (ex.: verificar se o novo nome do projeto já existe).
4. Após a submissão das edições, a aplicação deve atualizar as informações do projeto no banco de dados e refletir essas alterações na listagem de projetos.
5. Se houver erros no processo de edição (ex.: nome do projeto já utilizado), a aplicação deve exibir mensagens de erro específicas.
6. O usuário deve receber uma confirmação de que as edições foram salvas com sucesso.

#### Descrição dos Testes

|Nome|Pré-condição|Procedimentos|Resultado Esperado|Pós-condição|
|---|---|---|---|---|
| Edição bem-sucedida de projeto       | Usuário logado e possui projetos cadastrados.         | 1. Acessar a opção de edição de um projeto específico.<br>2. Modificar as informações desejadas.<br>3. Submeter as alterações.            | As informações do projeto são atualizadas no banco de dados e na lista de projetos.            | O projeto reflete as edições feitas pelo usuário.|
| Edição de projeto com nome duplicado | Usuário logado e editando um projeto.                 | 1. Alterar o nome do projeto para um nome já utilizado em outro projeto do usuário.<br>2. Tentar salvar as alterações.| Mensagem de erro sobre nome de projeto duplicado é exibida.                | As edições não são salvas até que o conflito de nome seja resolvido. |
| Cancelamento de edição de projeto    | Usuário logado e no processo de edição de um projeto. | 1. Modificar algumas informações do projeto.<br>2. Cancelar a edição antes de salvar.             | Nenhuma alteração é salva e o usuário retorna à lista de projetos.         | O projeto permanece inalterado.                  |
| Atualização de datas de projeto      | Usuário logado e editando as datas de um projeto.     | 1. Acessar a opção de edição de datas de um projeto específico.<br>2. Modificar as datas de início e término.<br>3. Salvar as alterações. | As datas do projeto são atualizadas no banco de dados e refletidas na visualização do projeto. | O projeto exibe as novas datas de início e término.                  |

### RF-007

**Deleção Suave de Projetos**

A aplicação deve permitir que os usuários façam a deleção suave de projetos, marcando-os como deletados sem remover suas informações do banco de dados, permitindo uma possível recuperação no futuro.

#### Critérios de Aceitação

1. O usuário deve ser capaz de selecionar a opção de deletar em qualquer projeto listado na sua lista de projetos.
2. A aplicação deve solicitar uma confirmação do usuário antes de proceder com a deleção suave, para evitar exclusões acidentais.
3. Após a confirmação, o projeto deve ser marcado no banco de dados como deletado, mas suas informações devem ser mantidas.
4. Projetos marcados como deletados não devem aparecer na lista de projetos ativos do usuário.
5. A aplicação deve oferecer uma funcionalidade para visualizar e/ou restaurar projetos deletados, caso seja necessário.
6. O usuário deve receber um feedback visual ou mensagem confirmando a deleção suave do projeto.

#### Descrição dos Testes

|Nome|Pré-condição|Procedimentos|Resultado Esperado|Pós-condição|
|---|---|---|---|---|
|Deleção suave de projeto|Usuário logado e possui projetos cadastrados.|1. Selecionar a opção de deletar em um projeto específico.<br>2. Confirmar a ação de deleção.|O projeto é marcado como deletado e não aparece mais na lista de projetos ativos.|O projeto está marcado como deletado, mas suas informações permanecem no banco de dados.|
|Cancelamento de deleção suave|Usuário selecionou a opção de deletar um projeto.|1. Selecionar a opção de deletar um projeto.<br>2. Cancelar a ação de deleção após a solicitação de confirmação.|A ação de deleção é cancelada e o projeto permanece inalterado na lista de projetos ativos.|O projeto não é marcado como deletado.|
|Visualização de projetos deletados|Usuário realizou a deleção suave de um ou mais projetos.|1. Acessar a funcionalidade para visualizar projetos deletados.|Projetos marcados como deletados são exibidos numa lista separada.|Usuário pode visualizar projetos deletados.|
|Restauração de projeto deletado|Usuário deseja restaurar um projeto previamente deletado.|1. Acessar a lista de projetos deletados.<br>2. Selecionar a opção de restaurar em um projeto específico.|O projeto é restaurado e volta a aparecer na lista de projetos ativos.|O projeto restaurado é tratado como um projeto ativo novamente.|

### RF-008

**Estimativa Trivariada de Projeto**

A aplicação deve permitir que os usuários realizem estimativas trivariadas para seus projetos, utilizando um formulário específico onde selecionam o projeto e incluem as estimativas otimista (O), nominal (N) e pessimista (P), para gerar a estimativa.

#### Critérios de Aceitação

1. O usuário deve ser capaz de selecionar um projeto da lista de projetos cadastrados para o qual deseja fazer a estimativa.
2. O formulário de estimativa deve permitir a inclusão dos valores de estimativa otimista (O), nominal (N) e pessimista (P).
3. A aplicação deve calcular automaticamente a duração esperada ($\mu$) e o desvio padrão ($\sigma$) com base nas entradas fornecidas, utilizando as fórmulas $\mu = \frac{O + 4N + P}{6}$ e $\sigma = \frac{P - O}{6}$.
4. Após a submissão, a estimativa deve ser associada ao projeto selecionado, com as informações de $\mu$ e $\sigma$ armazenadas e disponíveis para consulta.
5. A aplicação deve validar as entradas para garantir que são números positivos e que o valor otimista é menor que o nominal, que por sua vez é menor que o pessimista.
6. O usuário deve receber um feedback visual ou mensagem confirmando a criação da estimativa.

#### Descrição dos Testes

|Nome|Pré-condição|Procedimentos|Resultado Esperado|Pós-condição|
|---|---|---|---|---|
|Criação bem-sucedida de estimativa trivariada|Usuário logado e possui projetos cadastrados.|1. Selecionar um projeto.<br>2. Inserir valores para O, N, e P no formulário de estimativa.<br>3. Submeter o formulário.|A estimativa é calculada e associada ao projeto, com $\mu$ e $\sigma$ armazenados.|A estimativa trivariada fica disponível para consulta no projeto.|
|Validação de entrada de estimativa|Usuário está preenchendo o formulário de estimativa trivariada.|1. Inserir valores inválidos (ex.: N menor que O, ou valores negativos).<br>2. Tentar submeter o formulário.|Mensagens de erro são exibidas, indicando os problemas nas entradas.|O formulário não é submetido até que as entradas sejam corrigidas.|
|Atualização de estimativa trivariada|Usuário deseja atualizar uma estimativa existente.|1. Acessar a estimativa trivariada de um projeto.<br>2. Modificar os valores de O, N, e P.<br>3. Submeter as novas entradas.|As novas entradas são recalculadas e atualizam a estimativa associada ao projeto.|A estimativa trivariada é atualizada com os novos valores de $\mu$ e $\sigma$.|

### RF-009

**Estimativa Rápida Sem Nenhum Projeto**

A aplicação deve permitir que os usuários façam uma estimativa trivariada rápida sem a necessidade de selecionar ou associar a estimativa a um projeto específico, facilitando cálculos preliminares ou estimativas independentes.

#### Critérios de Aceitação

1. O usuário deve ter acesso a um formulário de estimativa rápida que não requer a seleção de um projeto existente.
2. O formulário deve solicitar os valores de estimativa otimista (O), nominal (N) e pessimista (P).
3. A aplicação deve calcular automaticamente a duração esperada ($\mu$) e o desvio padrão ($\sigma$), baseando-se nas entradas fornecidas e exibir os resultados imediatamente ao usuário.
4. Não é necessário armazenar a estimativa no sistema, visto que a funcionalidade é destinada a cálculos rápidos e independentes.
5. A aplicação deve oferecer a opção de realizar uma nova estimativa rápida a qualquer momento, sem armazenar as anteriores.
6. As entradas devem ser validadas para garantir que são números positivos e que o valor otimista é menor que o nominal, que por sua vez é menor que o pessimista.

#### Descrição dos Testes

|Nome|Pré-condição|Procedimentos|Resultado Esperado|Pós-condição|
|---|---|---|---|---|
| Realização de estimativa rápida             | Usuário logado e acessando a funcionalidade de estimativa rápida. | 1. Inserir valores para O, N, e P no formulário de estimativa rápida.<br>2. Submeter o formulário.                   | Os resultados da estimativa ($\mu$ e $\sigma$) são calculados e exibidos imediatamente. | Nenhuma informação é armazenada, e o usuário pode realizar outra estimativa rápida se desejar. |
| Validação de entrada para estimativa rápida | Usuário está utilizando a funcionalidade de estimativa rápida.    | 1. Inserir valores inválidos (ex.: P menor que N, ou valores negativos).<br>2. Tentar submeter o formulário de estimativa rápida.        | Mensagens de erro são exibidas, indicando os problemas nas entradas.| O formulário de estimativa rápida não é submetido até que as entradas sejam corretas.          |
| Nova estimativa rápida após submissão       | Usuário completou uma estimativa rápida.      | 1. Após visualizar os resultados de uma estimativa rápida, selecionar a opção para realizar uma nova estimativa.<br>2. Inserir novos valores para O, N, e P. | Uma nova estimativa é calculada e exibida sem armazenar a anterior. | O usuário pode continuar fazendo novas estimativas rápidas conforme necessário.                |

### RF-010

**Exportar Estimativa para CSV ou para PDF**

A aplicação deve permitir que os usuários exportem as estimativas de projetos para formatos CSV ou PDF, facilitando a partilha, análise e arquivamento das informações de estimativa.

#### Critérios de Aceitação

1. O usuário deve ser capaz de selecionar uma estimativa específica de um projeto e optar por exportá-la.
2. A aplicação deve oferecer opções para exportar a estimativa em formato CSV ou PDF.
3. A exportação em formato CSV deve incluir todos os dados relevantes da estimativa, como nome do projeto, valores de estimativa otimista (O), nominal (N), pessimista (P), duração esperada ($\mu$) e desvio padrão ($\sigma$).
4. A exportação em formato PDF deve apresentar as informações de forma bem estruturada, incluindo os mesmos dados do CSV, mas em um layout adequado para apresentação ou arquivamento.
5. A aplicação deve gerar os arquivos de exportação no formato escolhido e disponibilizar um link para download ou enviar diretamente para o e-mail do usuário.
6. Deve haver validação para garantir que apenas estimativas completas e válidas possam ser exportadas.

#### Descrição dos Testes

|Nome|Pré-condição|Procedimentos|Resultado Esperado|Pós-condição|
|---|---|---|---|---|
| Exportação de estimativa para CSV                | Usuário logado e tem estimativas de projeto para exportar.   | 1. Selecionar a estimativa de um projeto.<br>2. Escolher a opção de exportação para CSV.<br>3. Confirmar a exportação. | Um arquivo CSV é gerado com as informações da estimativa e disponibilizado para download.               | O usuário pode baixar e abrir o arquivo CSV com os dados da estimativa.      |
| Exportação de estimativa para PDF                | Usuário logado e tem estimativas de projeto para exportar.   | 1. Selecionar a estimativa de um projeto.<br>2. Escolher a opção de exportação para PDF.<br>3. Confirmar a exportação. | Um arquivo PDF é gerado com as informações da estimativa em um formato adequado para apresentação e disponibilizado para download.              | O usuário pode baixar e visualizar o arquivo PDF com os dados da estimativa. |
| Tentativa de exportação de estimativa incompleta | Usuário tenta exportar uma estimativa que não está completa. | 1. Selecionar uma estimativa incompleta.<br>2. Tentar escolher uma opção de exportação.            | A opção de exportação não está disponível ou exibe uma mensagem de erro indicando que a estimativa não pode ser exportada por estar incompleta. | Não é possível exportar estimativas incompletas.         |

### RF-011

**Histórico de Estimativas**

A aplicação deve permitir que os usuários acessem um histórico de todas as estimativas realizadas para cada projeto, oferecendo uma visão completa das estimativas ao longo do tempo e permitindo análises comparativas.

#### Critérios de Aceitação

1. O usuário deve ser capaz de visualizar uma lista de todas as estimativas realizadas, ordenadas cronologicamente, para um projeto específico.
2. Cada entrada no histórico de estimativas deve incluir detalhes como a data da estimativa, os valores de estimativa otimista (O), nominal (N) e pessimista (P), a duração esperada ($\mu$) e o desvio padrão ($\sigma$).
3. A aplicação deve permitir a visualização de mudanças nas estimativas ao longo do tempo, destacando ajustes e tendências.
4. Deve haver opções para filtrar e ordenar o histórico de estimativas por data, duração esperada ou desvio padrão.
5. O usuário deve ter a opção de exportar o histórico de estimativas para formatos CSV ou PDF, similarmente ao requisito funcional de exportação de estimativas individuais.
6. A interface deve oferecer uma forma intuitiva de voltar às informações do projeto ou à lista de projetos após visualizar o histórico de estimativas.

#### Descrição dos Testes

|Nome|Pré-condição|Procedimentos|Resultado Esperado|Pós-condição|
|---|---|---|---|---|
| Visualização do histórico de estimativas | Usuário logado e seleciona um projeto com estimativas anteriores. | 1. Acessar a seção de histórico de estimativas para um projeto.<br>2. Visualizar as estimativas listadas.                   | O histórico de todas as estimativas realizadas para o projeto é exibido, com detalhes completos.      | Usuário pode analisar as estimativas ao longo do tempo.                   |
| Filtragem do histórico de estimativas    | Histórico de estimativas acessível.           | 1. Utilizar os filtros disponíveis para selecionar estimativas por data ou $\mu$.<br>2. Aplicar o filtro.                   | O histórico é atualizado para mostrar apenas as estimativas que correspondem aos critérios de filtro. | Usuário pode focar na análise de estimativas específicas.                 |
| Exportação do histórico de estimativas   | Histórico de estimativas acessível.           | 1. Escolher a opção de exportar o histórico de estimativas.<br>2. Selecionar o formato de exportação desejado (CSV ou PDF). | O histórico de estimativas é exportado no formato escolhido e disponibilizado para download.          | Usuário pode arquivar, compartilhar ou analisar o histórico de estimativas fora da aplicação. |

### RF-012

**Cadastrar Tempo Real Gasto para uma Estimativa Antiga**

A aplicação deve permitir que os usuários registrem o tempo real gasto em tarefas ou projetos para os quais uma estimativa trivariada foi previamente realizada, possibilitando a comparação entre o tempo estimado e o tempo efetivamente gasto.

#### Critérios de Aceitação

1. O usuário deve ser capaz de acessar uma estimativa específica dentro de um projeto e inserir o tempo real gasto na tarefa ou projeto associado.
2. A aplicação deve permitir a inclusão do tempo real gasto em horas, dias ou outra unidade de medida previamente definida, conforme a configuração do projeto.
3. Após o registro do tempo real, a aplicação deve oferecer a capacidade de comparar diretamente esse tempo com a duração esperada ($\mu$) calculada pela estimativa trivariada.
4. A aplicação deve validar a entrada do tempo real para garantir que sejam números positivos e fazer sentido no contexto do projeto (ex.: não permitir um tempo de conclusão que seja impossivelmente baixo ou alto).
5. Deve haver a opção de editar o tempo real gasto, caso haja necessidade de correção ou atualização após o registro inicial.
6. O usuário deve receber um feedback visual ou mensagem confirmando o registro ou a atualização do tempo real gasto.

#### Descrição dos Testes

|Nome|Pré-condição|Procedimentos|Resultado Esperado|Pós-condição|
|---|---|---|---|---|
|Registro de tempo real gasto|Usuário logado e acessando a estimativa de um projeto com estimativa trivariada realizada.|1. Selecionar a estimativa a qual deseja adicionar o tempo real gasto.<br>2. Inserir o tempo real gasto na tarefa ou projeto.<br>3. Confirmar o registro.|O tempo real gasto é registrado e pode ser comparado com a estimativa trivariada.|A estimativa exibe o tempo real ao lado do tempo estimado para comparação.|
|Edição de tempo real gasto|Tempo real já registrado para uma estimativa.|1. Acessar a estimativa com tempo real registrado.<br>2. Editar o valor do tempo real gasto.<br>3. Salvar a alteração.|O tempo real gasto é atualizado e a comparação com a estimativa trivariada é ajustada conforme necessário.|A estimativa reflete o novo tempo real gasto.|
|Validação de entrada de tempo real|Usuário tenta registrar um tempo real não válido.|1. Tentar inserir um valor negativo ou zero como tempo real gasto.<br>2. Tentar salvar a entrada.|Uma mensagem de erro é exibida, impedindo o registro de tempo não válido.|Não é possível registrar o tempo real até que um valor válido seja fornecido.|
