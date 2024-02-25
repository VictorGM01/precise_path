
----

**date**: 2024-02-24

----

# Levantamento de Requisitos

### RNF-001 (ISO 25010: Eficiência de Desempenho)

A aplicação deve ser otimizada para garantir tempos de carregamento rápidos e uma resposta ágil às interações do usuário, mesmo sob condições de carga elevada, garantindo uma experiência de usuário fluida e eficiente.

**Critérios de Aceitação**
* As páginas da aplicação devem carregar em menos de 3 segundos em conexões de banda larga padrão.
* As respostas às ações do usuário devem ser quase instantâneas, com um tempo de resposta não superior a 1 segundo.
* A aplicação deve ser capaz de lidar com um alto número de usuários simultâneos sem degradação significativa de desempenho.
* Otimizações como cache de conteúdo, compressão de dados e balanceamento de carga devem ser implementadas.

### RNF-002 (ISO 25010: Compatibilidade)

A aplicação deve ser capaz de operar de forma eficaz em diferentes sistemas operacionais, navegadores e dispositivos, garantindo ampla acessibilidade e funcionalidade.

__Critérios de Aceitação__
* A aplicação deve ser compatível com os sistemas operacionais Windows, mac OS, Linux, Android e iOS.
* A aplicação deve funcionar em navegadores populares como Chrome, Firefox, Safari e Edge nas suas últimas versões.
* A funcionalidade principal da aplicação não deve ser afetada pela mudança de navegador ou sistema operacional.
* A aplicação deve seguir os padrões web para garantir a compatibilidade.

### RNF-003 (ISO 25010: Usabilidade)

A aplicação deve oferecer uma experiência de usuário clara e intuitiva, permitindo que novos usuários se familiarizem rapidamente com a interface e as funcionalidades disponíveis, sem a necessidade de formação extensiva.

__Critérios de Aceitação__
* Interfaces de usuário devem seguir as melhores práticas de UX/UI, com um design limpo e intuitivo.
* Deve haver consistência visual e funcional em todas as seções da aplicação para facilitar a aprendizagem e o uso.
* Mensagens de erro devem ser claras e oferecer orientações para a resolução de problemas.
* A aplicação deve incluir uma seção de ajuda ou FAQ acessível para oferecer suporte adicional ao usuário.
* Testes de usabilidade devem indicar que um novo usuário pode realizar tarefas básicas sem assistência após um breve período de familiarização.

### RNF-004 (ISO 25010: Segurança)

A aplicação deve garantir a confidencialidade, integridade e disponibilidade das informações, protegendo os dados dos usuários e da organização contra acessos não autorizados, alterações indevidas e outros riscos de segurança.

__Critérios de Aceitação__
* Implementação de protocolos seguros de comunicação, como HTTPS, para todas as transações de dados.
* Autenticação robusta dos usuários, incluindo medidas como senhas fortes, autenticação de dois fatores (2FA) e gestão de sessões seguras.
* Controles de acesso baseados em funções, garantindo que os usuários tenham apenas o nível de acesso necessário às funções e dados.
* Proteção contra vulnerabilidades comuns de segurança, como SQL Injection, Cross-Site Scripting (XSS) e Cross-Site Request Forgery (CSRF).
* Mecanismos de registro e monitoramento de atividades para detecção e resposta a incidentes de segurança.

#### RNF-005 (ISO 25010: Manutenibilidade)

A aplicação deve ser projetada para facilitar atualizações, correções de erros e melhorias, com uma arquitetura modular, código legível e bem documentado, garantindo que a manutenção possa ser realizada de forma eficiente e eficaz.

**Critérios de Aceitação**
* O código da aplicação deve seguir padrões de codificação e ser adequadamente comentado para facilitar a compreensão e a manutenção.
* A arquitetura da aplicação deve ser modular, permitindo a atualização ou substituição de componentes individuais sem impactar o sistema como um todo.
* Documentação técnica detalhada deve estar disponível, incluindo arquitetura do sistema, fluxos de dados, e guias de instalação e configuração.
* Deve ser possível realizar testes automatizados para validar a funcionalidade da aplicação após mudanças.
* Mecanismos de log devem ser implementados para registrar eventos de sistema, facilitando a identificação e correção de erros.

### RNF-006 (ISO 25010: Usabilidade e Portabilidade)

A aplicação deve apresentar um design responsivo que se adapte automaticamente aos diferentes tamanhos de tela e resoluções, garantindo uma ótima visualização e interação em uma ampla gama de dispositivos (desktop, tablets, smartphones), navegadores e orientações (retrato e paisagem).

**Critérios de Aceitação**
* O design da aplicação deve ser responsivo e se ajustar de forma adequada a diferentes tamanhos de tela, incluindo desktops, tablets e smartphones.
* A aplicação deve manter a legibilidade e usabilidade dos elementos da interface em todas as resoluções suportadas.
* A navegação e interação com a aplicação devem ser intuitivas e eficientes, independentemente do dispositivo ou orientação da tela.
* O design responsivo deve ser testado em uma variedade de navegadores populares e garantir uma experiência consistente em cada um deles.

