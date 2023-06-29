<script setup lang="ts">
import type { Pedido } from '@/models/pedido'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var pedido = ref<Pedido[]>([])

async function getPedido() {
  pedido.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/pedido/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el pedido?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getPedido())
  }
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
        <li class="breadcrumb-item active" aria-current="page">Pedido</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Pedidos</h2>
      <div class="col-12">
        <RouterLink to="/pedido/crear">Crear Nuevo Pedido</RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre Cliente</th>
            <th scope="col">Direccion</th>
            <th scope="col">Nombre del Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Costo Total</th>
            <th scope="col">Editar/Cancelar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pedidos, index) in pedido.values()" :key="pedidos.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ pedidos.nombreC }}</td>
            <td>{{ pedidos.direccion }}</td>
            <td>{{ pedidos.nombreProducto}}</td>
            <td>{{ pedidos.cantidad}}</td>
            <td>{{ }}</td>
            <td>
              <button class="btn btn-link" @click="toEdit(pedidos.id)" ><i class="bi bi-pencil-fill"></i></button>
              <button class="btn btn-link" @click="toDelete(pedidos.id)" ><i class="bi bi-trash3"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>