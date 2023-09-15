<template>
  <header-shared/>
  <section class="titulo-colaboradores">
    <div class="base-cima">
      <div class="text-wrapper">COLABORADORES</div>
      <div class="total-mensal">
        <img class="vector" src="src/assets/img/money.png"/>
        <div class="div">R$ 550,00</div>
        <div class="text-wrapper-2">TOTAL MENSAL</div>
      </div>
    </div>
  </section>
  <section class="card-colaboradores">
    <div class="frame" v-for="(dado) in dados" :key="dado.id">
      <div class="div">
        <div class="div-2"></div>
        <div class="div-wrapper">
          <div class="text-wrapper">{{dado.id}}</div>
        </div>
      </div>
      <div class="div-3">
        <div class="div-4">
          <img class="vector" src="src/assets/img/user-targ.png"/>
          <div class="text-wrapper-2">{{ dado.nome }}</div>
        </div>
        <div class="div-5">
          <img class="img" src="src/assets/img/money.png"/>
          <div class="text-wrapper-3">R$ {{dado.valor}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderShared from "@/components/shared/HeaderShared.vue";

export default {
  name: "GerenciadorDePagamentosComponent",
  components: {HeaderShared},
  data() {
    return {
      dados: []
    }
  },
  methods: {
    async getDados() {
      const result = await fetch('http://localhost:3000/tabela_colaboradores');
      this.dados = await result.json()
      console.log(this.dados)
    }
  },
  mounted() {
    this.getDados()
  }
}
</script>

<style scoped>
section.titulo-colaboradores {
  margin: auto;
  max-width: 1280px;
  width: 100%;
  position: relative;
  display: flex;
  top: 5rem;
}

.base-cima {
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  width: 100%;
  justify-content: space-between;
}

.base-cima .text-wrapper {
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: "Roboto-ExtraBold", Helvetica;
  font-weight: 800;
  color: #855a39;
  font-size: 24px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.base-cima .total-mensal {
  position: relative;
  width: 295px;
  height: 87px;
  margin-right: -4px;
}

.base-cima .vector {
  position: absolute;
  width: 43px;
  height: 30px;
  top: 50px;
  left: 0;
}

.base-cima .div {
  position: absolute;
  top: 39px;
  left: 102px;
  font-family: "Roboto-ExtraBold", Helvetica;
  font-weight: 800;
  color: #ffffff;
  font-size: 40.9px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.base-cima .text-wrapper-2 {
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Roboto-ExtraBold", Helvetica;
  font-weight: 800;
  color: #855a39;
  font-size: 24px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.frame {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  width: 100%;
  margin-bottom: 25px;
}

.frame .div {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  flex: 0 0 auto;
}

.frame .div-2 {
  position: relative;
  max-width: 1320px;
  width: 1320px;
  height: 135px;
  background-color: #444444;
  border-radius: 24px;
  box-shadow: 0px 4px 15px #00000040;
}

.frame .div-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 39px 104px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #855a39;
  border-radius: 24px 0px 0px 24px;
}

.frame .text-wrapper {
  position: relative;
  margin-top: -1px;
  font-family: "Roboto-ExtraBold", Helvetica;
  font-weight: 800;
  color: #ffffff;
  font-size: 40.9px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  text-transform: uppercase;
}

img.vector {
  top: 10px;
  position: inherit;
}

.frame .div-3 {
  display: flex;
  gap: 652px;
  position: absolute;
  top: 40px;
  left: 275px;
}

.frame .div-4 {
  position: relative;
  width: 70px;
}

.frame .text-wrapper-2 {
  position: absolute;
  top: -1px;
  left: 97px;
  font-family: "Roboto-ExtraBold", Helvetica;
  font-weight: 800;
  color: #ffffff;
  font-size: 40.9px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  text-transform: uppercase;
}

.frame .div-5 {
  position: relative;
  width: 268px;
  height: 48px;
}

.frame .img {
  position: absolute;
  width: 43px;
  height: 30px;
  top: 15px;
  left: -8px;
}

.frame .text-wrapper-3 {
  position: absolute;
  top: -1px;
  left: 102px;
  font-family: "Roboto-ExtraBold", Helvetica;
  font-weight: 800;
  color: #ffffff;
  font-size: 40.9px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}


section.card-colaboradores {
  position: relative;
  display: flex;
  max-width: 1280px;
  margin: auto;
  top: 7rem;
  flex-direction: column;
}

</style>