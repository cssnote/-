
# client
## clientWidth/clientHeight  (padding + content）
1、元素无padding无滚动：clientWidth = style.width <br>
2、元素有padding无滚动：clientWidth = style.width + padding
3、元素有padding有滚动条时，clientWidth = css设置width - 滚动条宽度 + padding / 计算后样式宽度getComputedStyle().width + padding。

## clientLeft / clientTop
clientTop获取border-top大小，clientLeft获取border-left大小。


# offset

## offsetWidth/offsetHeight （border + padding + content)
1、元素无padding无border无滚动: offsetWidth = clientWidth = style.width。
2、元素有padding有border无滚动：offsetWidth = clientWidth + border。
3、元素有padding有border有滚动：offsetWidth = clientWidth + border + 滚动条宽度。

2、但body的offsetWidth是不包含浏览器的滚动条，原因是浏览器滚动条是属于window对象的范畴，和document没一点联系。
如果html根节点有padding border，要获取页面总宽度则需要用html的offsetWidth： document.documentElement.offsetWidth。

## offsetLeft/offsetTop
一、较极端情况：
  1、offsetLeft实际计算的偏移量是从元素的外边框（不含border）到html根元素边框（含border）的距离，包含了body的padding/margin/border,html根元素的padding/border,但不包含html的margin（ie8及以上包含margin）.
2、但是如果html或者body设置了定位（relative/position/fixed），则计算到html和body这两个offsetParent的border（含border）,IE8及以上版本不含border。

二、一般情况都是body无border margin、html根元素无margin border padding的情况，就无须理会上述的问题了。

三、如果元素的最近的父元素有定位，则偏移量是基于这个offsetParent，计算距离从元素的外边框到offsetParent的内边框，元素的margin + 中间元素的所有宽度 + offsetParent的padding.
