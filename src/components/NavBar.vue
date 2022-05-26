<template>
  <div id="nav" class="header">
    <table class="hidden-table">
      <tbody>
        <tr class="hidden-table">
          <td>
            <p class="header-logo"><a href="/tree-id/">tree-id</a></p>
          </td>
          <td>
            <nav class="nav-global">
              <ul>
                <li><a href="/tree-id/">Reviews</a></li>
                <li><a href="/tree-id/styles">Styles</a></li>
                <li><a href="/tree-id/wanted">Wanted</a></li>
              </ul>
            </nav>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.header {
  display:block;
  padding-left:1em;
  padding-right:1em;
  background-color:#191919;
  border-bottom-style:solid;
  border-bottom-width:1px;
  border-color:#9f2a00;
}

.header-logo {
  font-family: monospace, monospace;
  margin:0px;
  padding-top:.75em;
  padding-bottom:.75em;
  font-size: 24px;
  font-weight: normal;
  color: #ffc9c7;
  animation: neon 0.1s ease-in-out infinite alternate;
}

.header-logo a:active, .header-logo a:link, .header-logo a:visited {
  color: #ffc9c7;
  text-decoration:none;
  font-weight: normal;
}

.header-logo a:hover {
  color: #ffa3a0;
  text-decoration:none;
  font-weight: bolder;
}

/*-- Animation header-logo --*/
@keyframes neon {
  from {
    text-shadow:
    0 0 6px rgba(227, 219, 201, 0.92),
    0 0 30px rgba(227, 219, 201, 0.34),
    0 0 12px rgba(242, 36, 28, 0.52),
    0 0 21px rgba(242, 36, 28, 0.92),
    0 0 34px rgba(242, 36, 28, 0.78),
    0 0 54px rgba(242, 36, 28, 0.92);
  }

  to {
    text-shadow:
    0 0 6px rgba(227, 219, 201, 0.98),
    0 0 30px rgba(227, 219, 201, 0.42),
    0 0 12px rgba(242, 36, 28, 0.58),
    0 0 22px rgba(242, 36, 28, 0.84),
    0 0 38px rgba(242, 36, 28, 0.88),
    0 0 60px rgba(242, 36, 28, 1);
  }
}

.nav-global {
  font-weight: bolder;
  margin-top:0;
  text-align:right;
  width:100%;
  float:right;
}

.nav-global a:active, .nav-global a:link, .nav-global a:visited {
  color:#eee;
  text-decoration:none;
  font-weight:bolder;
}

.nav-global a:hover {
  color:#bbb;
  text-decoration:none;
  font-weight:bolder;
}

.nav-global ul {
  list-style:none;
  list-style-image:none;
  margin:0;
  padding:0;
}

.nav-global li {
  display:inline-block;
  line-height:normal;
  letter-spacing:normal;
  margin-right:16px;
  word-spacing:normal;
  vertical-align:middle;
}

.hidden-table {
  border:0;
  margin:0;
  padding:0;
  border-spacing:0;
  width:90%;
}
</style>
