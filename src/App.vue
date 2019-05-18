<template>
  <div id="app">
    <nav>
      <router-link class="logo" exact-active-class="active" to="/"><img src="./assets/jswad-logo.jpg" /></router-link>
      <ul>
        <li><router-link exact-active-class="active" to="./">Home</router-link></li>
        <li><router-link active-class="active" to="/practices">Practices</router-link></li>
        <li><router-link active-class="active" to="/clients">Clients</router-link></li>
        <li><router-link active-class="active" to="/about">About Us</router-link></li>
        <li><router-link active-class="active" to="/contact">Contact</router-link></li>
        <li><router-link active-class="active" to="/latest">Latest thinking</router-link></li>
      </ul>
    </nav>
    <transition name="router">
      <router-view/>
    </transition>
    <div class="container nopad footer">
      <router-link class="logo" active-class="active" to="/"><img src="./assets/jswad-logo.jpg" /></router-link>
      <ul>
        <li><router-link exact-active-class="active" to="/">Home</router-link></li>
        <li><router-link active-class="active" to="/practices">Practices</router-link></li>
        <li><router-link active-class="active" to="/clients">Clients</router-link></li>
        <li><router-link active-class="active" to="/about">About Us</router-link></li>
        <li><router-link active-class="active" to="/contact">Contact</router-link></li>
        <li><router-link active-class="active" to="/latest">Latest thinking</router-link></li>
      </ul>
      <p class="copy">©2018 JS. WAD. & Co. Associates</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
