/* 
 * @Author: Eleven 
 * @Date: 2018-07-03 10:48:40 
 * @Last Modified by: Eleven
 * @Last Modified time: 2018-07-27 18:32:48
 */

import common from './commonController'
import About from '../components/about'

class AboutController {
  constructor() {

  }

  init() {
    let about = new About()

    common.init()
    about.test()
  }
}

export default new AboutController()