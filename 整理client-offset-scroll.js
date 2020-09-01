较极端情况：
1、offsetLeft实际计算的偏移量是从元素的外边框(不含border)到html根元素（含border）的距离，包含了body的padding/margin/border,html根元素的padding/border,但不包含html的margin（ie11所有版本包含margin）.
2、但是如果html或者body设置了定位（relative/position)，则计算到html和body的border（含border),IE8及以上版本不含border.

一般情况都是body无border margin、html根元素无margin border padding的情况，就无须理会上述的问题了。
