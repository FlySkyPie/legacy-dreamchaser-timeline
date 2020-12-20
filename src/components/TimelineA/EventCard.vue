 <template>
  <div class="event-card">
    <div class="datetime" v-text="date"></div>
    <div class="dot"></div>
    <h3 v-text="title"></h3>
    <p v-for="item in context" v-bind:key="item">{{ item }}</p>
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

<style lang="less">
@background: #252827;
@color-primary: #004ffc;
@color-light: white;
@spacing: 50px;

@date: 120px;
@dotborder: 4px;
@dot: 11px;
@line: 4px;

@font-title: "Noto Sans TC", sans-serif;

#timeline-type-a {
  .event-card {
    border-bottom: 1px dashed fade(@color-light, 10%);
    padding-bottom: (@spacing * 0.5);
    margin-bottom: @spacing;
    position: relative;

    .datetime {
      position: absolute;
      display: block;
      top: 0;
      left: (((@date * 0.6) + @spacing + @line + @dot + (@dotborder * 2)) * 1.5) *
        -1;
      color: fade(@color-light, 40%);
      text-align: right;
      font-weight: 100;
      font-size: 0.9em;
      min-width: @date;
      font-family: @font-title;
    }

    .dot {
      position: absolute;
      display: block;
      top: 0;
      box-shadow: 0 0 0 @dotborder fade(@color-primary, 100%);
      left: (@spacing + @line + (@dot * 0.35)) * -1;
      background: lighten(@background, 5%);
      border-radius: 50%;
      height: @dot;
      width: @dot;
      top: 5px;
    }

    &:last-of-type {
      padding-bottom: 0;
      margin-bottom: 0;
      border: none;
    }

    h3 {
      margin-bottom: 16px;
    }
  }
}
</style>
