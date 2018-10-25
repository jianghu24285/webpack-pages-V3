const PostCss = require('postcss')

module.exports = {
  // parser: 'sugarss', // 一种更简洁的css语法格式
  plugins: {
    'postcss-flexbugs-fixes': {}, // 修复一些flex的bug
    'postcss-import': {
      addDependencyTo: 'webpack' // 据说可以解决@import的文件内改动后自动编译问题
    },
    'postcss-cssnext': {},
    'cssnano': {},
    // 'postcss-sprites': {
    //   spritePath: './static/assets/img/', // 合成后的雪碧图存放位置
    //   // stylesheetPath: '/',  // url头部
    //   // basePath: 'www.baidu.com',
    //   filterBy: function (image) { // 过滤哪些图片需要过滤
    //     if (image.url.indexOf('sprite_') < 0) {
    //       return Promise.reject()
    //     }
    //     return Promise.resolve()
    //   },
    //   hooks: {
    //     onUpdateRule: function (rule, token, image) {
    //       let backgroundSizeX = (image.spriteWidth / image.coords.width) * 100
    //       let backgroundSizeY = (image.spriteHeight / image.coords.height) * 100
    //       let backgroundPositionX = (image.coords.x / (image.spriteWidth - image.coords.width)) * 100
    //       let backgroundPositionY = (image.coords.y / (image.spriteHeight - image.coords.height)) * 100

    //       backgroundSizeX = isNaN(backgroundSizeX) ? 0 : backgroundSizeX
    //       backgroundSizeY = isNaN(backgroundSizeY) ? 0 : backgroundSizeY
    //       backgroundPositionX = isNaN(backgroundPositionX) ? 0 : backgroundPositionX
    //       backgroundPositionY = isNaN(backgroundPositionY) ? 0 : backgroundPositionY

    //       let backgroundImage = PostCss.decl({
    //         prop: 'background-image',
    //         value: 'url(' + image.spriteUrl + ')'
    //       })

    //       let backgroundSize = PostCss.decl({
    //         prop: 'background-size',
    //         value: backgroundSizeX + '% ' + backgroundSizeY + '%'
    //       })

    //       let backgroundPosition = PostCss.decl({
    //         prop: 'background-position',
    //         value: backgroundPositionX + '% ' + backgroundPositionY + '%'
    //       })

    //       rule.insertAfter(token, backgroundImage)
    //       rule.insertAfter(backgroundImage, backgroundPosition)
    //       rule.insertAfter(backgroundPosition, backgroundSize)
    //     }
    //   }
    // }
  }
}