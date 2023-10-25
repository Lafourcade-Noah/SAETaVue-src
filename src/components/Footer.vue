<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <footer class="bg-neutral-900 text-white py-6">
    <div class="container mx-auto flex flex-wrap">
      <div class="w-full lg:w-1/2 p-4">
        <RouterLink to="/personnalisation"> <button
            class="border-2 border-white hover:bg-white text-w flex  hover:text-black font-bold py-2 px-4 mb-5">
            Personnaliser
          </button> </RouterLink>
        <p>TaVue, une marque de lunettes française,
          offre une expérience de personnalisation élégante. Avec des montures, verres et branches entièrement
          personnalisables, TaVue reflète l'artisanat français. Son site convivial propose un configurateur de
          produits et une interface visuelle captivante pour des lunettes élégantes et uniques.</p>
      </div>

      <div class="w-full lg:w-1/2 p-4 flex flex-col">
        <div class="">
          <img src="/img/TaVue_logo.png" alt="Logo" class=" mx-auto ">
        </div>
        <ul class="flex flex-wrap  text-sm font-medium  mt-auto">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">Mention légale</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">A propos</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Suivez nous :</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>