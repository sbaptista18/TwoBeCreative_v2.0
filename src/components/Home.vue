<template>
  <div id="content-wrapper">
    <servicos></servicos>
    <equipa></equipa>
    <servicos-info></servicos-info>
    <portfolio></portfolio>
    <contactos></contactos>
  </div>
</template>

<script>
import Servicos from './home/Servicos';
import Portfolio from './home/Portfolio';
import Equipa from './home/Equipa';
import ServicosInfo from './home/Servicos-info';
import Contactos from './home/Contactos';

export default {
  components: {
    servicos: Servicos,
    portfolio: Portfolio,
    equipa: Equipa,
    servicosInfo: ServicosInfo,
    contactos: Contactos
  }
};
</script>

<style lang="scss" scoped>
#content-wrapper {
  height: auto;
  background-color: #fff;
}
</style>