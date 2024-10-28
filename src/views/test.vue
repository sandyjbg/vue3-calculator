<template>
  <div class="RECI1">
    <div class="usageWrap">
      <div class="usageTop">
        <p class="title">用電分析</p>
        <n-icon @click="modalOpen = Modal.用電" :component="Search12Filled" size="16" class="icon" color="white"></n-icon>
      </div>

      <div class="electricTotalWrap">
        <div class="searchWrap">
          <div class="dateScope">
            <select class="timeType">
              <option value="option1">日</option>
              <option value="option2">月</option>
              <option value="option3">年</option>
            </select>
          </div>
          <div class="dateSearch">
            <n-date-picker v-model:value="timestamp" type="date" />
          </div>
        </div>


        <div class="totalRank">
          <p class="totalRankTitle">用電排名(10)</p>
          <div class="dataWrap">
            <div class="oneToThree">
              <div class="bigData">
                <div class="flower">
                  <p>1</p>
                  <img src="/icon/HURCIcon_orange.png" alt="">
                </div>
                <div class="nameAndData">
                  <p>稚匯好室</p>
                  <p>3012.16 kWh</p>
                </div>
              </div>
              <div class="bigData">
                <div class="flower">
                  <p>2</p>
                  <img src="/icon/HURCIcon_gray.png" alt="">
                </div>
                <div class="nameAndData">
                  <p>懷石好室</p>
                  <p>3012.16 kWh</p>
                </div>
              </div>
              <div class="bigData">
                <div class="flower">
                  <p>3</p>
                  <img src="/icon/HURCIcon_red.png" alt="">
                </div>
                <div class="nameAndData">
                  <p>江翠好室</p>
                  <p>3012.16 kWh</p>
                </div>
              </div>
            </div>


            <div class="fourToTen">
              <div class="littleData">
                <p>4</p>
                <p>玫瑰好室</p>
                <p>3012.16 kWh</p>
              </div>
              <div class="littleData">
                <p>5</p>
                <p>延吉好室</p>
                <p>3012.16 kWh</p>
              </div>
              <div class="littleData">
                <p>6</p>
                <p>五谷好室</p>
                <p>3012.16 kWh</p>
              </div>
              <div class="littleData">
                <p>7</p>
                <p>萬華安居</p>
                <p>3012.16 kWh</p>
              </div>
              <div class="littleData">
                <p>8</p>
                <p>龍崗好室</p>
                <p>3012.16 kWh</p>
              </div>
              <div class="littleData">
                <p>9</p>
                <p>梧州好室</p>
                <p>3012.16 kWh</p>
              </div>
              <div class="littleData">
                <p>10</p>
                <p>---------</p>
                <p>---------kWh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="usageWrap">
      <div class="usageTop">
        <p class="title">用水分析</p>
        <n-icon @click="modalOpen = Modal.用水" :component="Search12Filled" size="16" class="icon" color="white"></n-icon>
      </div>
      <div class="electricTotalWrap">
        <div class="searchWrap">
          <div class="dateScope">
            <select class="timeType">
              <option value="option1">日</option>
              <option value="option2">月</option>
              <option value="option3">年</option>
            </select>
          </div>
          <div class="dateSearch">
            <n-date-picker v-model:value="timestamp2" type="date" />
          </div>
        </div>


        <div class="totalRank">
          <p class="totalRankTitle">用水排名(10)</p>
          <div class="dataWrap">
            <div class="oneToThree">
              <div class="bigData">
                <div class="flower">
                  <p>1</p>
                  <img src="/icon/HURCIcon_orange.png" alt="">
                </div>
                <div class="nameAndData">
                  <p>稚匯好室</p>
                  <p>3012.16 kWh</p>
                </div>
              </div>
              <div class="bigData">
                <div class="flower">
                  <p>2</p>
                  <img src="/icon/HURCIcon_gray.png" alt="">
                </div>
                <div class="nameAndData">
                  <p>懷石好室</p>
                  <p>3012.16 kWh</p>
                </div>
              </div>
              <div class="bigData">
                <div class="flower">
                  <p>3</p>
                  <img src="/icon/HURCIcon_red.png" alt="">
                </div>
                <div class="nameAndData">
                  <p>江翠好室</p>
                  <p>3012.16 kWh</p>
                </div>
              </div>
            </div>


            <div class="fourToTen">
              <div class="littleData">
                <p>4</p>
                <p>玫瑰好室</p>
                <p>3012.16 kWh</p>
              </div>
              <div class="littleData">
                <p>5</p>
                <p>延吉好室</p>
                <p>3012.16 kWh</p>
              </div>
              <div class="littleData">
                <p>6</p>
                <p>五谷好室</p>
                <p>3012.16 kWh</p>
              </div>
              <div class="littleData">
                <p>7</p>
                <p>萬華安居</p>
                <p>3012.16 kWh</p>
              </div>
              <div class="littleData">
                <p>8</p>
                <p>龍崗好室</p>
                <p>3012.16 kWh</p>
              </div>
              <div class="littleData">
                <p>9</p>
                <p>梧州好室</p>
                <p>3012.16 kWh</p>
              </div>
              <div class="littleData">
                <p>10</p>
                <p>---------</p>
                <p>---------kWh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=usageWrap>
      <div class="usageTop">
        <p class="title">出租率分析（出租數/總房數）</p>
        <n-icon @click="modalOpen = Modal.出租率" :component="Search12Filled" size="16" class="icon"
          color="white"></n-icon>
      </div>
      <div id="rentChart" class="space"></div>
    </div>
    <EnergyUsageModal :onClose="onClose" :modalOpen="modalOpen" v-if="modalOpen === 1 || modalOpen === 2" />
    <RentUsageModal :onClose="onClose" v-if="modalOpen === 3" />
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/mixins/rwd';
@import '@/styles/mixins/scroll';
@import '@/styles/grid';
@import '@/styles/global';

