
function where(){
	$('.where').on('change',function(){
		
		var thisText =$(this).find("option:selected").text();
		
		console.log($(this).find("option:selected").data('content_type'));
		var content_type=$(this).find("option:selected").data('content_type');
		
		if(content_type=='text'){
			
			var content=$(this).parent().next().next();
			content.find('.input-time').hide();
			content.find('.sel-con').hide();
			content.find('.input-default').show();
			
			
			
		}else if(content_type=='select'){
			var content=$(this).parent().next().next();
			content.find('.input-time').hide();
			content.find('.input-default').hide();
			content.find('.sel-con').show();
			
			var arr=[];
			
			switch(thisText){
				
				case '性别': arr=['男','女'];
				break;
				
				case '民族': arr=['汉族','苗族','回族','土家族'];
				break;
				
				case '国籍': arr=['中国','英国','美国'];
				break;
				
				
			}
			
			
			content.find('.sel-con').empty();
			
		  	for(var i in arr){
                content.find('.sel-con').append('<option>'+arr[i]+'</option>');
           };

			
		}else if(content_type=='time'){
			var content=$(this).parent().next().next();
			console.log(content)
			content.find('.sel-con').hide();
			content.find('.input-default').hide();
			content.find('.input-time').show();
		}
	
	
	});
	
}



