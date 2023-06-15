<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const direccion = ref('')
const nombreProducto = ref('')
const cantidad = ref('')

async function crearPedido() {
  await http
    .post(ENDPOINT, { direccion: direccion.value,
      nombreProducto: nombreProducto.value,
      cantidad: cantidad.value })
    .then(() => router.push('/pedido'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/pedido">Pedido</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Pedido</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearPedido">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="direccion" placeholder="direccion" required />
          <label for="direccion">Direccion</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="nombreProducto"
            placeholder="nombreProducto"
            required
          />
          <label for="nombreProducto">Nombre del producto</label>
        </div>
        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            v-model="cantidad"
            placeholder="cantidad"
            required
          />
          <label for="cantidad">Cantidad</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">Crear</button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
