<template>
  <section class="w-2/4 p-10">
    <div class="flex flex-col flex-1 h-full p-6 overflow-auto bg-gray-200">
      <h2 class="mx-3 my-2 text-xl font-bold text-center text-gray-700">Chat Window</h2>
      <div class="flex-grow">
        <!-- Bot Message -->
        <div class="flex max-w-sm mb-2">
          <div class="px-3 py-4 bg-gray-100 rounded">
            <p class="text-sm font-bold text-teal">Chatbot Assistant</p>
            <p class="mt-1 text-sm">Hi everyone! Glad you could join! I am making a new movie.</p>
            <!-- <p class="mt-1 text-xs text-right text-grey-dark">12:45 pm</p> -->
          </div>
        </div>
        <!-- User Message -->
        <div class="flex justify-end mb-2">
          <div class="px-3 py-4 bg-white rounded">
            <p class="mt-1 text-sm">Hi guys.</p>
            <!-- <p class="mt-1 text-xs text-right text-grey-dark">12:45 pm</p> -->
          </div>
        </div>
      </div>
      <!-- Input -->
      <div class="flex items-center py-4 bg-grey-lighter">
        <div class="flex flex-1">
          <input
            class="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none"
            type="text"
          />
          <!-- Button -->
          <!-- TODO: Add icon instead of Odeslat text -->
          <button
            type="button"
            class="px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
          >Odeslat</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

