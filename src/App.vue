<template>
  <main class="min-h-screen bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: 'url(/src/assets/bg.jpg)' }">
    <!-- Шапка -->
    <header class="bg-white/80 backdrop-blur-md shadow-md p-4 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <img src="/src/assets/logo.jpg" alt="Логотип" class="w-10 h-10" />
        <h1 class="text-lg font-bold text-primary">{{ t('title') }}</h1>
      </div>
      <nav class="flex gap-6 text-sm font-medium text-gray-700">
        <a href="#about" class="hover:text-accent">{{ t('nav.about') }}</a>
        <a href="#support" class="hover:text-accent">{{ t('nav.support') }}</a>
        <a href="#mission" class="hover:text-accent">{{ t('nav.mission') }}</a>
        <a href="#projects" class="hover:text-accent">{{ t('nav.projects') }}</a>
        <a href="#contacts" class="hover:text-accent">{{ t('nav.contacts') }}</a>
      </nav>
    </header>

    <!-- Контент -->
    <div class="backdrop-blur-sm bg-white/90 max-w-3xl mx-auto mt-8 p-6 md:p-10 rounded-xl shadow-md text-gray-800 animate-fade-in">
      <img src="/src/assets/team.jpg" alt="Наша команда" class="rounded-md mx-auto mb-6 max-w-md w-full shadow" />

      <!-- О нас -->
      <section id="about" class="space-y-4 mb-8">
        <h2 class="text-xl font-bold">🏛 {{ t('sections.about.title') }}</h2>
        <p>{{ t('sections.about.intro') }}</p>
        <ul class="list-disc pl-6">
          <li>{{ t('sections.about.org1') }}</li>
          <li>{{ t('sections.about.org2') }}</li>
        </ul>
        <p>{{ t('sections.about.mission') }}</p>
      </section>

      <!-- Поддержка -->
      <section id="support" class="space-y-4 mb-8">
        <h2 class="text-xl font-bold">💬 {{ t('sections.support.title') }}</h2>
        <ul class="list-disc pl-6">
          <li>{{ t('sections.support.item1') }}</li>
          <li>{{ t('sections.support.item2') }}</li>
          <li>{{ t('sections.support.item3') }}</li>
          <li>{{ t('sections.support.item4') }}</li>
        </ul>
      </section>

      <!-- Философия -->
      <section id="mission" class="space-y-4 mb-8">
        <h2 class="text-xl font-bold">🌱 {{ t('sections.mission.title') }}</h2>
        <p>{{ t('sections.mission.p1') }}</p>
        <p>{{ t('sections.mission.p2') }}</p>
      </section>

      <!-- Проекты -->
      <section id="projects" class="space-y-4 mb-8">
        <h2 class="text-xl font-bold text-accent">🛠 {{ t('sections.projects.title') }}</h2>
        <ul class="list-disc pl-6 text-gray-700">
          <li v-for="project in t('sections.projects.list')" :key="project.name">
            {{ project.year }} — {{ project.name }} ({{ project.role }})
          </li>
        </ul>
      </section>

      <!-- Контакты -->
      <section id="contacts" class="space-y-4">
        <h2 class="text-xl font-bold">📞 {{ t('sections.contacts.title') }}</h2>
        <p><strong>{{ t('sections.contacts.name') }}</strong> {{ t('title') }}</p>
        <p><strong>{{ t('sections.contacts.phone') }}</strong> +7 (999) 123-45-67</p>
        <p><strong>Email:</strong> info@perspektiva.ru</p>
        <p><strong>{{ t('sections.contacts.site') }}</strong> <a href="https://perspektiva.ru" class="text-accent underline" target="_blank">perspektiva.ru</a></p>
        <p><strong>{{ t('sections.contacts.address') }}</strong> Москва, ул. Примерная, д. 10</p>
        <QRCode />

        <!-- Переключатель языка -->
        <button @click="switchLocale" class="text-sm text-accent underline mt-4">
          {{ locale === 'ru' ? 'ENGLISH' : 'РУССКИЙ' }}
        </button>
      </section>
    </div>
  </main>
</template>

<script setup>
import QRCode from './components/QRCode.vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const switchLocale = () => {
  locale.value = locale.value === 'ru' ? 'en' : 'ru'
}
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
</style>
