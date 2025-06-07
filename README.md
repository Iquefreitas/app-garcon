AppGarçon - Sistema de Gerenciamento para Restaurantes

Sistema já publicado: https://app-garcon-web.vercel.app/
 * Vercel
 * Neon (BD)

Funcionalidades
* Sistema de Pedidos em tempo real (Via garçon com Smartphone) - (React Native)
* Gestão de Mesas e comandas ( Sistema de Mesas em aberto para cozinha/Caixa visualizar) - (Web / App Smartphone)

Sistema completo para gestão de pedidos em restaurantes com interfaces otimizadas para garçons e cozinha.

🚀 Tecnologias Utilizadas

Frontend
Next.js 14 (App Router)

TypeScript - Tipagem estática

CSS Modules - Estilização modularizada

Lucide React
Sonner - Notificações (toast)

Next Navigation - Roteamento

Backend
API REST - Integração com backend

Cookies-next - Gerenciamento de sessão

JWT - Autenticação

Funcionalidades Principais
✅ Autenticação segura com JWT
✅ Navegação entre categorias e produtos
✅ Logout com limpeza de cookies
✅ Design responsivo
✅ Feedback visual com toasts

🛠️ Estrutura do Código
Componente Header (header.tsx)
tsx
// Cabeçalho com navegação e logout
<header>
  <Link href="/dashboard">
    <Image src={logoImg} alt="Logo" width={140} height={50}/>
  </Link>
  <nav>
    <Link href="/dashboard/category">Categoria</Link>
    <Link href="/dashboard/product">Produto</Link>
    <button onClick={handleLogout}>
      <LogOutIcon size={24}/>
    </button>
  </nav>
</header>
Página de Login (page.tsx)
tsx
// Formulário de autenticação
<form action={handleLogin}>
  <input type="email" name="email" required/>
  <input type="password" name="password" required/>
  <button type="submit">Acessar</button>
</form>
<Link href="/signup">Cadastre-se</Link>
🎨 Estilização
Variáveis CSS para cores (--dark-900, --green-900)

Efeitos hover suaves

Layout responsivo

scss
.headerContainer {
  height: 6rem;
  background: var(--dark-900);
  nav a:hover {
    color: #FEBC5A;
    transform: scale(1.05);
  }
}
⚙️ Como Executar
Instale as dependências:

bash
npm install
Configure as variáveis de ambiente:

bash
cp .env.example .env.local
Inicie o servidor:

bash
npm run dev
📌 Melhorias Futuras
Dashboard administrativo

Dark mode

Internacionalização

📄 Licença
João Freitas
