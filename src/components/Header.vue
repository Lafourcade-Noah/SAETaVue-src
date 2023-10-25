<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <header class="bg-neutral-900 text-white py-4">
        <div class="container mx-auto flex items-center justify-between">
            <div class="flex items-center">
                <RouterLink to="/"> <img src="/img/TaVue_logo.png" alt="Logo" class=" w-24 "></RouterLink>
            </div>
            <div class="flex space-x-4">
                <RouterLink to="/personnalisation" class="hover:text-gray-400">Personnaliser ses lunettes </RouterLink>
                <RouterLink to="/" class="hover:text-gray-400">Produits</RouterLink>
                <RouterLink to="/" class="hover:text-gray-400">Contact</RouterLink>
            </div>
            <div class="flex items-center space-x-4">
                <div class="relative group">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 cursor-pointer" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 2a2 2 0 00-2 2h2a1 1 0 011 1v8a3 3 0 003 3h2a3 3 0 003-3V5a1 1 0 011-1h2a2 2 0 00-2-2H9z" />
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                    </svg>
                    <span
                        class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center group-hover:block hidden">1</span>
                </div>
                <div class="flex items-center space-x-2">
                    <img src="" alt="Photo de profil" class="w-8 h-8 rounded-full">
                    <span>Nom du Profil</span>
                </div>
            </div>
        </div>
    </header>
</template>