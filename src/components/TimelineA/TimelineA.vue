 <template>
  <div id="timeline-type-a">
    <h1 v-text="title"></h1>
    <div class="timeline">
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

<style lang="less">
/* Import */
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");

/* Variables */
@background: #252827;

@color-primary: #004ffc;
@color-light: white;
@color-dim: #6c6d6d;
@spacing: 50px;
@radius: 4px;

@date: 120px;
@dotborder: 4px;
@dot: 11px;
@line: 4px;

@font-title: "Noto Sans TC", sans-serif;
@font-text: "Noto Sans TC", sans-serif;

#timeline-type-a {
  background: @background;
  font-size: 16px;
  padding-top: 32px;
  display: inline-block;

  text-align: center;
  p {
    font-weight: 300;
  }

  strong {
    font-weight: 600;
  }

  h1 {
    font-family: @font-title;
    letter-spacing: 1.5px;
    color: @color-light;
    font-weight: 400;
    font-size: 2.4em;
  }

  .timeline {
    border-left: @line solid @color-primary;
    border-bottom-right-radius: @radius;
    border-top-right-radius: @radius;
    background: fade(@color-light, 3%);
    color: fade(white, 80%);
    font-family: @font-text;
    margin: @spacing auto;
    letter-spacing: 0.5px;
    position: relative;
    line-height: 1.4em;
    font-size: 1.03em;
    padding: @spacing;
    list-style: none;
    text-align: left;
    font-weight: 100;
    max-width: 40%;

    h1 {
      font-family: @font-title;
      letter-spacing: 1.5px;
      font-weight: 100;
      font-size: 1.4em;
    }

    h2,
    h3 {
      font-family: @font-title;
      letter-spacing: 1.5px;
      font-weight: 400;
      font-size: 1.4em;
    }
  }
}
</style>