.RECI1 {
  width: 505px;
  background-color: white;
  padding: 15px 20px;
  height: 100%;
  overflow: auto;

  @media (max-width: 992px) {
    width: 100%;
  }

  .usageWrap {

    .usageTop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #009EDC;
      border-radius: 5px 5px 0 0;
    }

    &:nth-child(1) {
      height: 35%;
      padding-bottom: 10px;
      min-height: 280px;
    }

    &:nth-child(2) {
      height: 35%;
      padding-bottom: 10px;
      min-height: 280px;
    }

    &:nth-child(3) {
      height: 30%;
      min-height: 240px;
    }
  }

  .title {
    font-size: 18px;
    color: $colorEFEFEF;
    font-weight: bolder;
    padding: 5px 18px;
  }

  .n-icon {
    display: flex;
    margin-right: 18px;
    cursor: pointer;

    @media (max-width:1100px) {
      display: none;
    }
  }

  .electricTotalWrap {
    background-color: #F2F8F7;
    padding: 8px 20px;
    height: calc(100% - 38.8px - 5px);
    border-radius: 0px 0px 5px 5px;

    .searchWrap {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding-bottom: 5px;

      .dateScope {
        display: flex;
        flex-direction: column;
        width: 40%;

        >p {
          color: rgb(71, 71, 71);
          font-size: 12px;
        }

        .timeType {
          height: 25px;
          border: none;
          border-bottom: 1px solid rgb(179, 179, 179);
          font-size: 1rem;
          font-weight: bold;
          outline: none;
          background-color: transparent;
          font-size: 14px;

        }
      }

      .dateSearch {
        display: flex;
        flex-direction: column;
        width: 60%;
        padding-left: 25px;
        height: auto;

        >p {
          color: rgb(71, 71, 71);
          font-size: 12px;
        }

        :deep(.n-date-picker) {

          .n-input,
          .n-input--resizable,
          .n-input--stateful {
            --n-color: transparent !important;
            height: 25px !important;
            --n-font-size: 14px !important;
            --n-height: 22px !important;
          }
        }
      }
    }

    .totalRank {
      display: flex;
      flex-direction: column;
      height: calc(100% - 44px);

      .totalRankTitle {
        font-weight: bolder;
        padding-bottom: 5px;
        font-size: 16px;
      }

      .dataWrap {
        display: flex;
        height: 100%;

        .oneToThree {
          display: flex;
          flex-direction: column;
          width: 200px;
          justify-content: space-evenly;

          @include sm {
            width: 120px;
          }

          .bigData {
            display: flex;
            flex-direction: row;

            .flower {
              width: 50px;
              height: 50px;
              display: flex;
              justify-content: left;
              align-items: center;
              position: relative;

              @include sm {
                width: 40px;
                height: 40px;
              }

              >img {
                width: 50%;
                height: 50%;
              }

              >p {
                position: absolute;
                left: 25%;
                top: 50%;
                transform: translate(-50%, -50%);
                color: $homeFontColor;
                font-size: 10px;
              }
            }

            .nameAndData {
              display: flex;
              flex-direction: column;

              >p {

                &:nth-child(1) {
                  font-weight: bolder;
                  font-size: 16px;
                }

                &:nth-child(2) {
                  font-size: 15px;
                }
              }
            }
          }
        }



      }

      .fourToTen {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: calc(100% - 200px);

        @include sm {
          width: calc(100% - 120px);
        }

        @include xs {
          width: calc(100% - 100px);
        }

        .littleData {
          display: flex;
          justify-content: flex-end;
          font-size: 14px;

          >p {
            text-align: right;

            &:nth-child(1),
            &:nth-child(2) {
              font-weight: bolder;
            }

            &:nth-child(1) {
              width: 10%;
            }

            &:nth-child(2) {
              width: 35%;

              @include xs {
                width: 45%;
              }
            }

            &:nth-child(3) {
              width: 50%;
            }
          }
        }
      }
    }
  }

  .space {
    height: calc(100% - 38.8px);
    padding: 8px 20px;
    background-color: #F2F8F7;
    border-radius: 0px 0px 5px 5px;

    @media (max-width: 992px) {
      height: 240px;
    }
  }
}
</style>

