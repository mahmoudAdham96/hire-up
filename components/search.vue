<template>
  <div class=" bg-white flex items-center  shadow-lg rounded flex-row w-6/12 p-4">
    <div class="w-4/5 flex items-center ">
      <form action="" class="flex items-center">
        <div class=" w-3/5 flex ">
          <span class="pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input class="focus:outline-none " type="text" placeholder="Job tittle or keyword" />
        </div>

        <div class="w-2/5 flex">
          <span class="pr-4 ">
            <svg

              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
          <input class="focus:outline-none "  type="text" placeholder="Enter Locations"/>
        </div>
      </form>
    </div>
    <div class=" w-1/5 flex justify-end items-center">
      <button
        class="
          inline-flex
          font-medium
          items-center
          px-12
          py-4
          border border-transparent
          shadow-sm
          text-white
          bg-blue-600
          hover:bg-blue-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        Search
      </button>



    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
