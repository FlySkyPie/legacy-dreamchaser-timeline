 <template>
  <div id="timeline-type-b">
    <div class="timeline-title"><h1 v-text="title"></h1></div>
    <div class="timeline-list">
      <event-card
        v-for="item in events"
        v-bind="item"
        v-bind:key="item.id"
      ></event-card>
    </div>
  </div>
</template>

<script>
import EventCard from "./EventCard.vue";
import eventList from "../../Model/history";

export default {
  components: {
    "event-card": EventCard,
  },
  props: {
    title: {
      type: String,
      default: "國立虎尾科技大學追夢者自主學習社群簡史",
    },
  },
  data: () => ({
    events: eventList,
  }),
};
</script>

<style lang="scss">
@import "compass/css3";
//@import "../../../node_modules/compass-mixins/lib/compass";

/* Variables */
$color-1: black;
$color-2: white;
$color-3: rgb(168, 50, 121);

/* Fonts */
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");

#timeline-type-b {
  font-family: "Noto Sans TC", sans-serif;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.05em;
  * {
    @include box-sizing(border-box);
  }

  ul {
    list-style: none;
  }

  .timeline-title {
    text-align: center;
    margin-top: 25px;
    h1 {
      font-family: "Saira", sans-serif;
      letter-spacing: 1.5px;
      font-weight: 400;
      font-size: 2.4em;
    }
  }

  .timeline-list {
    margin: 4em auto;
    position: relative;
    max-width: 46em;

    &:before {
      background-color: $color-1;
      content: "";
      margin-left: -1px;
      position: absolute;
      top: 0;
      left: 2em;
      width: 2px;
      height: 100%;
    }
  }
}
</style>
