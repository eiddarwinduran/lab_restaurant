<script setup lang="ts">
import { useRoute } from "vue-router";
const location = useRoute();
import { useAuthStore } from "@/stores/index";
const authStore = useAuthStore();
</script>
<template>

  <nav
    class="navbar navbar-expand-lg"
    :style="location.path != '/' ? 'background-color: black !important' : ''"
  >
    <div class="container">
      <RouterLink to="/" class="navbar-brand"> El Pollo Loco </RouterLink>

      <RouterLink v-if="!authStore.token" to="/login" class="btn custom-btn d-lg-none ms-auto me-4">
        Iniciar Sesión
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav align-items-lg-center ms-auto me-lg-5">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link click-scroll">Inicio</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink to="/about" class="nav-link click-scroll"
              >Platillos</RouterLink
            >
          </li>

          <li class="nav-item">
            <RouterLink v-if="authStore.token" to="/pedido" class="nav-link click-scroll"
              >Pedidos Realizados</RouterLink
            >
          </li>

          <li class="nav-item">
            <a class="nav-link click-scroll" href="#section_4">Fotos</a>
          </li>
        </ul>

        <RouterLink v-if="!authStore.token" to="/login" class="btn custom-btn d-lg-block d-none">
          Iniciar Sesión
        </RouterLink>
        <a v-else @click="authStore.logout()" class="btn custom-btn d-lg-block d-none">
          Cerrar Sesión
        </a>
      </div>
    </div>
  </nav>
</template>
