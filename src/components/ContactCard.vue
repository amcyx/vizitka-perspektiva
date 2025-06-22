<template>
  <div class="bg-white p-4 rounded shadow text-left space-y-3 text-gray-800">
    <p><strong>Название:</strong> АНО «ОТКРЫТИЕ ПЕРСПЕКТИВЫ»</p>
    <p><strong>Телефон:</strong> +7 (999) 999-99-99</p>
    <p><strong>Email:</strong> info@perspektiva.ru</p>
    <p>
      <strong>Сайт:</strong>
      <a
        href="......."
        class="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        perspektiva.ru
      </a>
    </p>
    <p><strong>Адрес:</strong> Варшавское шоссе, 33, Москва</p>

    <!-- QR-код -->
    <div class="mt-6">
      <QRCode />
    </div>
  </div>
</template>

<script setup>
import QRCode from './QRCode.vue'
</script>
