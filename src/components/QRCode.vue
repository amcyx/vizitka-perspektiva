<template>
  <div class="text-center mt-6">
    <h3 class="text-lg font-bold mb-2">📲 QR-код для визитки</h3>
    <qrcode-vue
      :value="url"
      :size="160"
      level="H"
      class="mx-auto shadow-lg rounded bg-white p-2"
    />
    <p class="mt-2 text-sm text-gray-500">Отсканируйте, чтобы открыть визитку</p>
  </div>
</template>

<script setup>
import QrcodeVue from 'qrcode.vue'

// Получаем текущий URL страницы
const url = window.location.href
</script>
