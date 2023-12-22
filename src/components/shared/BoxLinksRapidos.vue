<template>
  <div class="base-links">
    <div class="card-link" v-for="link in links" :key="link.nome" :style="link.bg">
      <router-link :to="link.link">
      <div class="link-img">
        <img :src="link.icon" :alt="link.nome">
        {{ link.nome }}
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  setup() {
    const links = [
      {
        nome: 'EXPORTAR LISTAS',
        link: '/',
        icon: '/src/assets/img/exporta-link.png',
        bg: 'background: var(--color-background-header)'
      },
      {
        nome: 'VALORES PENDENTES',
        link: '/',
        icon: '/src/assets/img/money.png',
        bg: 'background: var(--color-background-header)'
      },
      {
        nome: 'OBJETIVOS',
        link: '/',
        icon: '/src/assets/img/objetivos-pagamento.png',
        bg: 'background: var(--color-bg-dourado)'
      },
      {
        nome: 'LISTA DE PAGAMENTOS',
        link: '/Gerenciador-de-pagamentos',
        icon: '/src/assets/img/lista-pagamento-link.png',
        bg: 'background: var(--color-bg-dourado)'
      },
    ]
    return {
      links
    }
  }
}

</script>


<style scoped>
.base-links {
  color: var(--vt-c-white);
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1280px;
  margin: 3rem auto;
  justify-content: space-evenly;
  position: relative;
}

.card-link {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  width: 568.957px;
  height: 172.588px;
  border-radius: 18.283px;
  background: #444;
  box-shadow: 0px 2.92523px 10.9696px 0px rgba(0, 0, 0, 0.25);
  margin: 25px auto;
  transition: all 0.1s ease-in-out;
}

.card-link:hover {
  filter: drop-shadow(2px 4px 6px black);
  margin-top: 20px;
  cursor: pointer;
  z-index: 15;
}

.link-img {
  display: flex;
  align-items: center;
}

.card-link a {
  text-decoration: none;
  color: white;
}

.card-link a:hover {
  color: #ececec;
}

.link-img img {
  margin-right: 20px;
  width: 28px;
}
</style>