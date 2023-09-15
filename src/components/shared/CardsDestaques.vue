<template>
  <div>
    <h1 class="titulo-destaque">NOSSOS DESTAQUES</h1>
    <div class="container-card">
      <div class="base-card">
        <svg class="base-img direito" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 252" fill="none">
          <path d="M0.143921 0.345276L391.816 122.928V251.639H0.143921V0.345276Z" fill="#444444"/>
        </svg>
        <div class="descricao">
          <div class="card-destaque-titulo">MESA YAMAHA</div>
          <div class="card-destaque-valor">
            <span class="simbulo">R$</span>
            <span class="valor">8.500,00</span>
          </div>
        </div>
      </div>
      <div class="base-card">
        <svg class="base-img meio" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 252" fill="none">
          <path d="M0.143921 0.345276L391.816 122.928V251.639H0.143921V0.345276Z" fill="#444444"/>
        </svg>
        <div class="descricao desc-meio">
          <div class="card-destaque-titulo">MESA YAMAHA</div>
          <div class="card-destaque-valor">
            <span class="simbulo">R$</span>
            <span class="valor">8.500,00</span>
          </div>
        </div>
      </div>
      <div class="base-card">
        <svg class="base-img esquerda" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 252" fill="none">
          <path d="M0.143921 0.345276L391.816 122.928V251.639H0.143921V0.345276Z" fill="#444444"/>
        </svg>
        <div class="descricao">
          <div class="card-destaque-titulo">MESA YAMAHA</div>
          <div class="card-destaque-valor">
            <span class="simbulo">R$</span>
            <span class="valor">8.500,00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.titulo-destaque {
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  display: flex;
  margin: auto;
  margin-top: 5rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: var(--vt-c-white);
}

.base-card {
  display: inline-flex;
  flex-direction: column;
  box-shadow: 0px 3.46612px 12.99796px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 375px;
  height: 473.992px;

  float: left;
  border-radius: 20.797px;
  background: url('@/assets/img/mesa.png'), transparent 50% / cover no-repeat;

  transition: transform 0.3s ease;
  margin: 10px;
}

.base-card:nth-child(2) {
  margin-top: -100px;
}

svg.base-img {
  width: 378px;
  height: 280px;
  margin-left: -1px;
  position: relative;
  bottom: -14rem;
}

svg.base-img.meio {
  position: absolute;
  top: 36.1rem;
}

.container-card {
  width: 90%;
  max-width: 1280px;
  margin: 15rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.descricao {
  position: absolute;
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 27rem;
  width: 391px;
}

.descricao:nth-child(2n), .descricao:nth-child(3n) {
  top: 50rem !important;
}

.descricao.desc-meio {
  top: 43rem !important;
}

.card-destaque-titulo {
  margin-bottom: 20px;
}

.card-destaque-titulo, .simbulo {
  color: #FFF;
  font-size: 20.797px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.valor {
  color: #FFF;
  font-size: 34.661px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 10px;
}

.card-destaque-valor {
  display: flex;
  align-items: center;
}
</style>