 <template>
  <div class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <p class="timeline-event-thumbnail" v-text="date"></p>
      <h3 v-text="title"></h3>
      <p v-for="item in context" v-bind:key="item">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: "65Million B.C.",
    },
    title: {
      type: String,
      default: "Dinosaurs Roamed the Earth",
    },
    context: {
      type: Array,
      default: ["RAWWWWWWRRR 🐢🦂"],
    },
  },
};
</script>

<style lang="scss">
@import "compass/css3";

/* Variables */
$color-1: black;
$color-2: white;
$color-3: rgb(168, 50, 121);

#timeline-type-b {
  .timeline-event {
    position: relative;

    &:hover {
      .timeline-event-icon {
        @include rotate(-45deg);
        background-color: $color-3;
      }

      .timeline-event-thumbnail {
        @include box-shadow(inset 40em 0 0 0 $color-3);
      }
    }
  }

  .timeline-event-copy {
    padding: 2em;
    position: relative;
    top: -1.875em;
    left: 4em;
    width: 80%;

    h3 {
      font-size: 1.75em;
    }

    h4 {
      font-size: 1.2em;
      margin-bottom: 1.2em;
    }

    strong {
      font-weight: 700;
    }

    p:not(.timeline-event-thumbnail) {
      padding-bottom: 1.2em;
    }
  }

  .timeline-event-icon {
    @include transition(transform 0.2s ease-in);
    @include rotate(45deg);

    background-color: $color-1;
    outline: 10px solid $color-2;
    display: block;
    margin: 0.5em 0.5em 0.5em -0.5em;
    position: absolute;
    top: 0;
    left: 2em;
    width: 1em;
    height: 1em;
  }

  .timeline-event-thumbnail {
    @include transition(box-shadow 0.5s ease-in 0.1s);
    color: $color-2;
    font-size: 0.8em;

    background-color: $color-1;
    @include box-shadow(inset 0 0 0 0em #ef795a);
    display: inline-block;
    margin-bottom: 1.2em;
    padding: 0.25em 1em 0.2em 1em;
  }
}
</style>
