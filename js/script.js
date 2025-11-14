class SPARouter {
  constructor() {
    this.routes = {};
    this.currentPage = '';
    this.init();
  }

  init() {
    
    document.addEventListener('click', (e) => {
      if (e.target.matches('nav a')) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        this.navigateTo(href);
      }
    });

    
    this.loadInitialPage();
  }

  loadInitialPage() {
    const currentPath = window.location.pathname;
    const page = currentPath.split('/').pop() || 'index.html';
    this.navigateTo(page);
  }

  navigateTo(page) {
    if (this.currentPage === page) return;
    
    this.currentPage = page;
    this.updateActiveLink(page);
    this.loadPage(page);
    
   
    window.history.pushState({ page }, '', page);
  }

  updateActiveLink(page) {
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('ativo');
      if (link.getAttribute('href') === page) {
        link.classList.add('ativo');
      }
    });
  }

  loadPage(page) {
    const content = this.getPageContent(page);
    this.renderPage(content);
  }

  getPageContent(page) {
    const templates = {
      'index.html': HomePage,
      'projetos.html': ProjetosPage,
      'cadastro.html': CadastroPage
    };

    return templates[page] || templates['index.html'];
  }

  renderPage(PageTemplate) {
    const main = document.querySelector('main') || document.createElement('main');
    
    if (!document.querySelector('main')) {
      const body = document.querySelector('body');
      const footer = document.querySelector('footer');
      body.insertBefore(main, footer);
    }

    main.innerHTML = PageTemplate();

    // Inicializa funcionalidades específicas da página
    if (this.currentPage === 'cadastro.html') {
      FormValidator.init();
    }
  }
}


function HomePage() {
  return `
    <h1>"Quando conectamos pessoas, criamos redes que transformam o mundo."</h1>
    <img src="./img/ONG2.png" alt="União" style="max-width: 100%; height: auto; border-radius: 12px; margin: 20px 0;">

    <section>
        <h2>Sobre Nós</h2>
        <p>A Vida em Rede é uma organização sem fins lucrativos fundada em 2015, na cidade de Belo Horizonte (MG), com o
            propósito de fortalecer comunidades através da educação, da sustentabilidade e da inclusão social.
            Tudo começou com um pequeno grupo de voluntários que ofereciam aulas de reforço escolar e oficinas de
            reciclagem em um centro comunitário do bairro Santa Tereza. Com o tempo, o projeto cresceu, ganhou parceiros e passou a
            atender centenas de famílias por meio de programas voltados à capacitação profissional, saúde comunitária e cultura.
        </p>
        <p>Hoje, a ONG atua como um hub social, conectando pessoas, empresas e instituições para promover o
            desenvolvimento humano e ambiental de forma colaborativa.</p>
    </section>

    <section>
        <h2>Missão, Visão e Valores</h2>
        <article>
            <h3>Nossa Missão</h3>
            <p>Promover transformação social sustentável, oferecendo oportunidades de aprendizado, trabalho e bem-estar
                para comunidades em situação de vulnerabilidade.</p>
        </article>
        <article>
            <h3>Nossa Visão</h3>
            <p>Ser referência nacional em educação comunitária e sustentabilidade urbana, inspirando outras iniciativas
                sociais em todo o Brasil.</p>
        </article>
        <article>
            <h3>Nossos Valores</h3>
            <ul>
                <li>🌱 Solidariedade: acreditamos no poder da empatia e da colaboração.</li>
                <li>🎓 Educação: a base para a autonomia e a cidadania.</li>
                <li>♻️ Sustentabilidade: cuidamos do meio ambiente e das pessoas.</li>
                <li>💡 Inovação Social: buscamos soluções criativas para velhos problemas.</li>
                <li>❤️ Transparência: atuamos com ética e responsabilidade em tudo o que fazemos.</li>
            </ul>
        </article>
    </section>

    <section>
        <h2>Áreas de Atuação</h2>
        <ol>
            <li>🧩 Educação e Desenvolvimento Pessoal</li>
            <ul>
                <li>Aulas de reforço escolar e alfabetização de jovens e adultos.</li>
                <li>Oficinas de informática básica e inclusão digital.</li>
                <li>Cursos de empreendedorismo comunitário.</li>
            </ul>
            <li>🌍 Sustentabilidade e Meio Ambiente</li>
            <ul>
                <li>Mutirões de limpeza e coleta seletiva nos bairros.</li>
                <li>Oficinas de reciclagem, compostagem e hortas urbanas.</li>
                <li>Campanhas de conscientização ambiental em escolas.</li>
            </ul>
            <li>🤝 Ação Social e Saúde Comunitária</li>
            <ul>
                <li>Feiras de doação de roupas e alimentos.</li>
                <li>Atendimento psicológico e jurídico voluntário.</li>
                <li>Palestras sobre prevenção de doenças e autocuidado.</li>
            </ul>
            <li>🎭 Cultura e Cidadania</li>
            <ul>
                <li>Grupos de teatro comunitário e coral infantil.</li>
                <li>Eventos culturais e feiras de talentos locais.</li>
                <li>Oficinas de arte, música e contação de histórias.</li>
            </ul>
        </ol>
    </section>

    <section>
        <h2>Como Você Pode Ajuda?</h2>
        <p>💚 Seja voluntário(a)</p>
        <p>💚 Doe roupas, alimentos ou materiais escolares</p>
        <p>💚 Apoie financeiramente nossos projetos mensais</p>
    </section>
  `;
}

