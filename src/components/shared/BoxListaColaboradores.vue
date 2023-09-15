<template>
  <div class="base-colaboraores">
    <div class="card-colaboradores">
      <div>
        <h1>LISTA DE PARTICIPANTES</h1>
        <p>LISTA PARA ORGANIZAÇÃO DE COMPRAS FEITA POR AJUDA DE VOLUNTÁRIOS</p>
      </div>
      <section>
        <div class="lista-acompanhamento">Lista de acompanhamento</div>
        <div class="box">
          <div class="linha-do-tempo">
            <div class="overlap-group">
              <span class="line"></span>
              <div class="group"><img class="vector-2" src="@/assets/img/seta-linha.png" /></div>
            </div>
            <div class="overlap">
              <span class="line"></span>
            <div class="group"><img class="vector-3" src="@/assets/img/compras-linha.png" /></div>
            </div>
              <div class="vector-wrapper"><img class="vector" src="@/assets/img/money-linha.png" /></div>
          </div>
        </div>
        <div class="campanha-ajuda">Campanha de ajuda</div>
      </section>
      <button class="btn-colaboradores">VER COLABORADORES</button>
    </div>
  </div>
</template>

<script>

export default {

}

</script>


<style scoped>
.lista-acompanhamento, .campanha-ajuda {
  font-weight: 800;
  color: #444444;
  font-size: 14px;
  letter-spacing: 0;
  line-height: normal;
}

.lista-acompanhamento {
  float: right;
  position: relative;
  bottom: 15px;
  right: 40px;
}

.campanha-ajuda {
  float: left;
  left: 40px;
  top: -5px;
  position: relative;
}
.box {
  position: relative;
  width: 697px;
  height: 52px;
}

.box .linha-do-tempo {
  width: 697px;
  height: 52px;
  top: 0;
  left: 0;
}

.box .overlap-group {
  top: 0;
  left: 47px;
  position: absolute;
  width: 325px;
  height: 47px;
}

.box .line {
  top: 24px;
  position: absolute;
  width: 100%;
  max-width: 282px;
  height: 5px;
  background: var(--color-bg-dourado);
  left: 0;
}

.box .group {
  top: 0;
  left: 278px;
  position: absolute;
  width: 47px;
  height: 47px;
  background-color: #d9d9d9;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box .vector {
  position: absolute;
}

.box .overlap {
  left: 372px;
  position: absolute;
  width: 325px;
  height: 47px;
}

.box .img {
  top: 19px;
  position: absolute;
  width: 282px;
  height: 5px;
  left: 0;
}

.box .vector-2 {
  position: absolute;
}

.box .vector-wrapper {
  top: 5px;
  left: 0;
  position: absolute;
  width: 47px;
  height: 47px;
  background-color: #d9d9d9;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box .vector-3 {
  position: absolute;
}



.base-colaboraores {
  width: 1280px;
  margin: 15rem auto;
}

.card-colaboradores {
  width: 100%;
  max-width: 778px;
  height: 526px;
  margin: auto;
  border-radius: 24px;
  background: #FFF;
  display: flex;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.card-colaboradores:hover {
  filter: drop-shadow(2px 4px 6px black);
}

.card-colaboradores h1 {
  color: #444;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  display: flex;
  line-height: normal;
  justify-content: center;
}

.card-colaboradores p {
  color: #444;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
}

.btn-colaboradores {
  color: #FFF;
  font-size: 26px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  display: inline-flex;
  padding: 14px 21px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  background: #855A39;
  border: none;
}
</style>