<script setup lang="ts"></script>

<template>
  <section class="hero-section" id="section_1">
    <div class="section-overlay"></div>

    

    <div class="video-wrap">
      <video autoplay="" loop="" muted="" class="custom-video" poster="">
        <source src="@/assets/video/elpollo.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>
    </div>
  </section>

  <section class="about-section section-padding" id="section_2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
          <div class="services-info">
            <h2 class="text-white mb-4">Historia</h2>

            <p class="text-white">
              Todo comenzó cuando Juan Francisco Ochoa Zazueta decidió comercializar la receta de pollo asado creada por su madre, doña Conchita. Así, en enero de 1975, en Guasave, Sinaloa, abrió sus puertas el primer restaurante El Pollo Loco. Con una inversión inicial de $15,000 pesos (que en esos años equivalían a unos $2,000 dólares) y dos trabajadores, Juan Francisco (mejor conocido como “Pancho”) fundó lo que hoy se ha vuelto famosa cadena restaurantera internacional. Junto con él estaba Flérida, su esposa, encargada del aspecto administrativo del negocio.
            </p>

            <p class="text-white">
              Dos años después, Jaime, un hermano radicado en San Luis Potosí, decide probar suerte instalando un restaurante provisional en la feria del estado. Gracias a la inusitada aceptación que tuvo, en 1977 se inauguró la segunda sucursal en esta ciudad y no pasó mucho tiempo para que ambos hermanos se dieran una idea del crecimiento que podría tener el negocio. Pancho y Jaime decidieron registrar la marca, diseñaron un logotipo y con el resto de sus hermanos y otros familiares comenzaron a darle forma a la cadena.
            </p>
          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="about-text-wrap">
            <img
              src="@/assets/images/pres.jpeg"
              class="about-image img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="artists-section section-padding" id="section_3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <h2 class="mb-4">Restaurant</h2>
        </div>

        <div class="col-lg-5 col-12">
          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img
                src="@/assets/img/about.jpg"
                class="artists-image img-fluid"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-12">
          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img
                src="@/assets/img/about-2.jpg"
                class="artists-image img-fluid"
              />
            </div>
          </div>

          <div class="artists-thumb">
            <img
              src="@/assets/img/reservation.jpg"
              class="artists-image img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact-section section-padding" id="section_6">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 mx-auto">
          <h2 class="text-center mb-4">Ubicacion</h2>

          <nav class="d-flex justify-content-center">
            <div
              class="nav nav-tabs align-items-baseline justify-content-center"
              id="nav-tab"
              role="tablist"
            >

              <button
                class="nav-link"
                id="nav-ContactMap-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-ContactMap"
                type="button"
                role="tab"
                aria-controls="nav-ContactMap"
                aria-selected="false"
              >
                <h5>Google Maps</h5>
              </button>
            </div>
          </nav>

          <div class="tab-content shadow-lg mt-5" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-ContactForm"
              role="tabpanel"
              aria-labelledby="nav-ContactForm-tab"
            >
              <form
                class="custom-form contact-form mb-5 mb-lg-0"
                action="#"
                method="post"
                role="form"
              >
              </form>
            </div>

            <div
              class="tab-pane fade"
              id="nav-ContactMap"
              role="tabpanel"
              aria-labelledby="nav-ContactMap-tab"
            >
              <iframe
                class="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.469402870927!2d120.94861466021855!3d14.106066818082482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite%2C%20Philippines!5e1!3m2!1sen!2smy!4v1670344209509!5m2!1sen!2smy"
                width="100%"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <!-- You can easily copy the embed code from Google Maps -> Share -> Embed a map // -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
