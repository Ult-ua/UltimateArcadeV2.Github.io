// Game functionality
function openGame(name, url) {
  const newWindow = window.open("about:blank", "_blank");
  if (newWindow) {
    newWindow.document.write(`
      <html>
        <head>
          <title>${name}</title>
          <style>
            body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; }
            embed { width: 100%; height: 100%; border: none; }
          </style>
        </head>
        <body>
          <embed src="${url}" style="width: 100vw; height: 100vh;">
        </body>
      </html>
    `);
  }
}

// Fullscreen function for proxy (works the same as openGame)
function openFullscreen(name, url) {
  openGame(name, url); // Reuse the same function for consistency
}

// Links functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the game display if we're on the games or favorites page
  if (document.querySelector('.game-grid')) {
    updateGameDisplay();
  }

  // Only run this code on the links page
  if (!document.getElementById('links-container')) return;

  const links = [
    { title: "Frog Unixr", url: "https://frog.unixr.net/" },
    { title: "Frog Cliffixit", url: "https://frog.cliffixit.com/" },
    { title: "Frog Rebdg", url: "https://frog.rebdg.com/" },
    { title: "Skibidi", url: "https://skibidi.cfd/" },
    { title: "Math Home", url: "https://mathhome.work/" },
    { title: "Free Math", url: "https://freemath.site/" },
    { title: "Learn History", url: "https://learnhistory.lol/" },
    { title: "Mehhhh Online", url: "https://mehhhh.online/" },
    { title: "Kiddle", url: "https://kiddle.website/" },
    { title: "Just Some Homework", url: "https://justsomehomework.online/" },
    { title: "PowerPoint", url: "https://powerpoint.icu/" },
    { title: "Trigonometry", url: "https://trigonometry.site/" },
    { title: "Fun Math", url: "https://funmath.website/" },
    { title: "Study Central", url: "https://studycentral.xyz/" },
    { title: "Sunny's Gym", url: "http://sunnysgym.827266641.xyz/" },
    { title: "Sunny's Gym Contbot", url: "http://sunnysgym.contbot.com.br/" },
    { title: "Sunny's Gym Linux", url: "http://sunnysgym.homelinuxserver.org/" },
    { title: "Sunny the Dog", url: "http://sunnythedog.madhacker.biz/" },
    { title: "Sunny's Math Class", url: "http://sunnysmathclass.wikilegia.com/" },
    { title: "Bad Piggies", url: "https://badpiggies.global.ssl.fastly.net/" },
    { title: "Don't Block Please", url: "https://dontblockplease.global.fastly.net/" },
    { title: "Search Proxy", url: "https://searchprox.global.ssl.fastly.net/" },
    { title: "Study Academics", url: "https://study-academics.global.ssl.fastly.net/" },
    { title: "Rogo E", url: "https://rogo-e.global.ssl.fastly.net/" },
    { title: "Rogo F", url: "https://rogo-f.global.ssl.fastly.net/" },
    { title: "Rogo G", url: "https://rogo-g.global.ssl.fastly.net/" },
    { title: "Rogo H", url: "https://rogo-h.global.ssl.fastly.net/" },
    { title: "Rogo I", url: "https://rogo-i.global.ssl.fastly.net/" },
    { title: "Rogo J", url: "https://rogo-j.global.ssl.fastly.net/" },
    { title: "Rogo K", url: "https://rogo-k.global.ssl.fastly.net/" },
    { title: "Rogo L", url: "https://rogo-l.global.ssl.fastly.net/" },
    { title: "Rogo M", url: "https://rogo-m.global.ssl.fastly.net/" },
    { title: "Rogo N", url: "https://rogo-n.global.ssl.fastly.net/" },
    { title: "Rogo O", url: "https://rogo-o.global.ssl.fastly.net/" },
    { title: "Rogo P", url: "https://rogo-p.global.ssl.fastly.net/" },
    { title: "Rogo Q", url: "https://rogo-q.global.ssl.fastly.net/" },
    { title: "Rogo R", url: "https://rogo-r.global.ssl.fastly.net/" },
    { title: "Rogo S", url: "https://rogo-s.global.ssl.fastly.net/" },
    { title: "Rogo T", url: "https://rogo-t.global.ssl.fastly.net/" },
    { title: "Rogo U", url: "https://rogo-u.global.ssl.fastly.net/" },
    { title: "Rogo V", url: "https://rogo-v.global.ssl.fastly.net/" },
    { title: "Rogo W", url: "https://rogo-w.global.ssl.fastly.net/" },
    { title: "Rogo X", url: "https://rogo-x.global.ssl.fastly.net/" },
    { title: "Rogo Y", url: "https://rogo-y.global.ssl.fastly.net/" },
    { title: "Rogo Z", url: "https://rogo-z.global.ssl.fastly.net/" },
    { title: "Sunnys Pro", url: "https://sunnys.pro" },
    { title: "Sunnys Gym Shop", url: "https://sunnysgym.shop" },
    { title: "Sunnys GTM", url: "https://sunnysgtm.lol" },
    { title: "Sunnys Gym GitHub", url: "https://sunnysgym.github.io" },
    { title: "MZVY Bentral", url: "https://mzvy-bentral.global.ssl.fastly.net/" },
    { title: "US4 Pro", url: "https://us4-pro.global.ssl.fastly.net/" },
    { title: "ZVA 186", url: "https://zva-186.global.ssl.fastly.net/" },
    { title: "Minigun", url: "https://minigun.global.ssl.fastly.net/" },
    { title: "100 DC Members", url: "https://100-dc-members.global.ssl.fastly.net/" },
    { title: "I Hate", url: "https://i-hate.global.ssl.fastly.net/" },
    { title: "MES", url: "https://mes.global.ssl.fastly.net/" },
    { title: "Hi Astralogical", url: "https://hi-astralogical.global.ssl.fastly.net/" },
    { title: "Example Name", url: "https://example-name.global.ssl.fastly.net/" },
    { title: "Voucan", url: "https://voucan.global.ssl.fastly.net/" },
    { title: "US4 UBG", url: "https://us4-ubg.global.ssl.fastly.net/" },
    { title: "US4", url: "https://us4.global.ssl.fastly.net/" },
    { title: "Bill Sandoras Science Lessons", url: "https://billsandorassciencelessons.global.ssl.fastly.net/" },
    { title: "Assets Math", url: "https://assets.math.skibiditoi.lat/" },
    { title: "GoGuardian", url: "https://goguardian.jemix.sg/" },
    { title: "Sizzle Learning", url: "https://sizzlelearning.global.ssl.fastly.net/" },
    { title: "Chinese Characters", url: "https://xn--wg8hps4l.duckdns.org/" },
    { title: "The Leaker", url: "https://theremightbealeaker.teamoptimization.com/" },
    { title: "Here Again", url: "https://hereagain.decresenzo.com/" },
    { title: "Rayvon Party", url: "https://rayvon.was-at-the-diddy.party/" },
    { title: "Minecraft FR", url: "https://fr.minecraft.id.lv/" },
    { title: "Pete Zah", url: "https://petezahgames.com/" },
  { title: "Pete Zah", url: "https://supergisfire.com/" },
  { title: "Pete Zah", url: "https://petezahlowtaper.web.app/" },
  { title: "Pete Zah", url: "https://petezahgames8.web.app/" },
  { title: "Pete Zah", url: "https://petezah.netlify.app/" },
  { title: "Pete Zah", url: "https://petezah.global.ssl.fastly.net/" },
  { title: "Pete Zah", url: "https://petezahgames9.web.app/" },
  { title: "Pete Zah", url: "https://petezahgames10.web.app/" }
  ];

  const linksPerPage = 15;
  let currentPage = 1;
  const totalPages = Math.ceil(links.length / linksPerPage);

  const linksContainer = document.getElementById('links-container');
  const prevPageBtn = document.getElementById('prevPage');
  const nextPageBtn = document.getElementById('nextPage');
  const prevPageBtnBottom = document.getElementById('prevPageBottom');
  const nextPageBtnBottom = document.getElementById('nextPageBottom');
  const pageInfo = document.getElementById('pageInfo');
  const pageInfoBottom = document.getElementById('pageInfoBottom');

  function displayLinks(page) {
    linksContainer.innerHTML = '';

    const startIndex = (page - 1) * linksPerPage;
    const endIndex = Math.min(startIndex + linksPerPage, links.length);

    for (let i = startIndex; i < endIndex; i++) {
      const link = links[i];
      const linkElement = document.createElement('a');
      linkElement.href = link.url;
      linkElement.className = 'link-card';
      linkElement.target = '_blank';
      linkElement.textContent = link.url;

      linksContainer.appendChild(linkElement);
    }

    pageInfo.textContent = `Page ${page} of ${totalPages}`;
    pageInfoBottom.textContent = `Page ${page} of ${totalPages}`;

    prevPageBtn.disabled = page === 1;
    nextPageBtn.disabled = page === totalPages;
    prevPageBtnBottom.disabled = page === 1;
    nextPageBtnBottom.disabled = page === totalPages;

    if (page === 1) {
      prevPageBtn.style.opacity = '0.5';
      prevPageBtnBottom.style.opacity = '0.5';
    } else {
      prevPageBtn.style.opacity = '1';
      prevPageBtnBottom.style.opacity = '1';
    }

    if (page === totalPages) {
      nextPageBtn.style.opacity = '0.5';
      nextPageBtnBottom.style.opacity = '0.5';
    } else {
      nextPageBtn.style.opacity = '1';
      nextPageBtnBottom.style.opacity = '1';
    }
  }

  prevPageBtn.addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
      displayLinks(currentPage);
      window.scrollTo(0, 0);
    }
  });

  nextPageBtn.addEventListener('click', function() {
    if (currentPage < totalPages) {
      currentPage++;
      displayLinks(currentPage);
      window.scrollTo(0, 0);
    }
  });

  prevPageBtnBottom.addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
      displayLinks(currentPage);
      window.scrollTo(0, 0);
    }
  });

  nextPageBtnBottom.addEventListener('click', function() {
    if (currentPage < totalPages) {
      currentPage++;
      displayLinks(currentPage);
      window.scrollTo(0, 0);
    }
  });

  // Initialize with the first page
  displayLinks(currentPage);
});

// Initialize favorites on page load if we're on the games page
document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.game-grid')) {
    updateGameDisplay();
  }
});
