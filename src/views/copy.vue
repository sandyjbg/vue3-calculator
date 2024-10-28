<template>
  <Teleport to='.TCIT_main'>
    <div class="analyizeWrap">
      <div class="analyizeTop">
        <p>出租率分析(出租數/總房數)</p>
        <n-icon :component="Close" size="30" class="icon" color="white" @click="onClose"></n-icon>
      </div>
      <div class="totalAnalyize">
        <div class="houseOptional">
          <n-checkbox-group v-model:value="bcs" @update:value="handleUpdateValue">
            <div class="houseNameOptional" v-for="data in shPinia.allBuildings" :key="data.noBuild">
              <n-space item-style="display: flex;">
                <n-checkbox :value="data.noBuild" :label="data.nmBuild.replace('社會住宅', '')" />
              </n-space>

              <n-icon :component="UserAvatarFilledAlt" size="17" class="icon" color="white"></n-icon>
              <span>{{ data.qtRentAll }}/{{ data.qtHformAll }}</span>

            </div>
          </n-checkbox-group>
        </div>
        <div class="houseTypeChart">
          <div>
            <p>一房型</p>
            <div id="typeOneChart" class="typeChart"></div>
          </div>
          <div>
            <p>二房型</p>
            <div id="typeTwoChart" class="typeChart"></div>
          </div>
          <div>
            <p>三房型</p>
            <div id="typeThreeChart" class="typeChart"></div>
          </div>
          <div>
            <p>套房型</p>
            <div id="typeSuiteChart" class="typeChart"></div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/mixins/rwd';
@import '@/styles/mixins/scroll';
@import '@/styles/grid';
@import '@/styles/global';

