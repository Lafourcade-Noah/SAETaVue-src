<script setup>

</script>

<template>
    <main class="font-poppins">
        <div class="relative w-full">
    <img src="/public/img/ezgif.com-optimize.gif" alt="Description du GIF" class="w-full h-96 object-cover">
    <div class="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
      <div class="text-center">
        <div class="">
          <img src="/img/TaVue_logo.png" alt="Logo" class="">
        </div>
        <div class="mb-4">
          <p class="text-xl font-semibold">Votre texte en dessous du logo</p>
        </div>
        <div>
            <RouterLink to="/personnalisation"> 
          <button class="border-2 border-white hover:bg-white text-w hover:text-black font-bold py-2 px-4 ">
            Personnaliser
          </button> </RouterLink>
          
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center border-black">
  <form class="w-full max-w-lg mt-8 ">
  <div class="flex justify-between">
    <h2 class="text-xl m-auto text-center font-bold font-poppins">SE CONNECTER</h2>
  </div>
  <div class="flex flex-col mt-4">
    <input type="email" class="w-full px-4 py-2 border-b-2 border-black" placeholder="Adresse email">
    <input type="password" class="w-full px-4 py-2 border-b-2 border-black" placeholder="Mot de passe">
    <button type="submit" class="w-full px-4 py-2 mt-4 bg-blue-500 text-white ">Se connecter</button>
  </div>
</form>
</div>


    </main>
</template>