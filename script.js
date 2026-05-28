<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Portfólio Responsivo</title>
    <style>
        /* Configurações Globais */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f4f7f6;
            color: #333;
            line-height: 1.6;
        }

        /* Barra de Navegação */
        header {
            background-color: #2c3e50;
            color: #fff;
            padding: 1rem 2rem;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }

        nav ul {
            display: flex;
            list-style: none;
        }

        nav ul li {
            margin-left: 20px;
        }

        nav ul li a {
            color: #fff;
            text-decoration: none;
            transition: color 0.3s;
        }

        nav ul li a:hover {
            color: #1abc9c;
        }

        /* Seção Principal (Hero) */
        .hero {
            background: linear-gradient(135deg, #2c3e50, #3498db);
            color: white;
            text-align: center;
            padding: 100px 20px;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 10px;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 20px;
        }

        .btn {
            display: inline-block;
            background-color: #1abc9c;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            transition: background 0.3s;
        }

        .btn:hover {
            background-color: #16a085;
        }

        /* Seção de Conteúdo / Projetos */
        .container {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }

        .section-title {
            text-align: center;
            margin-bottom: 30px;
            font-size: 2rem;
        }

        /* O Segredo da Responsividade: Grid Flexível */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }

        .card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            text-align: center;
        }

        .card h3 {
            margin-bottom: 10px;
            color: #2c3e50;
        }

        /* Rodapé */
        footer {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
        }

        /* RESPONSIVIDADE (Ajustes para Celular) */
        @media (max-width: 768px) {
            .nav-container {
                flex-direction: column;
                gap: 10px;
            }

            nav ul li {
                margin: 0 10px;
            }

            .hero h1 {
                font-size: 2rem;
            }

            .hero p {
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>

    <header>
        <div class="nav-container">
            <div class="logo">MeuSite</div>
            <nav>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="hero">
        <h1>Olá, bem-vindo ao meu site!</h1>
        <p>Esta é uma página totalmente responsiva criada para funcionar em qualquer dispositivo.</p>
        <a href="#projetos" class="btn">Ver Meus Projetos</a>
    </section>

    <main class="container" id="projetos">
        <h2 class="section-title">Meus Projetos</h2>
        <div class="grid">
            <div class="card">
                <h3>Projeto 1</h3>
                <p>Descrição do seu primeiro projeto incrível. O layout se adapta sozinho se a tela diminuir.</p>
            </div>
            <div class="card">
                <h3>Projeto 2</h3>
                <p>Descrição do seu segundo projeto. No PC eles ficam lado a lado, no celular ficam empilhados.</p>
            </div>
            <div class="card">
                <h3>Projeto 3</h3>
                <p>Mais um projeto aqui. Você pode adicionar quantos cards quiser dentro dessa "grid".</p>
            </div>
        </div>
    </main>

    <footer id="contato">
        <p>&copy; 2026 - Criado por Mim e hospedado no GitHub Pages.</p>
    </footer>

</body>
</html>
