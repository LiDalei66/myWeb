import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="container">
    <header class="header">
      <div class="header-content">
        <div class="avatar">
          <div class="avatar-ring"></div>
          <span class="avatar-text">李</span>
        </div>
        <div class="header-info">
          <h1>李大雷</h1>
          <p class="subtitle">前端开发者  持续学习中</p>
        </div>
      </div>

      <nav class="nav">
        <a href="#about">关于</a>
        <a href="#projects">项目</a>
        <a href="#contact">联系</a>
      </nav>
    </header>

    <main class="main">
      <section id="about" class="section">
        <h2>关于我</h2>
        <div class="section-content">
          <p>
            你好！我是李大雷，正在探索前端开发的世界。这个网站基于 Vite 构建，
            采用现代化工作流并自动部署到 GitHub Pages。未来会持续更新我的项目作品与技术笔记。
          </p>
        </div>
      </section>

      <section id="projects" class="section">
        <h2>项目展示</h2>
        <div class="grid">
          <article class="card">
            <div class="card-header">
              <h3>个人主页</h3>
              <div class="tags">
                <span class="tag">Vite</span>
                <span class="tag">CSS</span>
              </div>
            </div>
            <p>基于 Vite 的现代化个人主页，支持响应式布局与暗色主题，通过 GitHub Actions 自动部署。</p>
            <div class="links">
              <a href="https://github.com/LiDalei66/myWeb" target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                代码
              </a>
              <a href="https://lidalei66.github.io/myWeb/" target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
                演示
              </a>
            </div>
          </article>

          <article class="card">
            <div class="card-header">
              <h3>项目 2</h3>
              <div class="tags">
                <span class="tag">HTML</span>
                <span class="tag">JS</span>
              </div>
            </div>
            <p>这里可以描述你的第二个项目：解决了什么问题、使用了哪些技术栈、有什么亮点。</p>
            <div class="links">
              <a href="https://github.com/LiDalei66" target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                代码
              </a>
              <a href="#" aria-disabled="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
                演示
              </a>
            </div>
          </article>

          <article class="card">
            <div class="card-header">
              <h3>项目 3</h3>
              <div class="tags">
                <span class="tag">React</span>
                <span class="tag">TS</span>
              </div>
            </div>
            <p>第三个项目的描述。后续可以加入项目截图、技术亮点、数据指标等内容。</p>
            <div class="links">
              <a href="https://github.com/LiDalei66" target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                代码
              </a>
              <a href="#" aria-disabled="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
                演示
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="section">
        <h2>联系方式</h2>
        <div class="contact-grid">
          <a href="https://github.com/LiDalei66" target="_blank" rel="noreferrer" class="contact-card">
            <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <div>
              <strong>GitHub</strong>
              <span>LiDalei66</span>
            </div>
          </a>

          <a href="mailto:yourname@example.com" class="contact-card">
            <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
            </svg>
            <div>
              <strong>Email</strong>
              <span>yourname@example.com</span>
            </div>
          </a>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p> ${new Date().getFullYear()} LiDalei66  用 Vite 构建  部署于 GitHub Pages</p>
    </footer>
  </div>
`;
