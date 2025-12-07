import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "./assets/main.css";
import i18n from "./i18n/index.js";

// Import ECharts and its renderer
import * as echarts from "echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, RadarChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  RadarComponent,
} from "echarts/components";
import VChart from "vue-echarts";

// Configure ECharts
use([
  CanvasRenderer,
  BarChart,
  RadarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  RadarComponent,
]);

const app = createApp(App);

// Register VChart globally
app.component("VChart", VChart);

app.use(createPinia());
app.use(ElementPlus);
app.use(i18n);

app.mount("#app");
