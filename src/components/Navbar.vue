<template>
  <nav class="navbar p-5 flex align-items-center justify-content-between surface-0 shadow-2 fixed-navbar" role="navigation" aria-label="Navegação principal">
    <div class="flex align-items-center gap-3" style="min-width: 220px;">
      <i class="pi pi-code text-3xl text-primary" aria-hidden="true"></i>
      <span class="font-bold text-2xl">&lt;CaioPereira /&gt;</span>
    </div>
    <ul class="flex gap-6 m-0 p-0 list-none justify-content-center flex-1" role="menubar">
      <li v-for="item in navItems" :key="item.id" role="none">
        <a 
          :href="item.href" 
          class="nav-link" 
          :class="{ 'nav-link-active': activeSection === item.href.substring(1) }"
          @click.prevent="scrollToSection(item.href)"
          role="menuitem"
          :aria-current="activeSection === item.href.substring(1) ? 'page' : false"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navItems = [
  { id: 1, label: 'Sobre', href: '#sobre' },
  { id: 2, label: 'Projetos', href: '#projetos' },
  { id: 3, label: 'Skills', href: '#skills' },
  { id: 4, label: 'Experiência', href: '#experiencia' },
  { id: 5, label: 'Formação', href: '#formacao' },
];

const activeSection = ref('sobre');

function scrollToSection(href) {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function updateActiveSection() {
  const sections = navItems.map(item => item.href.substring(1));
  const scrollPosition = window.scrollY + 200;
  
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = sectionId;
        break;
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
});
</script>

<style scoped>
.navbar {
  min-height: 110px;
  background: var(--primary-color) !important;
  color: var(--text-light);
  box-shadow: 0 4px 24px 0 #1b2a4133;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  z-index: 1000;
}
.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}
.navbar ul {
  flex: 1;
  justify-content: center;
}
.navbar span {
  font-size: 2.5rem;
  color: var(--text-light);
}
.nav-link {
  font-size: 1.35rem;
  font-weight: 500;
  color: var(--text-light) !important;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  text-decoration: none !important;
  font-family: inherit;
  position: relative;
}
.nav-link:hover, .nav-link:focus {
  background: var(--accent-color);
  color: var(--text-light) !important;
  text-decoration: none !important;
  outline: none;
}
.nav-link:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(58, 134, 255, 0.3);
}
.nav-link-active {
  background: var(--accent-color);
  color: var(--text-light) !important;
  position: relative;
}
.nav-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 2px;
  background: var(--text-light);
  border-radius: 1px;
}
@media (max-width: 900px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 80px;
  }
  .navbar ul {
    gap: 1rem;
  }
  .navbar span {
    font-size: 1.5rem;
  }
  .nav-link {
    font-size: 1.1rem;
  }
}
</style> 