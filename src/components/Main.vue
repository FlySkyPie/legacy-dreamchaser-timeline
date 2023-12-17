 <template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" app>
      <v-list-item class="px-2">
        <v-list-item-avatar color="primary" v-show="mini">
          追
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-subtitle> 國立虎尾科技大學 </v-list-item-subtitle>
          <v-list-item-title class="title">
            追夢者自主學習社群
          </v-list-item-title>
          <v-list-item-subtitle> </v-list-item-subtitle>
        </v-list-item-content>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :disabled="!item.enable"
          v-on:click="route(item.title)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <timeline-a v-show="lookAt === '社群簡史（A版）'"></timeline-a>
      <timeline-b v-show="lookAt === '社群簡史（B版）'"></timeline-b>
      <regulation-editor
        v-show="lookAt === '簡易法規編輯器'"
      ></regulation-editor>
      <!-- <v-container fluid>   </v-container> -->
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import TimelineA from "../components/TimelineA/TimelineA.vue";
import TimelineB from "../components/TimelineB/TimelineB.vue";
import RegulationEditor from "../components/RegulationEditor/RegulationEditor.vue";

export default {
  components: {
    "timeline-a": TimelineA,
    "timeline-b": TimelineB,
    "regulation-editor": RegulationEditor,
  },
  data: () => ({
    items: [
      {
        title: "社群簡史（A版）",
        icon: "mdi-book-outline",
        enable: true,
      },
      {
        title: "社群簡史（B版）",
        icon: "mdi-book-outline",
        enable: true,
      },
      {
        title: "簡易法規編輯器",
        icon: "mdi-file-document-edit-outline",
        enable: true,
      },
      {
        title: "關於我們",
        icon: "mdi-help-box",
        enable: false,
      },
    ],
    right: null,
    drawer: true,
    mini: true,
    lookAt: "",
  }),
  methods: {
    route: function (message) {
      this.lookAt = message;
      console.log(message);
    },
    test: function (){
      //console.log(Creator.getTestDom());
    }
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
