<template>
  <div
    class="
      flex
      w-full
      flex-col
      justify-between
      items-center
      px-32
      bg-gray-100
      mt-28
      pb-28
      
    "
  >
    <h1
      class="
        text-gray-900 text-5xl
        font-extrabold
        leading-tight
        text-center
        mb-8
        mt-20
      "
    >
      Explore popular jobs
    </h1>

    <p class="text-gray-400 text-center text-2xl mb-12">
      Hireup is a free-of-charge community platform tailored to <br />
      the needs of growth startups.
    </p>

    <div class="flex justify-center grid grid-cols-3 gap-12 w-full">
      <div
        v-for="(job, i) in 12"
        :key="i"
        class="
          bg-white
          flex
          items-center
          flex-col
          shadow-sm
          rounded-lg
          w-full
          p-8
        "
      >
        <div class="flex justify-between w-full">
          <div class="flex w-2/4">
            <div
              class="
                h-16
                w-16
                flex
                justify-center
                items-center
                bg-white
                shadow-lg
                rounded-2xl
                mr-6
              "
            >
              <img
                class="h-12 w-12"
                src="https://www.dexigner.com/images/news/xxi/31385.jpg"
              />
            </div>
            <div>
              <h2 class="text-gray-900 text-xl font-extrabold mb-2">
                Mailchimp
              </h2>
              <p class="text-gray-400 text-center font-medium text-lg">
                2 days ago
              </p>
            </div>
          </div>
          <div class="w-2/4 justify-end flex items-baseline">
            <span
              class="
                bg-yellow-100
                font-medium
                rounded-lg
                text-yellow-500
                px-4
                py-2
              "
              >Design</span
            >
          </div>
        </div>

        <div class="flex justify-start w-full">
          <h1
            class="
              text-gray-900 text-3xl
              font-extrabold
              leading-tight
              mb-12
              mt-12

            "
            v-html="splitJobName(`Senior Product Designer - Singapora`)"
          >
            
          </h1>
        </div>

        <div class="flex">
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
              rounded-2xl
            "
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

methods: {
    splitJobName(jobName) {
        const JN = jobName.split(' ')
        let last =  JN.filter((value, index) => index !== 0 && index !== 1 )

        last = last.join(' ')
        return `${JN[0]} ${JN[1]} <br/> ${last} `
    }
},

}
</script>

<style scoped></style>
