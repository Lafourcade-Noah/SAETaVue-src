import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import compte from '../views/compte.vue'
import personnalisation from '../views/personnalisation.vue'

// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
const pb = new PocketBase("http://127.0.0.1:8090");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/compte', name: 'compte', component: compte },
    { path: '/personnalisation', name: 'personnalisation', component: personnalisation },

  ]
})

// Vérification de route demandée
// to : où il veut aller
// from : d'où il vient 
// next : s'il peut y aller
// router.beforeEach( (to, from, next) =>{
//   if (to.name == "home" || to.name == "compte") {
//     // Si la page demandée est "home" ou "compte", on autorise l'accès
//     next();
//   } else {
//     // Sinon, on vérifie si l'utilisateur est connecté
//     if (pb.authStore.model != null) {
//       // Utilisateur connecté => OK
//       next();
//     } else {
//       // Utilisateur non connecté, redirection sur la page d'acceuil
//       router.push({ name: "compte" });
//     }
//   }
// });

export default router
