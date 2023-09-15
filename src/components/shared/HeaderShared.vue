<template>
  <div class="header">
    <div class="container-princiapl">
      <nav>
      <div class="logo">
        <img src="@/assets/img/logo-principal.png" alt="logo">
      </div>
      </nav>
      <nav>
      <div class="div_menu">
        <div class="base-menu" @click="toggle">
          <div class="div-img-nome">
            <img class="icon-menu" src="@/assets/img/menu-ld.png" alt="menu">
            <span class="menu-nome">Menu</span>
          </div>
          <ul class="menu-open" v-if="menuOpen">
            <li v-for="menuItem in menu" :key="menuItem.nome" class="li-menu">
              <a :href="menuItem.to">
                {{ menuItem.label }}
                <img :src="menuItem.img" :alt="menuItem.label">
              </a>
            </li>
          </ul>
        </div>
        <div class="base-login">
          <div class="div-img-nome">
            <img class="icon-menu" src="@/assets/img/user.png" alt="login">
            <span class="login-nome">Login</span>
          </div>
        </div>
      </div>
      </nav>
    </div>
  </div>
</template>

<script>

import {ref} from "vue";

export default {
  name: "HeaderShared",
  data() {
    return {
      menu: [
        {nome: "word", label: "BAIXAR LISTA EM WORD", img: './src/assets/img/word.png', to: '/baixar-word'},
        {nome: "excel", label: "BAIXAR LISTA EM EXCEL", img: './src/assets/img/excel.png', to: '/baixar-excel'},
        {nome: "inicio", label: "VOLTAR AO INICIO", img: './src/assets/img/sair.png', to: '/'},
      ]
    }
  },
  setup() {
    const menuOpen = ref(false);
    const toggle = () => {
      menuOpen.value = !menuOpen.value;
    }
    return {
      menuOpen,
      toggle
    }
  }
}
</script>

<style>
.header {
  background: var(--color-background-header);
  color: var(--vt-c-white);
  width: 100%;
  height: 85px;
}
.icon-menu {
  width: 18px;
}

.base-menu {
  cursor: pointer;
}

.menu-nome {
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.login-nome {
  font-size: 14px;
}

.login-nome, .menu-nome {
  margin-left: 5px;
}

.container-princiapl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1280px;
  margin: auto;
  height: 100%;
}

.div_menu {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.menu-open {
  position: relative;
  display: flex;
  top: 10rem;
  width: 423px;
  max-width: 423px;
  height: 299px;
  max-height: 299px;
  background: var(--vt-c-white);
  color: var(--color-bg-dourado);
  border-radius: 24px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  justify-content: center;
}

.li-menu {
  border-bottom: 2px solid;
  padding-bottom: 13px;
  margin: 15px 32px;
  width: 85%;
  transition: all 0.2s;
}

.li-menu a:hover, .li-menu:hover {
  color: var(--color-background-principal) !important;
}

.li-menu img {
  float: right;
}
.li-menu a {
  text-decoration: none;
  color: var(--color-bg-dourado);
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}
.base-login {
  margin-left: 50px;
  font-weight: inherit;
}
</style>