function ProjetosPage() {
  return `
    <h1>"Quando muitas mãos se unem, o impossível se torna realidade."</h1>
    <img src="./img/União.png" alt="União" style="max-width: 100%; height: auto; border-radius: 12px; margin: 20px 0;">

    <section>
        <h2>💪 Voluntariado: Juntos, Fazemos a Diferença</h2>
        <p>Na Vida em Rede, acreditamos que cada pessoa tem algo valioso a oferecer.
            O voluntariado é o coração da nossa ONG – é o que dá vida aos nossos projetos, multiplica o impacto e
            constrói uma corrente de solidariedade que transforma realidades. 🌎</p>
        <p>Ser voluntário é muito mais do que doar tempo: é doar conhecimento, empatia e energia para causas que
            importam. Aqui, cada voluntário é parte fundamental da mudança que queremos ver no mundo.</p>

        <article>
            <h3>✨ O que você pode fazer como voluntário</h3>
            <ul>
                <li>Ensinar: participe das nossas aulas de reforço escolar e oficinas de inclusão digital.</li>
                <li>Ajudar: organize campanhas de arrecadação de alimentos, roupas e brinquedos.</li>
                <li>Cuidar: apoie as ações de saúde e bem-estar comunitário.</li>
                <li>Criar: participe de projetos culturais e artísticos para crianças e adolescentes.</li>
                <li>Preservar: colabore nas atividades de reciclagem, hortas urbanas e mutirões ambientais.</li>
            </ul>
            <p>💚 Ser voluntário é descobrir que, ao ajudar o outro, você também se transforma.</p>
        </article>
    </section>

    <section>
        <h2>🌍 Nossos Projetos Sociais</h2>
        <p>A Vida em Rede mantém diversos projetos ativos durante o ano, voltados à educação, sustentabilidade, saúde e
            cidadania. Conheça alguns deles:</p>
        <article>
            <ol>
                <li>📘 Reforçar para Transformar</li>
                <ul>
                    <p>Oferece aulas de reforço escolar e alfabetização de jovens e adultos, com foco na recuperação da
                        autoestima e no incentivo à educação continuada.</p>
                    <p>📍Atendimento: 3 escolas comunitárias | 👩‍🏫 +80 alunos beneficiados por mês.</p>
                </ul>
                <li>🌱 Horta que Alimenta</li>
                <ul>
                    <p>Implantação de hortas urbanas em terrenos ociosos e escolas públicas, promovendo alimentação
                        saudável e conscientização ambiental.</p>
                    <p>📍7 hortas ativas | 👨‍🌾 +40 famílias envolvidas.</p>
                </ul>
                <li>💼 Mãos que Criam</li>
                <ul>
                    <p>Capacita mulheres e jovens em situação de vulnerabilidade para o artesanato e o empreendedorismo
                        sustentável.</p>
                    <p>📍Oficinas semanais | 💡 Criação de produtos com material reciclável.</p>
                </ul>
                <li>🎭 Cultura em Movimento</li>
                <ul>
                    <p>Projeto cultural que oferece oficinas de teatro, dança e música para crianças e adolescentes da
                        comunidade.</p>
                    <p>📍Atuação em 2 centros culturais | 🎶 +100 participantes ativos.</p>
                </ul>
                <li>❤️ Ação Solidária</li>
                <ul>
                    <p>Campanhas contínuas de arrecadação de alimentos, roupas e brinquedos, além de ações emergenciais
                        em comunidades carentes.</p>
                    <p>📦 +5 toneladas de alimentos doadas em 2024.</p>
                </ul>
            </ol>
        </article>
    </section>

    <section>
        <h2>🤲 Como Doar</h2>
        <p>Suas doações tornam tudo isso possível!
            Cada contribuição, seja grande ou pequena, ajuda a transformar vidas e fortalecer nossos programas.</p>
        <ol>
            <li>💵 Doação Financeira</li>
            <p>Você pode apoiar com doações únicas ou mensais:</p>
            <ul>
                <li>Banco Solidário – Ag. 1234 – C/C 56789-0 – ONG Vida em Rede</li>
            </ul>
            <li>🎁 Doação de Itens</li>
            <p>Aceitamos:</p>
            <ul>
                <li>Alimentos não perecíveis.</li>
                <li>Roupas, cobertores e calçados.</li>
                <li>Materiais escolares e brinquedos.</li>
                <li>Computadores e eletrônicos usados (em bom estado).</li>
            </ul>
            <p>📍Entrega: Rua das Flores, 128 – Bairro Santa Tereza – BH</p>
            <p>🕐 Segunda a sexta, das 9h às 17h</p>
            <li>🕊️ Apadrinhamento Social</li>
            <p>Adote simbolicamente um dos nossos projetos e acompanhe de perto o impacto da sua contribuição.
                Ideal para empresas, grupos de amigos ou famílias que desejam fazer a diferença de forma contínua.</p>
        </ol>
    </section>

    <section>
        <h2>🌟 Junte-se a Nós</h2>
        <p>A Vida em Rede é feita por pessoas como você, que acreditam que cuidar do outro é o primeiro passo para
            transformar o mundo.</p>
    </section>
  `;
}