.analyizeWrap {
  display: flex;
  flex-direction: column;
  width: 1100px;
  border-radius: 3px;
  background-color: white;
  gap: 10px;
  position: absolute;
  left: 130px;
  top: 95px;

  .analyizeTop {
    display: flex;
    justify-content: space-between;
    background-color: #009EDC;
    border-radius: 3px 3px 0px 0px;
    font-size: 18px;
    font-weight: bolder;


    >p {
      color: white;
      padding: 5px 20px;
      font-size: 16px;
    }

    .n-icon {
      padding: 3px 50px 0 0;
      cursor: pointer;
    }
  }

  .totalAnalyize {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0px 15px 15px 15px;


    .houseOptional {
      width: 100%;
      background-color: #F2F8F7;
      border-radius: 5px;
      padding: 5px;

      .n-checkbox-group {
        white-space: initial;
        display: flex;
        flex-wrap: wrap;

        .houseNameOptional {
          width: 259px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          border: 1px transparent solid;
          background-color: #39AA57;
          padding: 2px 10px;
          border-radius: 5px;
          margin: 3px;

          .n-checkbox {
            --n-border: 1px solid white !important;
            --n-text-color: white !important;
            --n-text-weight: bolder !important;
            --n-color: transparent !important;
            --n-color-checked: transparent !important;
            --n-border-checked: 1px solid #ffffff !important;
            --n-border-focus: 1px solid #ffffff !important;
            width: 150px;
          }

          .n-icon {
            top: 3px;
            width: 10%;
          }

          span {
            color: white;
            width: 25%;
            text-align: right;
          }
        }
      }
    }

    .houseTypeChart {
      display: flex;
      justify-content: space-between;
      gap: 10px;

      >div {

        >p {
          border-left: 2px solid #007E5C;
          padding-left: 8px;
          font-size: 14px;
          font-weight: bolder;
          margin-bottom: 10px;
        }

        .typeChart {
          height: 475px;
          width: 260px;
          background-color: #39AA57;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { Close } from '@vicons/ionicons5';
import { UserAvatarFilledAlt } from '@vicons/carbon';
import * as echarts from 'echarts';
import { useShStore } from "@/stores/shStore";
import { dragTableHead } from "@/composables/draggableWindow.js";  //拖曳視窗
import { calcModalPosition } from '@/composables/modalPosition';

const shPinia = useShStore();

const props = defineProps({
  onClose: {
    type: Function,
    required: true
  }
})

const chartArr: any[] = [];

const bcs = ref<string[]>([])
const handleUpdateValue = () => {
  const data = shPinia.getRentRankingByBC(bcs.value);
  updateBarChart(0, "room1", data[0]);
  updateBarChart(1, "room2", data[1]);
  updateBarChart(2, "room3", data[2]);
  updateBarChart(3, "roomS", data[3]);
  console.log(data)
}

const updateBarChart = (index: number, key: string, value: any) => {
  let pData = value.map((o: any) => {
    return {
      value: o[key],
      name: o.nmBuild,
    };
  });
  console.log(pData)
  let option = chartArr[index].getOption();
  option.series[0].data = pData.reverse();
  chartArr[index].setOption(option);
};

async function initBarChart(id: string, key: string, data: any[]) {
  await nextTick()
  const chartDom = document.getElementById(id)!;
  if (!chartDom) return
  let option
  let myChart = echarts.init(chartDom);
  chartArr.push(myChart);

  let pData = data.map((o) => {
    return {
      value: o[key],
      name: o.nmBuild,
    };
  });

  option = {
    title: {},
    tooltip: {},
    legend: {},
    grid: {
      left: '5%',
      right: '18%',
      bottom: '0%',
      top: '3%',
      containLabel: true
    },
    xAxis: {
      show: false
    },
    yAxis: {
      axisTick: {
        show: false,
      },
      axisLine: { show: false },
      type: 'category',
      data: data.map((o) => o.nmBuild).reverse(),
      axisLabel: {
        show: true,
        margin: 20,
        textStyle: {
          color: '#FFFFFF',
          fontSize: '14px'
        }
      },
      barGap: '80%'
    },
    series: [
      {
        type: 'bar',
        label: {
          show: true,
          position: 'right',
          textStyle: {
            color: 'white',
            fontSize: '12',
            padding: '120'
          },
        },
        barWidth: '40%',
        data: pData.reverse(),
        itemStyle: {
          normal: {
            textStyle: {
              fontSize: 16,
              color: '#B0CEFC'
            },
            // 这里就可以实现，配置柱状图的颜色
            color: function (params: string) {
              var colorList = ['#8EC33F', '#00795A', '#EAB158', '#009EDC', '#8EC33F', '#00795A', '#EAB158', '#009EDC', '#8EC33F'];
              return colorList[params.dataIndex]
            },
            borderColor: '#FFFFFF',
            borderWidth: 2,
          }
        }
      }
    ]
  }

  if (typeof echarts.getInstanceByDom(chartDom) === 'undefined') {
    echarts.dispose(chartDom);
    let myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
    window.addEventListener('resize', function () {
      setTimeout(() => {
        myChart.resize();
      }, 300);
    });
  } else {
    // @ts-ignore
    echarts.dispose(chartDom);
    echarts.init(chartDom);
    if (!chartDom) return;
    option && echarts.getInstanceByDom(chartDom)?.setOption(option);
  }
}

onMounted(() => {

  const data = shPinia.getRentRankingByBC(null);
  initBarChart('typeOneChart', "room1", data[0])
  initBarChart('typeTwoChart', "room2", data[1])
  initBarChart('typeThreeChart', "room3", data[2])
  initBarChart('typeSuiteChart', "roomS", data[3])

  dragTableHead('analyizeTop', true, true, 0) // 拖曳視窗
  const body: HTMLElement = document.querySelector('body')!
  body.style.overflow = 'hidden'
  calcModalPosition('analyizeWrap')

})

onBeforeUnmount(() => {
  const body: HTMLElement = document.querySelector('body')!
  body.style.overflow = ''
})
</script>