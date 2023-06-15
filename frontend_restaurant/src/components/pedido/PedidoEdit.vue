<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const direccion = ref('')
const nombreProducto = ref('')
const cantidad = ref('')
const id = router.currentRoute.value.params['id']

async function editarPedido() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      direccion: direccion.value,
      nombreProducto: nombreProducto.value,
      cantidad: cantidad.value
    })
    .then(() => router.push('/pedido'))
}

async function getPedido() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(direccion.value = response.data.direccion), (nombreProducto.value = response.data.nombreProducto),(cantidad.value = response.data.cantidad)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getPedido()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/pedido">Pedidos</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Pedido</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarPedido">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="direccion" placeholder="Direccion" required />
          <label for="nombre">Direccion</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="nombreProducto"
            placeholder="Nombre del pedido"
            required
          />
          <label for="nacionalidad">Nombre del pedido</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="cantidad"
            placeholder="Cantidad"
            required
          />
          <label for="nacionalidad">Cantidad</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">Guardar</button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>


<style></style>