function CadastroPage() {
  return `
    <h2>Formulário de Cadastro de Voluntário</h2>
    <p>Preencha seus dados abaixo para se tornar um voluntário e fazer parte da nossa rede de solidariedade 💚</p>
    <div id="mensagem"></div>
    
    <div id="lista-voluntarios" style="margin-bottom: 30px;">
        <h3>📋 Voluntários Cadastrados: <span id="contador-voluntarios">0</span></h3>
        <button id="btn-mostrar-voluntarios" type="button">Ver Lista de Voluntários</button>
        <div id="voluntarios-lista" style="display: none; margin-top: 20px;"></div>
    </div>

    <form id="form-cadastro" action="#" method="post">
        <fieldset>
            <legend>Informações Pessoais</legend>
            
            <label for="nome">Nome Completo: <span class="obrigatorio">*</span></label>
            <input type="text" id="nome" name="nome" required placeholder="Digite seu nome completo">
            <span class="erro-validacao" id="erro-nome"></span>

            <label for="email">E-mail: <span class="obrigatorio">*</span></label>
            <input type="email" id="email" name="email" required placeholder="exemplo@email.com">
            <span class="erro-validacao" id="erro-email"></span>

            <label for="cpf">CPF: <span class="obrigatorio">*</span></label>
            <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00" maxlength="14">
            <span class="erro-validacao" id="erro-cpf"></span>

            <label for="telefone">Telefone: <span class="obrigatorio">*</span></label>
            <input type="tel" id="telefone" name="telefone" required placeholder="99-99999-9999" maxlength="13">
            <span class="erro-validacao" id="erro-telefone"></span>

            <label for="nascimento">Data de Nascimento: <span class="obrigatorio">*</span></label>
            <input type="date" id="nascimento" name="nascimento" required>
            <span class="erro-validacao" id="erro-nascimento"></span>

            <label for="idade">Idade: <span class="obrigatorio">*</span></label>
            <input type="number" id="idade" name="idade" min="18" max="120" required readonly>
            <span class="erro-validacao" id="erro-idade"></span>
        </fieldset>

        <fieldset>
            <legend>Endereço</legend>

            <label for="endereco">Endereço: <span class="obrigatorio">*</span></label>
            <input type="text" id="endereco" name="endereco" required placeholder="Rua, número e complemento">
            <span class="erro-validacao" id="erro-endereco"></span>

            <label for="cep">CEP: <span class="obrigatorio">*</span></label>
            <input type="text" id="cep" name="cep" required placeholder="00000-000" maxlength="9">
            <span class="erro-validacao" id="erro-cep"></span>

            <label for="cidade">Cidade: <span class="obrigatorio">*</span></label>
            <input type="text" id="cidade" name="cidade" required placeholder="Digite sua cidade">
            <span class="erro-validacao" id="erro-cidade"></span>

            <label for="estado">Estado: <span class="obrigatorio">*</span></label>
            <input type="text" id="estado" name="estado" required placeholder="Digite seu estado (ex: MG)" maxlength="2">
            <span class="erro-validacao" id="erro-estado"></span>
        </fieldset>

        <fieldset>
            <legend>Preferências</legend>

            <p>Como você gostaria de ajudar? <span class="obrigatorio">*</span></p>
            <label><input type="checkbox" name="areas" value="educacao"> Educação</label>
            <label><input type="checkbox" name="areas" value="sustentabilidade"> Sustentabilidade</label>
            <label><input type="checkbox" name="areas" value="acao-social"> Ação Social</label>
            <label><input type="checkbox" name="areas" value="cultura"> Cultura</label>
            <span class="erro-validacao" id="erro-areas"></span>
        </fieldset>

        <button type="submit">Enviar Cadastro</button>
        <button type="reset">Limpar</button>
    </form>
  `;
}


