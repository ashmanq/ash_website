<template lang="html">
  <div class="container">
    <h1>Contact Me</h1>

    <div class="container">
      <form class="form" action="index.html" method="post">
        <label for="name">Name:</label>
        <input type="text" name="name" value="" required>

        <label for="email">Email:</label>
        <input type="email" name="email" value="" required>

        <label for="message">Message:</label>
        <textarea name="message" rows="8" cols="80" required></textarea>
        <label for=""></label>
        <input id="sub-btn" class="btn" type="submit" name="submit" value="submit">
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: column;
}

.form {
  display: grid;
  align-self: center;
  width: 50%;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
}
.form label {
  font-size: 1.5em;
  margin-right:1em;
}
.form input[type=text],input[type=email],input[type=submit],textarea {
  font-size: 1.5em;
  font-family: $primary-font;
  margin:0.2em;
}

#sub-btn{
  width:10em;
  margin:1em auto 1em auto;

}
</style>
