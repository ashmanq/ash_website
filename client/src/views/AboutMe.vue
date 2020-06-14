<template lang="html">
  <div class="container">

    <div class="window">
      <window-title-bar title="About Me"></window-title-bar>

      <div class="about-me-details">
          <img class="about-me-image" src="/ashqurlogo.svg" alt="Logo">
        <h2 class="name">Ashir Qureshi</h2>
        <article class="">
          <h3 class="start-text">I want to make art!</h3>
          <p>Beautiful, functional and robust art!
            I believe in taking the tools available to you and bending them to your will as a person.</p>

          <p>I love technology, and have been involved with computing, programming and generally tinkering
            with computers for most of my life. I aspire to <b>continuously improve my skills</b> and to continue
            evolving as a software developer. There is no such thing as true perfection, it’s the journey
            towards perfection that matters most.</p>

          <p>My background is in <b>Engineering</b>, after graduating with a Masters I worked in the railway industry for
            9 years. After a turn of events…fate perhaps? I was given the opportunity to change careers. I have
            always loved engineering and always will, for me going into Software Development is just a new page on
            my journey as an engineer.</p>

          <p>From my time at CodeClan and before, I have learnt that the most important parts of being a developer are the
            abilities to continue growing my skills and to collaborating in teams. Please have a look at my <router-link :to="{ name: 'portfolio' }">portfolio</router-link> and if
            you are interested in having me work with you, you can contact me <router-link :to="{ name: 'contact' }">here.</router-link></p>
        </article>


        <p></p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'about-me',
}
</script>

<style lang="scss" scoped>
  .name {
    font-size: 1.2em;
  }
  .start-text {
    font-size: 1.8em;
    line-height: 2em;
    font-style:italic;
  }
  .about-me-details {
      background: $background-colour;
      padding:3em;
      text-align: left;
      // margin-bottom: 1em;
      border-radius: 0 0 1em 1em;
      line-height: 1.5em;
      font-size: 1.2em;
  }

  .about-me-image {
    height:150px;
  }

  @media only screen and (max-width: 600px) {

    .name {
      font-size: 1em;
    }
    
    .start-text {
      font-size: 1.6em;
      line-height: 1.5em;
    }

    .about-me-details {
        padding:1em;
        text-align: left;
        // margin-bottom: 1em;
        border-radius: 0 0 1em 1em;
        line-height: 1.2em;
        font-size: 1em;
    }

    .about-me-image {
      height:80px;
    }
  }
</style>