class FormValidator {
  static init() {
    const form = document.getElementById('form-cadastro');
    if (!form) return;

    this.setupEventListeners();
    this.loadVoluntarios();
  }

  static setupEventListeners() {
  
    document.getElementById('nome')?.addEventListener('blur', () => this.validateNome());
    document.getElementById('email')?.addEventListener('blur', () => this.validateEmail());
    document.getElementById('cpf')?.addEventListener('input', (e) => this.formatCPF(e.target));
    document.getElementById('cpf')?.addEventListener('blur', () => this.validateCPF());
    document.getElementById('telefone')?.addEventListener('input', (e) => this.formatTelefone(e.target));
    document.getElementById('telefone')?.addEventListener('blur', () => this.validateTelefone());
    document.getElementById('nascimento')?.addEventListener('change', () => this.validateNascimento());
    document.getElementById('cep')?.addEventListener('input', (e) => this.formatCEP(e.target));
    document.getElementById('cep')?.addEventListener('blur', () => this.validateCEP());
    document.getElementById('estado')?.addEventListener('input', (e) => this.formatEstado(e.target));


    document.getElementById('form-cadastro')?.addEventListener('submit', (e) => this.handleSubmit(e));

 
    document.getElementById('form-cadastro')?.addEventListener('reset', () => {
      setTimeout(() => this.clearAllErrors(), 0);
    });

  
    document.getElementById('btn-mostrar-voluntarios')?.addEventListener('click', () => this.toggleVoluntariosList());
  }



  static formatCPF(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    
    input.value = value;
  }

  static formatTelefone(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    value = value.replace(/(\d{2})(\d)/, '$1-$2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    
    input.value = value;
  }

  static formatCEP(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    
    input.value = value;
  }

  static formatEstado(input) {
    input.value = input.value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 2);
  }

  
  static validateNome() {
    const nome = document.getElementById('nome');
    const erro = document.getElementById('erro-nome');
    const value = nome.value.trim();

    if (value.length < 3) {
      this.showError(nome, erro, 'Nome deve ter pelo menos 3 caracteres');
      return false;
    }

    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(value)) {
      this.showError(nome, erro, 'Nome deve conter apenas letras');
      return false;
    }

    if (value.split(' ').length < 2) {
      this.showError(nome, erro, 'Digite o nome completo');
      return false;
    }

