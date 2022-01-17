<template>
  <footer class="flex flex-col bg-gray-900 px-32 py-12">
    <div class="flex justify-between border-b border-gray-50 pb-20">
      <div>
        <nuxt-link to="/" class="text-white font-bold text-xl"
          >Hireup.</nuxt-link
        >
      </div>

      <div class="">
        <ul class="flex space-x-12">
          <li class=" font-medium ">
            <nuxt-link class="text-white no-underline" to="">Home</nuxt-link>
          </li>
          <li class=" font-medium ">
            <nuxt-link class="text-white no-underline" to=""
              >How it works</nuxt-link
            >
          </li>
          <li class=" font-medium ">
            <nuxt-link class="text-white no-underline" to=""
              >About us</nuxt-link
            >
          </li>
          <li class=" font-medium ">
            <nuxt-link class="text-white no-underline" to="">Connect</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-between mt-12">
      <div>
        <p class="text-white text-sm ">&copy; Hireup, 2021 All rights reserved.</p>
      </div>

      <div>
        <ul class='flex space-x-12 '>
          <li><nuxt-link class="text-white no-underline" to="">Privacy policy</nuxt-link></li>
          <li><nuxt-link class="text-white no-underline" to="">Terms and conditions</nuxt-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped></style>
