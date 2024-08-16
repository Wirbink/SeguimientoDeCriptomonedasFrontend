<template>
  <nav class="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CryptoCurrencies Project</span>
      </a>
      <div class="flex md:order-2 space-x-3 rtl:space-x-reverse">
        <router-link to="/" class="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
          Top 10
        </router-link>
        <router-link to="/favorites" class="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
          Favorites
        </router-link>
      </div>
    </div>
  </nav>
</template>