<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue'
import * as echarts from 'echarts';
import { Search12Filled } from '@vicons/fluent';

import EnergyUsageModal from '@/components/modals/EnergyUsageModal.vue'
import RentUsageModal from '@/components/modals/RentUsageModal.vue'

const timestamp = ref()
const timestamp2 = ref()

enum Modal {
  全關 = 0,
  用電 = 1,
  用水 = 2,
  出租率 = 3
}

/** 開啟的 modal 編號 */
const modalOpen = ref(Modal.全關)

/** 關閉 modal */
const onClose = () => {
  modalOpen.value = Modal.全關
}



/**
 * 初始畫圖表
 * @param id dom 的 id
 */
async function initBarChart(id: string) {
  await nextTick()
  const chartDom = document.getElementById(id)!;
  if (!chartDom) return

  const xAxisData = ['稚匯好室', '懷石好室', '江翠好室', '玫瑰好室', '延吉好室', '五谷好室', '萬華安居', '龍崗好室', '梧州好室'];
  const data1 = [];
  const data2 = [];
  const data3 = [];
  for (let i = 0; i < 9; i++) {
    // xAxisData.push('稚匯好室', '懷石好室', '江翠好室', '玫瑰好室', '延吉好室', '五谷好室', '萬華安居', '龍崗好室', '梧州好室');
    data1.push(Math.round(Math.random() * 100));
    data2.push(Math.round(Math.random() * 100));
    data3.push(Math.round(Math.random() * 100));
  }

  const option: any = {
    tooltip: {},
    xAxis: {
      data: xAxisData,
      splitLine: {
        show: false
      },
      axisLabel: {
        fontWeight: 'bolder'
      }
    },

    grid: {
      left: '0',
      right: '0',
      bottom: '0',
      top: '15',
      containLabel: true,
    },
    yAxis: {

    },
    series: [
      {
        name: '一房型',
        type: 'bar',
        data: data1,
        emphasis: {
          focus: 'series'
        },
        animationDelay: function (idx: any) {
          return idx * 10;
        }
      },
      {
        name: '二房型',
        type: 'bar',
        data: data2,
        emphasis: {
          focus: 'series'
        },
        animationDelay: function (idx: any) {
          return idx * 10 + 100;
        }
      },
      {
        name: '三房型',
        type: 'bar',
        data: data3,
        emphasis: {
          focus: 'series'
        },
        animationDelay: function (idx: any) {
          return idx + 5;
        }
      }
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx: any) {
      return idx * 10;
    }
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
  initBarChart('rentChart')
})
</script>
