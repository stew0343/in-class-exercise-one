<template>
  <div class="hello">
    <div class="input-wrapper">
      <input type="text" name="firstName" v-bind:class="inputValidationClass" v-model="textInput">
      <div v-if="inlineValidationClass" class="red-text">You have exceeded 50 characters!</div>
    </div>
    <div class="button-wrapper">
      <button v-bind:disabled="isButtonDisabled">Submit</button>

    </div>
  </div>
</template>

<script src="./HelloWorld.js">
// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./HelloWorld.css" scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
