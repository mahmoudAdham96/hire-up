<template>
    <nav class="flex w-full justify-between items-center px-32 h-20 border-b border-gray-300 ">
        <div>
            <nuxt-link to="/" class=" text-blue-700 font-bold text-xl ">Hireup.</nuxt-link>
        </div>
        <div>
            <ul class="flex space-x-8 ">
                <li class=" font-semibold text-gray-800 "><nuxt-link class='h-20 flex items-center'  to="/">Home</nuxt-link></li>
                <li class=" font-semibold text-gray-800 "><nuxt-link class='h-20 flex items-center' to="#">How it works</nuxt-link></li>
                <li class=" font-semibold text-gray-800 "><nuxt-link class='h-20 flex items-center' to="#">Post a job</nuxt-link></li>
                <li class=" font-semibold text-gray-800 "><nuxt-link class='h-20 flex items-center' to="#">Blog</nuxt-link></li>
            </ul>
        </div>
        <div>
            <ul class='flex space-x-8 items-center'>
                <li class=" font-semibold text-gray-800 "><nuxt-link to="#">Browse Jobs</nuxt-link></li>
                <li>
                    
                <nuxt-link to="#"  class="inline-flex font-medium items-center px-12 py-4 border border-transparent shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Login
                </nuxt-link></li>
            </ul>
        </div>
    </nav>
</template>         

<script>
    export default {
        
    }
</script>

<style >

nav ul a.nuxt-link-exact-active {
  @apply text-blue-700 border-b border-blue-700;
}

</style>