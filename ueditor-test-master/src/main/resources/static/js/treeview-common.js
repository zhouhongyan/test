$(function(){
	
	
	//组织架构菜单
	
	var defaultData1 = [
      	{
            text: '中科院集团',
            href: '#parent1',
            tags: ['4'],
            nodes: [
              {
                text: '中科院计算所',
                href: '#child1',
                tags: ['2'],
                state: 
                	{
					    expanded: true,
					    selected: false
				  	},
                nodes: [
                  {
                    text: '部门一',
                    href: '#grandchild1',
                    tags: ['0'],
                    state: 
	                	{
						    expanded: true,
						    selected: true
					  	},
                  },
                  {
                    text: '部门二',
                    href: '#grandchild2',
                    tags: ['0']
                  },
                  {
                    text: '部门三',
                    href: '#grandchild3',
                    tags: ['0']
                  }
                ]
              },
              {
                text: '中科院研究所',
                href: '#child2',
                tags: ['0']
              },
              {
                text: '中科院人才交流中心',
                href: '#child3',
                tags: ['0'],
                nodes: [
                  {
                    text: '研发部',
                    href: '#grandchild4',
                    tags: ['0']
                  },
                  {
                    text: '市场部',
                    href: '#grandchild5',
                    tags: ['0']
                  },
                  {
                    text: '运营部',
                    href: '#grandchild6',
                    tags: ['0']
                  }
                ]
              }
            ]
      	}
          
    ];
	
	
	//权限树菜单
	
	var defaultData2 = [
          {
            text: '首页',
            href: '#parent1',
            tags: ['4'],
            nodes: [
              {
                text: '简历管理',
                href: '#child1',
                tags: ['2'],
                nodes: [
                  {
                    text: '工作量分配',
                    href: '#grandchild1',
                    tags: ['0']
                    
                  },
                  {
                    text: '导入管理',
                    href: '#grandchild2',
                    tags: ['0'],
                    nodes: [
                    	{
                    		text: '查询',
			                href: '#child1',
			                tags: ['2'],
                    	},
                    	{
                    		text: '核对',
			                href: '#child1',
			                tags: ['2'],
                    	},
                    	{
                    		text: '删除',
			                href: '#child1',
			                tags: ['2'],
                    	}
                    ]
                    
                  },
                  {
                    text: '导出审核管理',
                    href: '#grandchild2',
                    tags: ['0']
                  },
                  {
                    text: '新增',
                    href: '#grandchild2',
                    tags: ['0']
                  },
                  {
                    text: '删除',
                    href: '#grandchild2',
                    tags: ['0']
                  },
                  {
                    text: '编辑',
                    href: '#grandchild2',
                    tags: ['0']
                  },
                  {
                    text: '查询',
                    href: '#grandchild2',
                    tags: ['0']
                  },
                  {
                    text: '导入',
                    href: '#grandchild2',
                    tags: ['0']
                  },
                  {
                    text: '预览',
                    href: '#grandchild2',
                    tags: ['0']
                  },
                  {
                    text: '自定义查询',
                    href: '#grandchild2',
                    tags: ['0']
                  }
                  
                  
                ]
              },
              {
                text: '简历查询',
                href: '#child2',
                tags: ['0'],
                nodes: [
                	{
                		text: '查询',
		                href: '#child3',
		                tags: ['0']
                	},
                	{
                		text: '导出',
		                href: '#child3',
		                tags: ['0']
                	},
                	{
                		text: '预览',
		                href: '#child3',
		                tags: ['0']
                	},
                	{
                		text: '日志',
		                href: '#child3',
		                tags: ['0']
                	},
                	{
                		text: '收藏',
		                href: '#child3',
		                tags: ['0']
                	}
                ]
                
              },
              {
                text: '统计分析',
                href: '#child2',
                tags: ['0'],
                nodes: [
                  {
                    text: 'enter text',
                    href: '#grandchild4',
                    tags: ['0'],
                    nodes: [
                    	{
                    		text: 'enter text',
		                    href: '#grandchild4',
		                    tags: ['0']
                    	}
                    ]
                  },
                  {
                    text: 'enter text',
                    href: '#grandchild5',
                    tags: ['0']
                  },
                  {
                    text: 'enter text',
                    href: '#grandchild6',
                    tags: ['0']
                  }
                ]
                
              },
              {
                text: '统计分析',
                href: '#child2',
                tags: ['0'],
                nodes: [
                  {
                    text: 'enter text',
                    href: '#grandchild4',
                    tags: ['0'],
                    nodes: [
                    	{
                    		text: 'enter text',
		                    href: '#grandchild4',
		                    tags: ['0']
                    	}
                    ]
                  },
                  {
                    text: 'enter text',
                    href: '#grandchild5',
                    tags: ['0']
                  },
                  {
                    text: 'enter text',
                    href: '#grandchild6',
                    tags: ['0']
                  }
                ]
                
              },
              {
                text: '系统管理',
                href: '#child2',
                tags: ['0'],
                nodes: [
                	{
	                    text: 'enter text',
	                    href: '#grandchild6',
	                    tags: ['0'],
	                    nodes: [
	                    	{
	                    		text: 'enter text',
			                    href: '#grandchild7',
			                    tags: ['0']
	                    	}
	                    ]
	                    
                  	},
                	{
	                    text: 'enter text',
	                    href: '#grandchild6',
	                    tags: ['0']
                  	}
                	
                ]
                
              }
            ]
          }
          
          
        ];

	
	
	$('#treeview1').treeview({
      	expandIcon: 'glyphicon glyphicon-triangle-right',
  		collapseIcon: 'glyphicon glyphicon-triangle-bottom',
      	nodeIcon: 'glyphicon ',
      	color: "#333",
      	backColor: "#f9f9f9",
      	onhoverColor: "#fff",
      	selectedBackColor:'#5b5b5b',
      	showIcon: false,
      	data: defaultData1,
      	onNodeSelected: function (event, node) {
      		
            $('#selectable-output').val(node.text);
            
      	},
      	onNodeUnselected: function (event, node) {
            
            $('#selectable-output').val('');
            
      	}
      
    });
    
    
    
    //权限树  复选框选中
    
    // 选中父节点时，选中所有子节点
    function getChildNodeIdArr(node) {   
        var ts = [];  
        if (node.nodes) {    
            for (x in node.nodes) {     
                ts.push(node.nodes[x].nodeId);     
                if (node.nodes[x].nodes) {      
                    var getNodeDieDai = getChildNodeIdArr(node.nodes[x]);      
                    for (j in getNodeDieDai) {       
                            ts.push(getNodeDieDai[j]);     
                    }     
                }    
            }   
        } else {    
            ts.push(node.nodeId);   
        }   
        return ts;  
    }
    
    // 选中所有子节点时，选中父节点 取消子节点时取消父节点
    function setParentNodeCheck(node) {   
        var parentNode = $("#treeview2").treeview("getNode", node.parentId);   
        if (parentNode.nodes) {    
            var checkedCount = 0;    
            for (x in parentNode.nodes) {     
                if (parentNode.nodes[x].state.checked) {      
                    checkedCount ++;     
                } else {      
                    break;     
                }    
            }    
            if (checkedCount == parentNode.nodes.length) {  //如果子节点全部被选 父全选
                $("#treeview2").treeview("checkNode", parentNode.nodeId);
                setParentNodeCheck(parentNode);    
            }else {   //如果子节点未全部被选 父未全选
                $('#treeview2').treeview('uncheckNode', parentNode.nodeId); 
                setParentNodeCheck(parentNode);        
            }   
        }  
    }
    
    
    // 取消父节点时 取消所有子节点
    function setChildNodeUncheck(node) { 
        if (node.nodes) {   
            var ts = [];    //当前节点子集中未被选中的集合 
            for (x in node.nodes) { 
                if (!node.nodes[x].state.checked) {  
                    ts.push(node.nodes[x].nodeId);  
                } 
                if (node.nodes[x].nodes) {      
                    var getNodeDieDai = node.nodes[x];   
                    for (j in getNodeDieDai) {    
                        if (!getNodeDieDai.state.checked) {        
                            ts.push(getNodeDieDai[j]); 
                        }    
                    }     
                }    
            }   
        }
        return ts;  
    }
        
    
    
    var $checkableTree = $('#treeview2').treeview({
    	expandIcon: 'glyphicon glyphicon-triangle-right',
      	collapseIcon: 'glyphicon glyphicon-triangle-bottom',
      	nodeIcon: 'glyphicon ',
      	color: "#333",
      	backColor: "#f9f9f9",
      	onhoverColor: "#fff",
      	selectedBackColor:'#5b5b5b',
      	showIcon: false,
      	showCheckbox: true,
  		data: defaultData2,
  		onNodeChecked: function(event, node) { //选中节点 
                var selectNodes = getChildNodeIdArr(node); //获取所有子节点      
                if (selectNodes) { //子节点不为空，则选中所有子节点       
                    $('#treeview2').treeview('checkNode', [selectNodes, { silent: true }]);     
                }     
                var parentNode = $("#treeview2").treeview("getNode", node.parentId);      
                setParentNodeCheck(node);   
          },    
          onNodeUnchecked: function(event, node) { //取消选中节点  
                // 取消父节点 子节点取消
                var selectNodes = setChildNodeUncheck(node); //获取未被选中的子节点 
                var childNodes = getChildNodeIdArr(node);    //获取所有子节点 
                if (selectNodes && selectNodes.length==0) { //有子节点且未被选中的子节点数目为0，则取消选中所有子节点   
                  console.log("反选");   
                  $('#treeview2').treeview('uncheckNode', [childNodes, { silent: true }]);      
                }  
                // 取消节点 父节点取消
                var parentNode = $("#treeview2").treeview("getNode", node.parentId);  //获取父节点
                var selectNodes = getChildNodeIdArr(node);     
                setParentNodeCheck(node);
               
               
              // $('#treeview2').treeview('uncheckAll', { silent: true });
               
               
          } 
      	
      	
    });
    
    


	
	
});



