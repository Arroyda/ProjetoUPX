document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = html;
                
                // Inicializa qualquer script necessário do header após carregar
                initHeaderScripts();
            } else {
                console.error('Elemento header-container não encontrado no DOM');
            }
        })
        .catch(error => {
            console.error('Falha ao carregar o header:', error);
            // Opcional: Mostrar mensagem de fallback para o usuário
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = '<p>Menu de navegação indisponível</p>';
            }
        });

    function initHeaderScripts() {
        // Adicione aqui qualquer inicialização necessária para scripts do header
        // Por exemplo: menus dropdown, eventos de clique, etc.
    }
});


document.addEventListener('DOMContentLoaded', function() {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const headerContainer = document.getElementById('footer-container');
            if (headerContainer) {
                headerContainer.innerHTML = html;
                
                // Inicializa qualquer script necessário do header após carregar
                initHeaderScripts();
            } else {
                console.error('Elemento header-container não encontrado no DOM');
            }
        })
        .catch(error => {
            console.error('Falha ao carregar o header:', error);
            // Opcional: Mostrar mensagem de fallback para o usuário
            const headerContainer = document.getElementById('footer-container');
            if (headerContainer) {
                headerContainer.innerHTML = '<p>Menu de navegação indisponível</p>';
            }
        });

    function initHeaderScripts() {
        // Adicione aqui qualquer inicialização necessária para scripts do header
        // Por exemplo: menus dropdown, eventos de clique, etc.
    }
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('calculator_power.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const headerContainer = document.getElementById('calculadora-container');
            if (headerContainer) {
                headerContainer.innerHTML = html;
                
                // Inicializa qualquer script necessário do header após carregar
                initHeaderScripts();
            } else {
                console.error('Elemento header-container não encontrado no DOM');
            }
        })
        .catch(error => {
            console.error('Falha ao carregar o header:', error);
            // Opcional: Mostrar mensagem de fallback para o usuário
            const headerContainer = document.getElementById('calculadora-container');
            if (headerContainer) {
                headerContainer.innerHTML = '<p>Menu de navegação indisponível</p>';
            }
        });

    function initHeaderScripts() {
        // Adicione aqui qualquer inicialização necessária para scripts do header
        // Por exemplo: menus dropdown, eventos de clique, etc.
    }
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('calculator_savings.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const headerContainer = document.getElementById('calculadora2-container');
            if (headerContainer) {
                headerContainer.innerHTML = html;
                
                // Inicializa qualquer script necessário do header após carregar
                initHeaderScripts();
            } else {
                console.error('Elemento header-container não encontrado no DOM');
            }
        })
        .catch(error => {
            console.error('Falha ao carregar o header:', error);
            // Opcional: Mostrar mensagem de fallback para o usuário
            const headerContainer = document.getElementById('calculadora2-container');
            if (headerContainer) {
                headerContainer.innerHTML = '<p>Menu de navegação indisponível</p>';
            }
        });

    function initHeaderScripts() {
        // Adicione aqui qualquer inicialização necessária para scripts do header
        // Por exemplo: menus dropdown, eventos de clique, etc.
    }
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('about.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const headerContainer = document.getElementById('sobre-container');
            if (headerContainer) {
                headerContainer.innerHTML = html;
                
                // Inicializa qualquer script necessário do header após carregar
                initHeaderScripts();
            } else {
                console.error('Elemento header-container não encontrado no DOM');
            }
        })
        .catch(error => {
            console.error('Falha ao carregar o header:', error);
            // Opcional: Mostrar mensagem de fallback para o usuário
            const headerContainer = document.getElementById('sobre-container');
            if (headerContainer) {
                headerContainer.innerHTML = '<p>Menu de navegação indisponível</p>';
            }
        });

    function initHeaderScripts() {
        // Adicione aqui qualquer inicialização necessária para scripts do header
        // Por exemplo: menus dropdown, eventos de clique, etc.
    }
});


fetch('about.html')
.then(response => response.text())
.then(data => {
    document.getElementById('sobre-container').innerHTML = data;
})
.catch(error => console.error('Erro ao carregar o footer:', error));



