/* 
 * @Author: Eleven 
 * @Date: 2018-07-03 10:33:28 
 * @Last Modified by: Eleven
 * @Last Modified time: 2018-08-01 22:50:22
 */

import musicBg from '../../assets/music/dear.mp3'
import moment from 'moment'

export default class Index {
  constructor() {

  }

  /**
   * 1.静态资源,直接require,再写入,webpack可以处理,例如这里的.mp3文件.
   * 2.如果是直接在页面的audio标签写入src,则需要通过html-loader来处理.
   */
  initMusic() {
    let music = new Audio()
    music.src = musicBg
    // let music = document.querySelector('#bg_music')

    // 这样无法依靠webpack将文件打包过去
    // music.src = '../assets/music/dear.mp3'

    music.loop = 'loop'
    music.play() && $('#music_switch').addClass('play')

    $('#music_switch').on('click', function () {
      music.paused ? music.play() : music.pause()
      $(this).toggleClass('play', !music.paused)
    })
  }

  /**
   * 初始化倒计时
   */
  initTimeOdd() {
    let _this = this
    let time = ''
    let $timeOdd = $('#time_odd')

    $timeOdd.text(this.getTimeOdd())
    setInterval(() => {
      time = _this.getTimeOdd()
      $timeOdd.text(time)
    }, 1000)
  }

  /**
   * moment获取本年度剩余年、月、日、时、分、秒。
   */
  getTimeOdd() {
    let duration, months, days, hours, minutes, seconds

    duration = moment.duration(moment().endOf('year') - moment())
    months = duration.get('months')
    days = duration.get('days')
    hours = duration.get('hours')
    minutes = duration.get('minutes')
    seconds = duration.get('seconds')

    months = (months + '').padStart(2, '0')
    days = (days + '').padStart(2, '0')
    hours = (hours + '').padStart(2, '0')
    minutes = (minutes + '').padStart(2, '0')
    seconds = (seconds + '').padStart(2, '0')

    return `${months} 个月 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`
  }
}