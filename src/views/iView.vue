<template>
  <div class="container">
    <Form :model="form" :label-width="80">
      <FormItem label="活动名称">
        <InputDispatcher v-model="form.name" placeholder="Enter something..." />
      </FormItem>
      <FormItem label="活动区域">
        <SelectDispatcher v-model="form.region">
          <Option value="New York">New York</Option>
          <Option value="London">London</Option>
          <Option value="Sydney">Sydney</Option>
        </SelectDispatcher>
      </FormItem>
      <FormItem label="活动时间">
        <Row>
          <Col span="11">
            <DatePickerDispatcher type="date" placeholder="Select date" v-model="form.date1" />
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
            <TimePickerDispatcher type="time" placeholder="Select time" v-model="form.date2" />
          </Col>
        </Row>
      </FormItem>
      <FormItem label="即时配送">
        <SwitchDispatcher v-model="form.delivery" />
      </FormItem>
      <FormItem label="活动性质">
        <CheckboxGroupDispatcher v-model="form.type">
          <CheckboxDispatcher label="美食/餐厅线上活动" />
          <CheckboxDispatcher label="地推活动" />
          <CheckboxDispatcher label="线下主题活动" />
          <CheckboxDispatcher label="单纯品牌曝光" />
        </CheckboxGroupDispatcher>
      </FormItem>
      <FormItem label="特殊资源">
        <RadioGroupDispatcher v-model="form.resource">
          <RadioDispatcher label="线上品牌商赞助" />
          <RadioDispatcher label="线下场地免费" />
        </RadioGroupDispatcher>
      </FormItem>
      <FormItem label="活动形式">
        <InputDispatcher v-model="form.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
      </FormItem>
      <FormItem>
        <div style="text-align: right">
          <Button v-show="rwDispatcherState === 'write'" type="primary" size="small" @click="toggleState">编辑</Button>
          <Button v-show="rwDispatcherState === 'read'" type="primary" size="small" @click="toggleState">详情</Button>
        </div>
      </FormItem>
    </Form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { RWDispatcher } from 'element-ui-rw-dispatcher'

type VueComponent = Vue | Element | Vue[] | Element[]

@Component
export default class iViewDemo extends RWDispatcher {
  private form = {
    name: '618电器折扣日',
    region: 'London',
    date1: '2019-06-18',
    date2: new Date(2019, 6, 18, 0, 0, 0),
    delivery: false,
    type: ['单纯品牌曝光'],
    resource: '线下场地免费',
    desc: '凡在实体店购买指定商品，立刻过得赠品一份'
  }

  toggleState () {
    if (this.getRWDispatcherState() === 'write') {
      this.setRWDispatcherState('read')
    } else {
      this.setRWDispatcherState('write')
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  text-align: left;
}
</style>
