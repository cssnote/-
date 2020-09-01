// 参考文章：https://juejin.im/post/6844903618764603399

var util = {
	ajax: function(options){
		//处理默认值
		var xhr = null,
			url = options.url,
			method = options.method || "get",
			async = "async" in options ? options.async : false;
			data = options.data || null;
			parms = ''; //url参数
			callback = options.success; //请求成功后调用的函数

		//如果data存在，数据参数拼接一起。
		if(data){
			for(var i in data){
				parms += i + '=' + data[i] + '&';
			}
			parms = parms.replace(/&$/,'');  //删除末尾的&
		}

		//如果是get请求，参数要加到url中
		if(method === 'get'){
			url += '?' + parms;
			parms = null; //把parms设置成Null,主要用于send(null);
		}

		//处理XHR浏览器兼容问题,获取XMLHttpRequest
		

		if(window.XMLHttpRequest !== 'undefined'){   //或者if(window.XMLHttpRequest){}
			xhr = new XMLHttpRequest;  ////Firefox、 Opera、 IE7 和其它浏览器使用本地 JavaScript 对象
		
		}else if(window.ActiveXObject !== 'undefined'){ //IE5,IE6用ActiveXObject

			//这里有几种方法不同难度的处理方式
			//第1种：Msxml2.XMLHTTP是较新版本，不存在再找低版本Microsoft.XMLHTTP
			try{
				xhr = new ActiveXObject('Msxml2.XMLHTTP');
			}catch(e){
				try{
					xhr = new ActiveXObject("Microsoft.XMLHTTP"); 
				}catch(e){

				}
			}

			// 第2种更详细，将所有可能出现的ActiveXObject版本放在一个数组中
            	// var xhrArr = ['Microsoft.XMLHTTP', 'MSXML2.XMLHTTP.6.0', 'MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP.2.0'];
            	// // 遍历创建XMLHttpRequest对象
            	// var len = xhrArr.length;
            	// for (var i = 0; i < len; i++) {
            	//     try {
            	//         // 创建XMLHttpRequest对象
            	//         xhr = new ActiveXObject(xhrArr[i]);
            	//         break;
            	//     } catch (ex) {
            	//     }
            	// }

            // 第3种最简单，但是容易出问题
            	// if (window.XMLHttpRequest){// 兼容 IE7+, Firefox, Chrome, Opera, Safari  
          			// xhr=new XMLHttpRequest();  
            	// } else{// 兼容 IE6, IE5 
            	// 	xhr=new ActiveXObject("Microsoft.XMLHTTP");  
            	// } 

         
		}else{
			throw new Error('No XMLHttpRequest available'); //都找不到xhr则抛出错误
		}


		//监听函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){ //分别有0~4个阶段
				if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
					
					callback && callback(JSON.parse(xhr.responseText)); 
				}
	
			}
		}
		xhr.open(method,url,async);

		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(parms);
	}
};