$(function(){
	
	//导航菜单
	
	$('.navbar-default .nav>li>ul>li').on('click',function(){
			
		$(this).addClass('act').siblings().removeClass('act');
		
	});
	
	// 按钮
	
	/*$('.btn-group a').on('click',function(){
		
		$(this).addClass('on').siblings().removeClass('on');
		
	});*/
	
	
	//首页弹窗
	
	$('.a1').on('click',function(){
			
		layer.open({
			
			type: 2,            //iframe层                   
			title:'系统消息',
			skin: 'layui-layer-demo',
			closeBtn: 1,               
			area: ['420px','auto'],
			content: ['alert-page1.html','no']
			
		});
		
	});
	
	
	//新增组织架构  弹窗
	
	$('.btn-add1').on('click',function(){
		
		layer.open({
			
			type: 2,            //iframe层                   
			title:'新增组织架构',
			skin: 'layui-layer-demo',
			closeBtn: 1,               
			area: ['730px','380px'],
			content: ['alert-page2.html','no']
			
			
		});
		
		
	});
	
	//编辑组织架构  弹窗
	
	$('.btn-edit1').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层            
			title:'编辑组织架构',
			skin: 'layui-layer-demo',
			closeBtn: 1,               
			area: ['730px','380px'],
			content: ['alert-page2.html','no']
			
			
		});
		
		
	});
	
	//删除   弹窗
	
	$('.btn-del1').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'系统消息',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['320px','210px'],
			content: ['alert-page3.html','no']
			
			
		});
		
	});
	
	//新增用户  弹窗
	
	$('.btn-add2').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'新增用户',
			skin: 'layui-layer-demo',
			closeBtn: 1,               
			area: ['730px','350px'],
			content: ['alert-page4.html','no']
			
			
		});
		
		
	});
	
	//新增用户  角色下拉选择
	
	$('.input-value').on('click',function(){
			
		$('.juese-list').show();
		
	});
		
	$('.juese-list ul li').on('click',function(){
		
		$(this).toggleClass('act2');
		
		var chk_value =[];
		
		$('input[name="check"]:checked').each(function(){
			
			chk_value.push($(this).val());
			
		}); 
		
		$('.input-value').val(chk_value);
		
	});
	
	$('.juese-list a').on('click',function(){
			
		$('.juese-list').hide();
		
	});
	
	
	//编辑用户  弹窗
	
	$('.btn-edit2').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'编辑用户',
			skin: 'layui-layer-demo',
			closeBtn: 1,               
			area: ['730px','340px'],
			content: ['alert-page4.html','no']
			
			
		});
		
		
	});
	
	
	//新增角色  弹窗
	
	$('.btn-add3').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'新增角色',
			skin: 'layui-layer-demo',
			closeBtn: 1,               
			area: ['420px','285px'],
			content: ['alert-page5.html','no']
			
			
		});
		
		
	});
	
	//编辑角色  弹窗
	
	$('.btn-edit3').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'编辑角色',
			skin: 'layui-layer-demo',
			closeBtn: 1,               
			area: ['420px','285px'],
			content: ['alert-page5.html','no']
			
			
		});
		
		
	});
	
	
	//重置密码成功  弹窗
	
	$('.btn-czpwd').on('click',function(){
		
		var box_two=$('.alert-box-two').html();
		
		layer.open({
			
			type: 1,           //页面层                    
			title:'系统消息',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['320px','190px'],
			content: box_two
			
			
		});
		
		
	});
	
	//设置成功  弹窗
	
	$('.btn-sz').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'系统消息',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['320px','175px'],
			content: ['alert-page7.html','no']
			
		});
		
	});
	
	//新增任务  弹窗
	
	$('.btn-add4').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'新增任务',
			skin: 'layui-layer-demo',
			closeBtn: 1,               
			area: ['420px','285px'],
			content: ['alert-page8.html','no']
			
			
		});
		
		
	});
	
	//编辑任务  弹窗
	
	$('.btn-edit4').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'编辑任务',
			skin: 'layui-layer-demo',
			closeBtn: 1,               
			area: ['420px','285px'],
			content: ['alert-page8.html','no']
			
		});
		
		
	});
	
	//撤销任务 弹窗
	
	$('.btn-cancel').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'系统消息',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['320px','240px'],
			content: ['alert-page9.html','no']
			
		});
		
	});
	
	//审核 弹窗
	
	$('.btn-auditing').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'审核',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['420px','380px'],
			content: ['alert-page10.html','no']
			
			
		});
		
	});
	
	//审核日志 弹窗
	
	$('.btn-log').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'审核记录',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['800px','420px'],
			content: ['alert-page11.html','no']
			
		});
		
	});
	
	//简历导出  弹窗
	
	$('.btn-export1').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'简历导出',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['420px','240px'],
			content: ['alert-page12.html','no']
			
			
		});
		
	});
	
	//简历查询申请  弹窗
	
	$('.btn-cx1').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'查询申请',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['500px','350px'],
			content: ['alert-page13.html','no']
			
			
		});
		
	});
	
	//导出申请  弹窗
	
	$('.btn-export2').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'导出申请',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['420px','380px'],
			content: ['alert-page14.html','no']
			
			
		});
		
	});
	
	//新增沟通记录  弹窗
	
	$('.btn-add5').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'新增沟通记录',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['500px','420px'],
			content: ['alert-page15.html','']
			
			
		});
		
	});
	
	
	//新增跟踪记录  弹窗
	
	$('.btn-add6').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'新增跟踪记录',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['500px','420px'],
			content: ['alert-page16.html','']
			
			
		});
		
	});
	
	//收藏夹删除   弹窗
	
	$('.btn-del2').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'系统消息',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['320px','210px'],
			content: ['alert-page17.html','no']
			
		});
		
	});
	
	//退出登录   弹窗
	
	/*$('.btn-exit').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'系统消息',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['320px','210px'],
			content: ['alert-page18.html','no']
			
		});
		
	});*/
	
	$('.btn-exit').on('click',function(){
		
		var box_one=$('.alert-box-one').html();
		
		layer.open({
			
			type: 1,           //页面层                    
			title:'系统消息',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['320px','190px'],
			content: box_one
			
		});
		
	});
	
	
	
	
	
	//权限查询 弹窗
	
	$('.btn-qxcx').on('click',function(){
		
		layer.open({
			
			type: 2,           //iframe层                    
			title:'权限查询',
			skin: 'layui-layer-demo',
			closeBtn: 1,         //关闭按钮      
			area: ['420px','400px'],
			content: ['alert-page19.html','']
			
			
		});
		
	});
	
	
	//简历查询  自定义查询
	
	var bFlag=false;
	
	$('.btn-cx2').on('click',function(){
		
		if(!bFlag){
			
			$(this).html('普通查询');
			
			$('.query-condition').show();
		
			$('.condition1').hide();
			
			
		}else{
			
			$(this).html('自定义查询');
			
			$('.query-condition').hide();
		
			$('.condition1').show();
			
		}
		
		bFlag=!bFlag;
		
		
		
	});
	
	
	//自定义查询  表格添加行
	
	$('.add-btn').on('click',function(){
		
		var tr1=$('#table tbody tr.tr-one:first').clone().css({'display':''});
		
		var len=$('#table tbody tr.tr-one').length;
		
		//console.log(len);
		
		if(len < 5){
		
			$('#table tbody').append(tr1);
			where();
		
		}
		
		
	});
	
	
	
	//自定义查询   表格删除行
	//注册时间(解决dom改变后事件无响应问题)
	
	$('#table').on('click','.remove-btn',function(){
		
		$(this).parent().parent().remove();
		
	});
	
	
	//简历统计下拉选择
	
	$("#menu").on('change',function(){
			
		var x=document.getElementById('menu');
		
		var index=x.selectedIndex;
		
		$('.menu-con').eq(index).show().siblings().hide();
		
		
	});
	
	
	//业务员导出申请统计下拉选择
	
	$("#menu-one").on('change',function(){
			
		var x=document.getElementById('menu-one');
		
		var index=x.selectedIndex;
		
		$('.list-con').eq(index).show().siblings().hide();
		
		
	});
	
	
	
	//简历信息  下拉检索
	//毕业院校
	
	$('#input-value1').on('keyup',function(){
		
		$('.search-school').show();
		
	});
	
	$('.search-school ul li').on('click',function(){
		
		var text1=$(this).html();
		
		$('#input-value1').val(text1);
		
		
	});
	
	$('.list-box').hover(function(){
		
		return;
		
	},function(){
		
		$(this).children('.search-school').hide();
		
	});
	
	
	//专业名称
	
	$('#input-value2').on('keyup',function(){
		
		$('.search-major').show();
		
	});
	
	$('.search-major ul li').on('click',function(){
		
		var text2=$(this).html();
		
		$('#input-value2').val(text2);
		
	});
	
	$('.list-box').hover(function(){
		
		return;
		
	},function(){
		
		$(this).children('.search-major').hide();
		
	});
	
	
	//所属机构下拉显示
	
	$('#selectable-output').on('focus',function(){
		
		$('.list-one').show();
		
	});
	
	
	$('.list-box2').hover(function(){
		
		return;
		
	},function(){
		
		$(this).children('.list-one').hide();
		
	});
	
	
	
	
	
});
