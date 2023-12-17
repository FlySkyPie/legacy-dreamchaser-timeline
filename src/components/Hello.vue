 <template>
  <div>
    <p>{{ greeting }} World!</p>
    <p v-bind:class="{ good: isGood }"></p>
    <div v-text="rawHtml"></div>
    <p v-html="rawHtml">這邊會渲染出原始 HTML 結構</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    greeting: "Hello LOL",
    isGood: true,
    rawHtml: "<p>this is html</p>",
  }),
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
