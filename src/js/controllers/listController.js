/* 
 * @Author: Eleven 
 * @Date: 2018-07-03 10:38:31 
 * @Last Modified by: Eleven
 * @Last Modified time: 2018-07-27 18:35:47
 */

import common from './commonController'
import List from '../components/list'

class ListController {
  constructor() {

  }

  init() {
    let list = new List()
    
    common.init()
    list.test()
  }
}

export default new ListController()