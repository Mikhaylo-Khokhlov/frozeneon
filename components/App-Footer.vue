<template>
  <v-footer class="footer">
    <v-container>
      <p class="mb-0 footer-info">Mikhail Khokhlov</p>
      <a
        class="footer-info"
        target="_blanck"
        href="https://github.com/Mikhaylo-Khokhlov"
        >Git page</a
      >
      <p class="mb-0 footer-info">&copy; {{ new Date().getFullYear() }}</p>
    </v-container>
  </v-footer>
</template>

<style lang="scss" scoped>
.footer {
  max-width: 1768px;
  width: 100%;
  background-color: #bf360c;
  margin: 0 auto;

  &-info {
    font-size: 24px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    display: block;
  }
}
</style>
