<template>
  <nav ref="navRef" class="navbar fixed-navbar" aria-label="Navegação principal">
    <div class="navbar-inner">
      <a href="#sobre" class="brand" @click.prevent="handleNavClick('#sobre')">
        <i class="pi pi-code" aria-hidden="true"></i>
        <span>&lt;CaioPereira /&gt;</span>
      </a>

      <button
        type="button"
        class="menu-toggle"
        aria-controls="main-navigation"
        :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
        aria-label="Alternar menu de navegação"
        @click="toggleMobileMenu"
      >
        <i :class="mobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'" aria-hidden="true"></i>
      </button>

      <ul id="main-navigation" class="nav-list" :class="{ 'is-open': mobileMenuOpen }">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="item.href"
            class="nav-link"
            :class="{ 'nav-link-active': activeSection === item.href.slice(1) }"
            :aria-current="activeSection === item.href.slice(1) ? 'page' : undefined"
            @click.prevent="handleNavClick(item.href)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const navItems = [
  { id: 1, label: 'Sobre', href: '#sobre' },
  { id: 2, label: 'Projetos', href: '#projetos' },
  { id: 3, label: 'Skills', href: '#skills' },
  { id: 4, label: 'Experiência', href: '#experiencia' },
  { id: 5, label: 'Formação', href: '#formacao' },
];

const navRef = ref(null);
const activeSection = ref('sobre');
const mobileMenuOpen = ref(false);

function getNavbarHeight() {
  return navRef.value?.offsetHeight ?? 96;
}

function setNavigationOffset() {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.style.setProperty('--nav-offset', `${getNavbarHeight()}px`);
}

function scrollToSection(href) {
  if (typeof window === 'undefined') {
    return;
  }

  const element = document.querySelector(href);
  if (!element) {
    return;
  }

  const topOffset = getNavbarHeight() + 16;
  const targetPosition = element.getBoundingClientRect().top + window.scrollY - topOffset;
  window.scrollTo({ top: Math.max(targetPosition, 0), behavior: 'smooth' });

  if (window.history?.replaceState) {
    window.history.replaceState(null, '', href);
  }
}

function handleNavClick(href) {
  scrollToSection(href);
  mobileMenuOpen.value = false;
}

function updateActiveSection() {
  if (typeof window === 'undefined') {
    return;
  }

  const currentPosition = window.scrollY + getNavbarHeight() + 24;

  for (const sectionId of navItems.map((item) => item.href.slice(1))) {
    const sectionElement = document.getElementById(sectionId);
    if (!sectionElement) {
      continue;
    }

    const sectionTop = sectionElement.offsetTop;
    const sectionBottom = sectionTop + sectionElement.offsetHeight;
    if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
      activeSection.value = sectionId;
      return;
    }
  }
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function onResize() {
  setNavigationOffset();
  if (window.innerWidth > 900) {
    mobileMenuOpen.value = false;
  }
}

onMounted(() => {
  setNavigationOffset();
  updateActiveSection();
  window.addEventListener('scroll', updateActiveSection, { passive: true });
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
  window.removeEventListener('resize', onResize);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid var(--border-subtle);
  background: rgba(4, 6, 21, 0.88);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 28px rgba(2, 8, 24, 0.28);
}

.navbar-inner {
  width: min(1200px, 100%);
  min-height: 96px;
  margin: 0 auto;
  padding: 1rem clamp(1rem, 3vw, 2.25rem);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  color: var(--text-light);
  letter-spacing: 0.02em;
}

.brand i {
  color: var(--accent-color);
  font-size: 1.4rem;
}

.brand span {
  font-size: clamp(1.2rem, 2vw, 1.65rem);
  font-weight: 700;
}

.menu-toggle {
  margin-left: auto;
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  border: 1px solid var(--border-subtle);
  background: transparent;
  color: var(--text-light);
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.menu-toggle:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

.menu-toggle i {
  font-size: 1.1rem;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.35rem;
  flex: 1;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-base);
  text-decoration: none;
  border-radius: 10px;
  padding: 0.55rem 0.95rem;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.nav-link:hover {
  background: rgba(58, 134, 255, 0.2);
  color: var(--text-light);
  transform: translateY(-1px);
}

.nav-link:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

.nav-link-active {
  background: var(--accent-color);
  color: var(--text-light);
}

@media (max-width: 900px) {
  .navbar-inner {
    min-height: 84px;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .nav-list {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 0.25rem;
    margin-top: 0.25rem;
    padding: 0.6rem;
    border-radius: 12px;
    border: 1px solid var(--border-subtle);
    background: var(--surface-overlay);
  }

  .nav-list.is-open {
    display: flex;
  }

  .nav-link {
    justify-content: flex-start;
    width: 100%;
  }
}
</style>