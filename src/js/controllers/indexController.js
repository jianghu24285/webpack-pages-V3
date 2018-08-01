/* 
 * @Author: Eleven 
 * @Date: 2018-07-03 10:28:43 
 * @Last Modified by: Eleven
 * @Last Modified time: 2018-08-01 22:51:03
 */

import common from './commonController'
import Index from '../components/index'

class IndexController {
  constructor() {

  }

  init() {
    let index = new Index()

    common.init()
    // 音乐
    index.initMusic()
    // 倒计时
    index.initTimeOdd()
  }
}

export default new IndexController()