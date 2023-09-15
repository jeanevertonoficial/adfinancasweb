<template>
  <HeaderShared/>
  <CardsDestaques/>
  <BoxListaColaboradores/>
  <BoxLinksRapidos/>
  <BoxArrecadacao/>
</template>

<script>
import HeaderShared from "@/components/shared/HeaderShared.vue";
import CardsDestaques from "@/components/shared/CardsDestaques.vue";
import BoxLinksRapidos from "@/components/shared/BoxLinksRapidos.vue";
import BoxArrecadacao from "@/components/shared/BoxArrecadacao.vue";
import BoxListaColaboradores from "@/components/shared/BoxListaColaboradores.vue";
export default {
  name: "DashboardComponet",
  components: {BoxListaColaboradores, BoxArrecadacao, BoxLinksRapidos, CardsDestaques, HeaderShared}
}
</script>

<style scoped>

</style>