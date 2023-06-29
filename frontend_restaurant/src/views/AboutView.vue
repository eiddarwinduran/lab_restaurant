<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/img/gallery/gallery-1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="@/assets/img/gallery/gallery-2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="@/assets/img/gallery/gallery-3.jpg" class="d-block w-100" alt="...">
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
  <div class="about">
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="@/assets/img/menu/1.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Pollo Frito</h5>
        <p class="card-text">Precio 25</p>
          <RouterLink to="/pedido/crear" class="btn btn-primary btn-lg">Pedir</RouterLink>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="@/assets/img/menu/2.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Hamburguesa</h5>
        <p class="card-text">Precio 8bs</p>
        <RouterLink to="/pedido/crear" class="btn btn-primary btn-lg">Pedir</RouterLink>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="@/assets/img/menu/3.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Tacos</h5>
        <p class="card-text">Precio 15bs</p>
        <RouterLink to="/pedido/crear" class="btn btn-primary btn-lg">Pedir</RouterLink>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="@/assets/img/menu/4.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Lafayette</h5>
        <p class="card-text">Precio 35bs</p>
        <RouterLink to="/pedido/crear" class="btn btn-primary btn-lg">Pedir</RouterLink>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="@/assets/img/menu/5.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Saltena</h5>
        <p class="card-text">Precio 5bs</p>
        <RouterLink to="/pedido/crear" class="btn btn-primary btn-lg">Pedir</RouterLink>
      </div>
    </div>
  </div>

</div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
