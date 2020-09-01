
client




# offset

## offsetWidth/offsetHeight
1、offsetWidth = 元素的clientWidth + padding + border  + 滚动条宽度，（有滚动条时，clientWidth是设置的宽度-滚动条宽度，getComputedStyle一样）。

2、但body的offsetWidth是不包含浏览器的滚动条，我估计的原因是浏览器的滚动条是属于window对象的范畴，而不是docuemnt。

## offsetLeft/offsetTop
一、较极端情况：
1、offsetLeft实际计算的偏移量是从元素的外边框（不含border）到html根元素内边框（含border）的距离，包含了body的padding/margin/border,html根元素的padding/border,但不包含html的margin（ie8及以上包含margin）.
2、但是如果html或者body设置了定位（relative/position/fixed），则计算到html和body这两个offsetParent的border（含border）,IE8及以上版本不含border。

二、一般情况都是body无border margin、html根元素无margin border padding的情况，就无须理会上述的问题了。

三、如果元素的最近的父元素有定位，则偏移量是基于这个offsetParent，计算距离从元素的外边框到offsetParent的内边框，元素的margin + 中间元素的所有宽度 + offsetParent的padding.
