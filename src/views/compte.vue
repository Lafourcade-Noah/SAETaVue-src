<script setup> 
    import { RouterLink, RouterView } from 'vue-router'
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter()
    
    import PocketBase from 'pocketbase'
    const pb = new PocketBase("http://127.0.0.1:8090");
    
    let isConnected = ref(false)
    let user = ref('')
    let psw = ref('')

    let currentUser = ref(null)
    let avatar = ref(null)  
    
    onMounted(async() => {  
        refresh()  
    })  


    const refresh = ()=>{
        if(pb.authStore.isValid){
            currentUser.value = pb.authStore.model
            isConnected.value = true

            avatar.value =
            "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
            +currentUser.value.collectionId     // Id ou name de la collection concernée
            +"/"
            +currentUser.value.id               // Id de l'utilisateur connecté
            +"/"
            +currentUser.value.avatar           // Nom fichier image pocketbase
            +"?thumb=100x100"                   // Taille par défaut
        }
    }


    const connect = async()=>{
        try{
            const authData = await pb.collection('users')
            .authWithPassword(user.value, psw.value)
            refresh()
        }catch(error){
            alert("Erreur d'identification : mauvais login et/ou mot de passe")
            user.value = ""
            psw.value = ""
        }
    }


    const deconnect = ()=>{
        pb.authStore.clear()
        isConnected.value=false
        avatar.value = null
        router.push({name:"home"})
    }


    

</script>


<template>
    <form v-if="!pb.authStore.isValid" class="flex flex-col gap-8 h-screen items-center justify-center">
        <input class="py-2 px-4 rounded-sm" type="mail" placeholder="email" v-model="user">
        <input class="py-2 px-4 rounded-sm" type="password" placeholder="mot de passe" name="" id="" v-model="psw">
        <button class="py-4 px-8 bg-black text-white" type="submit" @click.prevent="connect">Se Connecter</button>
        <p class="text-black">{{ currentUser.name }}</p>
    </form>
    <div v-else class="flex flex-col gap-8 h-screen items-center justify-center">
        <button class="py-4 px-8 bg-black text-white" type="submit" @click="deconnect">Se Deconnecter</button>
    </div>
</template>