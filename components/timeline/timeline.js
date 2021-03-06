// components/timeline.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Array,
      value: []
    },
    pointAni: {
      type: String,
      value: 'timeline-point-ani'
    },
    periodAni: {
      type: String,
      value: 'timeline-period-ani'
    },
    infoAni: {
      type: String,
      value: 'timeline-info-ani'
    },
    lineAni: {
      type: String,
      value: 'timeline-line-ani'
    }
  }
})
