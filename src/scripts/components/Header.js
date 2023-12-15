app.component("header-list", {
 template: /*html*/ `
    <header :class="{darkmode: toggleDarkMode}">
      <div class="nav-logo">Nav Logo</div>
      <div class="nav-menu">Menu</div>
      <nav>
        <ul>
          <li v-for="(page, index) in pages" :key="index" class="nav-item">

            <a 
            class="nav-link"
            :class="{active: activePage == index}" 
            :title="'This link goes to this page: ' + page.name" 
            @click.prevent="activePage = index"
           >{{page.name}}
            </a>

          </li>
           <button @click.prevent="toggleDarkMode = !toggleDarkMode">Theme</button>
        </ul>
       
      </nav>
    </header>

    <h1>{{pages[activePage].content}}</h1>
  `,
 data() {
  return {
   activePage: 0,
   toggleDarkMode: false,
   pages: [
    { name: "Home", url: "index.html", content: "Hello guys this is Home" },
    { name: "Menu", url: "menu.html", content: "Hello guys this is Menu" },
    {
     name: "Projects",
     url: "project.html",
     content: "Hello guys this is Projects",
    },
   ],
  };
 },
 method: {},
});
