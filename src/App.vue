<template>
  <div class="culculator">
    <div class="screen">
      <input type="text" v-model="a" disabled>
    </div>
    <div class="button">
      <div class="line">
        <div class="status" @click="clear()">AC</div>
        <div class="status" @click="reserve()">+/-</div>
        <div class="status" @click="percent()">%</div>
        <div class="operation" @click="setOperator('/')">÷</div>
      </div>
      <div class="line">
        <div class="number" @click="number('7')">7</div>
        <div class="number" @click="number('8')">8</div>
        <div class="number" @click="number('9')">9</div>
        <div class="operation" @click="setOperator('*')">×</div>
      </div>
      <div class="line">
        <div class="number" @click="number('4')">4</div>
        <div class="number" @click="number('5')">5</div>
        <div class="number" @click="number('6')">6</div>
        <div class="operation" @click="setOperator('-')">-</div>
      </div>
      <div class="line">
        <div class="number" @click="number('1')">1</div>
        <div class="number" @click="number('2')">2</div>
        <div class="number" @click="number('3')">3</div>
        <div class="operation" @click="setOperator('+')">+</div>
      </div>
      <div class="line">
        <div class="number0" @click="number('0')">0</div>
        <div class="number" @click="point()">.</div>
        <div class="operation" @click="equal()">=</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
const a = ref('0')
const b = ref('0')
const operator = ref<string | null>(null) //運算符是加/減/乘/除，是否有按下運算符
const resultCalculated = ref(false) //按數字是否覆蓋之前數字，是否經過計算

function clear() {
  a.value = '0'
  b.value = '0'
  operator.value = null
  resultCalculated.value = false
}

function number(num: string) {
  if (resultCalculated.value || a.value === '0') {
    a.value = num
    resultCalculated.value = false
  } else {
    a.value += num
  }
}

function point() {
  if (!a.value.includes('.')) {
    a.value += '.'
  }
}

function reserve() {
  a.value = (Number(a.value) * -1).toString()
}

function percent() {
  a.value = (Number(a.value) / 100).toString()
}

function setOperator(op: string) {
  if (operator.value && !resultCalculated.value) { // 如果按過加減乘除 也 未經過計算
    equal() // 功能跳轉至按等於號
  }
  b.value = a.value // 按下運算符，現在的數字變成隱藏可處理數字
  operator.value = op // 按下運算符，運算符變成變數儲存
  resultCalculated.value = true // 這時候再按數字就會被覆蓋了
}

function equal() {
  if (operator.value === null) return

  const prev = Number(b.value)
  const current = Number(a.value)

  switch (operator.value) {
    case '+':
      a.value = (prev + current).toString()
      break
    case '-':
      a.value = (prev - current).toString()
      break
    case '*':
      a.value = (prev * current).toString()
      break
    case '/':
      a.value = current !== 0 ? (prev / current).toString() : 'Error'
      break
  }
  operator.value = null // 清空運算符
  resultCalculated.value = true // 再按數字就會被覆蓋
}
</script>

<style scoped lang="scss">
.culculator {
  background-color: black;
  height: 500px;
  width: 250px;
  border-radius: 30px;
  font-size: 25px;

  .screen {
    height: 35%;
    display: flex;
    padding: 0 20px;


    input {
      background-color: transparent;
      border: none;
      // direction: rtl;
      color: white;
      font-size: 45px;
    }
  }

  .button {
    height: 65%;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    .line {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 5px 0;

      .status {
        width: 52px;
        height: 52px;
        border-radius: 52px;
        display: flex;
        background-color: #a5a5a5;
        color: black;
        align-items: center;
        justify-content: center;
      }

      .operation {
        width: 52px;
        height: 52px;
        border-radius: 52px;
        display: flex;
        background-color: #ff9f0a;
        color: white;
        align-items: center;
        justify-content: center;
      }

      .number {
        width: 52px;
        height: 52px;
        border-radius: 52px;
        display: flex;
        background-color: #333333;
        color: white;
        align-items: center;
        justify-content: center;
      }

      .number0 {
        width: 110px;
        height: 52px;
        border-radius: 52px;
        display: flex;
        background-color: #333333;
        color: white;
        align-items: center;
        padding-left: 20px;
      }
    }
  }
}
</style>
