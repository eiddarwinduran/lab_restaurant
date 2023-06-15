<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Resurante El Pollo loco</template>

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/car1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="@/assets/car2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="@/assets/car3.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="@/assets/car4.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Descripcion</template>
    
 <h5>A continuación te mostramos el detalle de todos nuestros premios y reconocimientos que hacen que seamos la primera empresa de comida rápida de Bolivia.</h5>
    <h5>somos especialistas diversos platos echo con pollo</h5>
    <h5 style="font-family: 'Times New Roman', Times, serif;">Dirección: Av. Jaime Mendoza Altura el Reloj</h5>
    <h5>Cel: 74419163 - 79178435</h5>
  </WelcomeItem>
</template>
