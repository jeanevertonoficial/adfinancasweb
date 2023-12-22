<template>
    <h1 class="titulo-destaque">ARRECADAÇÃO TOTAL  ATÉ O MOMENTO</h1>
  <div class="base-links">
    <div class="card-link" v-for="link in links" :key="link.nome" :style="link.bg">
      <div class="titulo-card"> {{ link.nome }}</div>
      <div class="link-img">
        <img :src="link.icon" :alt="link.nome">
        {{ link.valor }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  setup() {
    const links = [
      {
        nome: 'VALOR TOTAL',
        link: '',
        icon: '/src/assets/img/money.png',
        bg: 'background: var(--color-bg-dourado)',
        valor: 'R$ 1.250,00'
      },
      {
        nome: 'VALORES DAS COMPRAS',
        link: '',
        icon: '/src/assets/img/money.png',
        bg: 'background: var(--color-background-header)',
        valor: 'R$ 8.500,00'
      }
    ]
    return {
      links
    }
  }
}

</script>


<style scoped>
.titulo-destaque {
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  display: flex;
  margin: auto;
  margin-top: 10rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: var(--vt-c-white);
}

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

.titulo-card {
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  position: relative;
  top: -20px;
}

.card-link {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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

.link-img img {
  margin-right: 20px;
  width: 28px;
}
</style>