/* 
 * @Author: Eleven 
 * @Date: 2018-07-03 10:40:20 
 * @Last Modified by: Eleven
 * @Last Modified time: 2018-07-27 18:39:09
 */

export default class List {
  constructor() {

  }

  test() {
    let list = ''

    for (let i = 0; i < 25; i++) {
      list += '<li>' + (i + 1) + '</li>'
    }
    $('#test_list').find('ul').append(list)
  }
}