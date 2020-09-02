
# client
## clientWidth / clientHeight  (padding + content）
1、元素无padding无滚动：clientWidth = style.width  
2、元素有padding无滚动：clientWidth = style.width + padding  
3、元素有padding有滚动条时，clientWidth = css设置width - 滚动条宽度 + padding / 计算后样式宽度getComputedStyle().width + padding。

## clientLeft / clientTop
clientTop获取border-top的border-width，clientLeft获取border-left的border-width。


# offset

## offsetWidth/offsetHeight （border + padding + content)
1、元素无padding无border无滚动: offsetWidth = clientWidth = style.width。  
2、元素有padding有border无滚动：offsetWidth = clientWidth + border。  
3、元素有padding有border有滚动：offsetWidth = clientWidth + border + 滚动条宽度。  

2、但body的offsetWidth是不包含浏览器的滚动条，原因是浏览器滚动条是属于window对象的范畴，和document没一点联系。  
如果html根节点有padding border，要获取页面总宽度则需要用html的offsetWidth： document.documentElement.offsetWidth。

## offsetLeft / offsetTop

#### 一般情况(body无border margin、html根元素无margin border padding的情况）
元素距离最近的父元素有定位（非static)，则偏移量是基于这个offsetParent，offsetWidth = 元素的外边框到offsetParent的内边框,即：offsetParent的padding-left + 中间元素的margin-left,border-width,padding-left + 元素的margin-left。

兼容ie6/7，需要在自身元素添加定位，才能正确找到有定位的offsetParent.在ie8中，会算上offsetParent的边框。 所以要定位兼容所有情况，记住：自定位，父无边。

#### 较极端情况：(body有border margin、html根元素有margin border padding的情况）
1、元素的父元素都没有定位的情况下，offsetLeft实际计算的偏移量是从元素的外边框（不含border）到html根元素边框（含border）的距离，包含了body的padding/margin/border,html根元素的padding/border,但不包含html的margin（ie8及以上包含html节点的margin）.  
2、但是如果html或者body设置了定位（relative/position/fixed），则计算到html和body这两个offsetParent的border（含border）,IE8及以上版本不含border。  


# scroll
## scrollWidth / scrollHeight
元素无滚动：scrollHeight = clientHeight
元素有滚动: scrollHeight = 滚动内部区域实际整体高度（包括padding）

## scrollTop / scrollLeft
拉动滚动条时，滚动条卷去的高度和宽度，可以设置值，最小值是0，就是没拉到滚动条的默认状态，最大值是拉到底的值，设置超出值只能到最小值最大值。