    this.clearError(nome, erro);
    return true;
  }

  static validateEmail() {
    const email = document.getElementById('email');
    const erro = document.getElementById('erro-email');
    const value = email.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
      this.showError(email, erro, 'E-mail inválido');
      return false;
    }

    
    const voluntarios = JSON.parse(localStorage.getItem('voluntarios') || '[]');
    if (voluntarios.some(v => v.email === value)) {
      this.showError(email, erro, 'Este e-mail já está cadastrado');
      return false;
    }

    this.clearError(email, erro);
    return true;
  }

  static validateCPF() {
    const cpf = document.getElementById('cpf');
    const erro = document.getElementById('erro-cpf');
    const value = cpf.value.replace(/\D/g, '');

    if (value.length !== 11) {
      this.showError(cpf, erro, 'CPF deve ter 11 dígitos');
      return false;
    }

    
    if (!this.isValidCPF(value)) {
      this.showError(cpf, erro, 'CPF inválido');
      return false;
    }

   
    const voluntarios = JSON.parse(localStorage.getItem('voluntarios') || '[]');
    if (voluntarios.some(v => v.cpf === cpf.value)) {
      this.showError(cpf, erro, 'Este CPF já está cadastrado');
      return false;
    }

    this.clearError(cpf, erro);
    return true;
  }

  static isValidCPF(cpf) {
    // CPFs inválidos conhecidos
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  }

  static validateTelefone() {
    const telefone = document.getElementById('telefone');
    const erro = document.getElementById('erro-telefone');
    const value = telefone.value.replace(/\D/g, '');

    if (value.length !== 11) {
      this.showError(telefone, erro, 'Telefone deve ter 11 dígitos (DDD + número)');
      return false;
    }

    this.clearError(telefone, erro);
    return true;
  }

  static validateNascimento() {
    const nascimento = document.getElementById('nascimento');
    const idade = document.getElementById('idade');
    const erro = document.getElementById('erro-nascimento');
    const erroIdade = document.getElementById('erro-idade');

    if (!nascimento.value) {
      this.showError(nascimento, erro, 'Data de nascimento é obrigatória');
      return false;
    }

    const dataNasc = new Date(nascimento.value);
    const hoje = new Date();
    let idadeCalculada = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
      idadeCalculada--;
    }

    idade.value = idadeCalculada;

    if (idadeCalculada < 18) {
      this.showError(nascimento, erro, 'Voluntário deve ter pelo menos 18 anos');
      this.showError(idade, erroIdade, 'Idade mínima: 18 anos');
      return false;
    }

    if (idadeCalculada > 120) {
      this.showError(nascimento, erro, 'Data de nascimento inválida');
      return false;
    }

    this.clearError(nascimento, erro);
    this.clearError(idade, erroIdade);
    return true;
  }

  static validateCEP() {
    const cep = document.getElementById('cep');
    const erro = document.getElementById('erro-cep');
    const value = cep.value.replace(/\D/g, '');

    if (value.length !== 8) {
      this.showError(cep, erro, 'CEP deve ter 8 dígitos');
      return false;
    }

    this.clearError(cep, erro);
    return true;
  }

  static validateAreas() {
    const checkboxes = document.querySelectorAll('input[name="areas"]');
    const erro = document.getElementById('erro-areas');
    const checked = Array.from(checkboxes).some(cb => cb.checked);

    if (!checked) {
      erro.textContent = 'Selecione pelo menos uma área de interesse';
      erro.style.display = 'block';
      return false;
    }

    erro.style.display = 'none';
    return true;
  }

  

  static showError(input, errorElement, message) {
    input.classList.add('input-erro');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }

  static clearError(input, errorElement) {
    input.classList.remove('input-erro');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }

  static clearAllErrors() {
    document.querySelectorAll('.erro-validacao').forEach(el => {
      el.textContent = '';
      el.style.display = 'none';
    });
    document.querySelectorAll('.input-erro').forEach(el => {
      el.classList.remove('input-erro');
    });
  }

  
  static handleSubmit(e) {
    e.preventDefault();

  
    const validations = [
      this.validateNome(),
      this.validateEmail(),
      this.validateCPF(),
      this.validateTelefone(),
      this.validateNascimento(),
      this.validateCEP(),
      this.validateAreas()
    ];

    if (!validations.every(v => v)) {
      this.showMessage('⚠️ Por favor, corrija os erros no formulário antes de enviar.', 'error');
      return;
    }

    
    const formData = {
      id: Date.now(),
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      cpf: document.getElementById('cpf').value,
      telefone: document.getElementById('telefone').value,
      nascimento: document.getElementById('nascimento').value,
      idade: document.getElementById('idade').value,
      endereco: document.getElementById('endereco').value,
      cep: document.getElementById('cep').value,
      cidade: document.getElementById('cidade').value,
      estado: document.getElementById('estado').value,
      areas: Array.from(document.querySelectorAll('input[name="areas"]:checked')).map(cb => cb.value),
      dataCadastro: new Date().toLocaleString('pt-BR')
    };

    
    this.saveVoluntario(formData);

    
    this.showMessage('✅ Cadastro realizado com sucesso! Bem-vindo à Vida em Rede! 💚', 'success');

    
    document.getElementById('form-cadastro').reset();
    this.clearAllErrors();

    
    this.loadVoluntarios();
  }

  // ===== ARMAZENAMENTO LOCAL =====

  static saveVoluntario(data) {
    const voluntarios = JSON.parse(localStorage.getItem('voluntarios') || '[]');
    voluntarios.push(data);
    localStorage.setItem('voluntarios', JSON.stringify(voluntarios));
  }

  static loadVoluntarios() {
    const voluntarios = JSON.parse(localStorage.getItem('voluntarios') || '[]');
    const contador = document.getElementById('contador-voluntarios');
    
    if (contador) {
      contador.textContent = voluntarios.length;
    }
  }

  static toggleVoluntariosList() {
    const lista = document.getElementById('voluntarios-lista');
    const btn = document.getElementById('btn-mostrar-voluntarios');
    const voluntarios = JSON.parse(localStorage.getItem('voluntarios') || '[]');

    if (lista.style.display === 'none') {
      if (voluntarios.length === 0) {
        lista.innerHTML = '<p style="color: #9E9E9E;">Nenhum voluntário cadastrado ainda.</p>';
      } else {
        lista.innerHTML = `
          <div style="display: grid; gap: 15px;">
            ${voluntarios.map(v => `
              <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; border-left: 4px solid #4CAF50;">
                <h4 style="margin: 0 0 10px 0; color: #2E7D32;">👤 ${v.nome}</h4>
                <p style="margin: 5px 0;"><strong>Email:</strong> ${v.email}</p>
                <p style="margin: 5px 0;"><strong>Telefone:</strong> ${v.telefone}</p>
                <p style="margin: 5px 0;"><strong>Idade:</strong> ${v.idade} anos</p>
                <p style="margin: 5px 0;"><strong>Cidade:</strong> ${v.cidade}/${v.estado}</p>
                <p style="margin: 5px 0;"><strong>Áreas de interesse:</strong> ${v.areas.map(a => this.getAreaLabel(a)).join(', ')}</p>
                <p style="margin: 5px 0; font-size: 0.85em; color: #666;"><strong>Cadastrado em:</strong> ${v.dataCadastro}</p>
                <button onclick="FormValidator.deleteVoluntario(${v.id})" style="margin-top: 10px; background: #D32F2F; padding: 8px 15px; border: none; border-radius: 6px; color: white; cursor: pointer;">🗑️ Excluir</button>
              </div>
            `).join('')}
          </div>
          <button onclick="FormValidator.clearAllVoluntarios()" style="margin-top: 20px; background: #F57C00; padding: 10px 20px; border: none; border-radius: 8px; color: white; cursor: pointer;">🗑️ Limpar Todos os Cadastros</button>
        `;
      }
      lista.style.display = 'block';
      btn.textContent = 'Ocultar Lista';
    } else {
      lista.style.display = 'none';
      btn.textContent = 'Ver Lista de Voluntários';
    }
  }

  static getAreaLabel(value) {
    const labels = {
      'educacao': 'Educação',
      'sustentabilidade': 'Sustentabilidade',
      'acao-social': 'Ação Social',
      'cultura': 'Cultura'
    };
    return labels[value] || value;
  }

  static deleteVoluntario(id) {
    if (confirm('Tem certeza que deseja excluir este voluntário?')) {
      let voluntarios = JSON.parse(localStorage.getItem('voluntarios') || '[]');
      voluntarios = voluntarios.filter(v => v.id !== id);
      localStorage.setItem('voluntarios', JSON.stringify(voluntarios));
      
      this.loadVoluntarios();
      this.toggleVoluntariosList();
      this.toggleVoluntariosList(); 
      
      this.showMessage('✅ Voluntário removido com sucesso!', 'success');
    }
  }

  static clearAllVoluntarios() {
    if (confirm('⚠️ ATENÇÃO! Isso irá remover TODOS os voluntários cadastrados. Deseja continuar?')) {
      localStorage.removeItem('voluntarios');
      this.loadVoluntarios();
      this.toggleVoluntariosList();
      this.toggleVoluntariosList(); 
      
      this.showMessage('✅ Todos os cadastros foram removidos!', 'success');
    }
  }

  

  static showMessage(message, type) {
    const msgDiv = document.getElementById('mensagem');
    msgDiv.innerHTML = `<div class="alert ${type}">${message}</div>`;
    
    
    setTimeout(() => {
      msgDiv.innerHTML = '';
    }, 5000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  
  const router = new SPARouter();

  
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.page) {
      router.navigateTo(e.state.page);
    }
  });

  console.log('🌿 Sistema ONG Vida em Rede inicializado com sucesso!');
});