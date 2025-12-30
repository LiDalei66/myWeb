import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="container">
    <header class="header">
      <div>
        <h1>李大雷</h1>
        <p class="subtitle">前端学习中 · 个人主页</p>
      </div>

      <nav class="nav">
        <a href="#about">关于我</a>
        <a href="#projects">项目</a>
        <a href="#contact">联系</a>
      </nav>
    </header>

    <main class="main">
      <section id="about" class="section">
        <h2>关于我</h2>
        <p>
          你好！我是李大雷，正在学习前端开发。这个网站用 Vite 搭建，
          未来会持续更新我的项目与学习记录。
        </p>
      </section>

      <section id="projects" class="section">
        <h2>项目</h2>
        <div class="grid">
          <article class="card">
            <h3>项目 1：待添加</h3>
            <p>一句话描述你做了什么、解决了什么问题。</p>
            <div class="links">
              <a href="https://github.com/LiDalei66" target="_blank" rel="noreferrer">代码</a>
              <a href="#" aria-disabled="true">演示</a>
            </div>
          </article>

          <article class="card">
            <h3>项目 2：待添加</h3>
            <p>可以写用到的技术：HTML / CSS / JS / Vite 等。</p>
            <div class="links">
              <a href="https://github.com/LiDalei66" target="_blank" rel="noreferrer">代码</a>
              <a href="#" aria-disabled="true">演示</a>
            </div>
          </article>

          <article class="card">
            <h3>项目 3：待添加</h3>
            <p>后续你可以把作品截图放进项目卡片。</p>
            <div class="links">
              <a href="https://github.com/LiDalei66" target="_blank" rel="noreferrer">代码</a>
              <a href="#" aria-disabled="true">演示</a>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="section">
        <h2>联系</h2>
        <ul class="contact">
          <li>GitHub：<a href="https://github.com/LiDalei66" target="_blank" rel="noreferrer">LiDalei66</a></li>
          <li>Email：<a href="mailto:yourname@example.com">yourname@example.com</a></li>
        </ul>
      </section>
    </main>

    <footer class="footer">
      <span>© ${new Date().getFullYear()} LiDalei66</span>
    </footer>
  </div>
`;