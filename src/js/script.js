document.addEventListener('DOMContentLoaded', ()=>{
// Declarando as variaveis com o DOM 
const loginForm = document.getElementById('form-login');
const mensagem = document.getElementById('message');
// querySelector pega a primeira classe que encontrar, no caso com ".video-container"
const video = document.querySelector('.video-container');
// const video = document.querySelectorAll('.video-container');
const loginContainer = document.getElementById('login-container');
const toggleButton = document.getElementById('btnToggle');
const logoffButton = document.getElementById('logoffButton');


// Verifica se há um usuário logado no Local Storage
const usuarioLogado = localStorage.getItem('usuario');
const senhaLogado = localStorage.getItem('senha');

if (usuarioLogado && senhaLogado) {
    // Se estiver na página de login, oculta o formulário
    if (loginForm) {
        loginForm.style.display = 'none';
    }
    // Se messagem existe, exibe a mensagem de boas-vindas
    if (mensagem) {
        mensagem.textContent = `Bem-vindo(a), ${usuarioLogado}!`;
        mensagem.className = 'message success';
    }
}

//verifica se o usuario e senha estão corretas
if (loginForm) {
    loginForm.addEventListener('submit', (e)=> {
        e.preventDefault();

        const username = document.getElementById('username').value;//recebe o id username na variavel
        const password = document.getElementById('password').value; //recebe o id password na variavel

        if (username === 'admin' && password === '123456') {
            window.location="teste.html"; //caso o usuario e senha estejam ok direciona para a pagina que deseja
            if (mensagem) {
                mensagem.textContent = 'Login realizado com sucesso!';
                mensagem.className = 'message success';
            }
            localStorage.setItem('usuario', username); // Salva o nome de usuário
            localStorage.setItem('senha',password); // Salva a senha do usuário
        } else {
            if (mensagem) {
                mensagem.textContent = 'Usuário ou senha incorretos.';
                mensagem.className = 'message error';
            }
        }

        loginForm.reset();
    });
}


//troca o video de lugar
    if (toggleButton) {
        toggleButton.addEventListener('click', ()=> {
            const videoOrder = window.getComputedStyle(video).order;
            video.style.order = window.getComputedStyle(loginContainer).order;
            loginContainer.style.order = videoOrder;
        });
    }
//faz o logoff e remove o usuario da sessão
    if (logoffButton && mensagem) {
        logoffButton.addEventListener('click', ()=> {
            localStorage.removeItem('usuario'); // remove o nome do usuário
            localStorage.removeItem('senha'); // remove a senha do usuário
            mensagem.textContent = 'Logoff realizado com sucesso!';
            mensagem.className = 'message success';
            //em caso de sucesso do login chama a página index.html
            setTimeout(()=>{
                window.location.href = 'index.html';
            }, 1500);
        });
    }
});