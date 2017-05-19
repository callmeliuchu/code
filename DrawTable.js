
function drawTable(jsonObj){
	    this.obj = jsonObj;

        var tbClass01 = "TB_TRANCATA_001";
        var tbClass02 = "TB_TRANCATA_002";
        var trClass01 = "TR_GETTRANCATA";
        var trClass02 = "TB_GETTRANCATA_HEAD";
        var tdClass01 = "FONT_GETTRANCATA_HEAD";
        var tdClass02 = "TD_GETTRANCATA_SINGLE";
        var tdClass03 = "TD_GETTRANCATA_DOUBLE";
        var tdClass04 = "TD_GETTRANCATA_SINGLE_hidden";
        var tdClass05 = "TD_GETTRANCATA_DOUBLE_hidden";
        var buttonClass01 = "prim_confirm";
        var fontClass01 = "bigtxt";
        var divClass01 = "FONT_GETTRANCATA_CONTENT";
        var INTEGER = "4";
        var FLOAT = "6";
        var DOUBLE = "8";
        var DECIMAL = "3";

       this.createObj=function(typeName,className,id){
           var obj=document.createElement(typeName);
           if(className){
           obj.className = className;
           }
           if(id){
           ogj.setAttribute("id",id);
           }
           return obj;
       }


		this.getTable=function(content){
			var table = "<table cellspacing='0' cellpadding='0' border='0' class='TB_TRANCATA_002'>" + content + "</table>";
		    return table;
		}

        this.createTable=function(tableClass){
        	var table = this.createObj("table",tableClass);
            return table;
        }
   

		this.getHeadFront=function(desc,fieldName){
			var str = "<font class='FONT_GETTRANCATA_HEAD' onclick="+ '"' + "searchAuto('"+fieldName+"')" + '" onmouseover="this.style.cursor=' + "'hand'" + '">' 
			   + "<b>" + desc + "</b></font>";
			return str;
		}

        this.createFront=function(desc,frontClass,fieldName){
            var front = this.createObj("front",frontClass);
            front.innerHTML = desc;
            front.onclick=function(){
            	searchAuto(fieldName);
            }
        }

       
		this.getCataHeadTd=function(frontContent){
			var scr = "<script language=\"javascript\">document.write(\"<img id=${col.onclickParam}_IMG style='display:none' width=15 height=15 border=0>\");</script>";
			var str = "<td class='FONT_GETTRANCATA_HEAD'>" + frontContent + scr +"</td>";
			return str;
		}

        this.createTd=function(className){
        	var td = this.createObj("td",className);
            return td;
        }

		this.getShowLineTr=function(){
			var str = "<tr class='TR_GETTRANCATA' "+ 'id="showLineFlag"><td bgcolor="#666666" colspan="100"></td></tr>';
			return str;
		}
         
        
        


        this.creatTr=function(className,id){
        	var tr = this.createObj("tr",className,id);
        	return tr;
        }
    
        
		this.getHeadTr=function(contentTr){
			var str = "<tr class='TB_GETTRANCATA_HEAD' id='headerId'>" + contentTr + "</tr>";
			return str;
		}

        
      
		this.getWrapp=function(contentTable){
			var str = "<table cellspacing='0' cellpadding='0' border='0' class='TB_TRANCATA_001'><tr class='TR_GETTRANCATA'><td>" + contentTable + "</td></tr></table>";
		    return str;
		}


		this.getResDiv=function(id,val,covVal){
			var str = '<div id="'+id+'" align="right"'+" class='FONT_GETTRANCATA_CONTENT'"+'  value="'+val+'">'+covVal+"</div>";
			return str;
		}

		this.getResTd=function(contentDiv){
			var str = "<td class='TD_GETTRANCATA_DOUBLE'>"+contentDiv+"</td>";
			return str;
		}

		this.getRowRes=function(num,len,rowObj){
			var str = "<tr class='TR_GETTRANCATA'>";
			var count = 0;
			for(var key in rowObj)
			if(count < len){
				var val = rowObj[key];
		        if(val=='null'){
		        	val="";
		        }
		        var covVal = val;
		        var div = this.getResDiv("R"+num+key,val,covVal);
		        var td = this.getResTd(div);
		        str = str + td;
		        count++;
			}
			str = str + "</tr>";
			return str;
		} 



		this.getHeadAndRes=function(o){
			var contentTr = "";
			var contentRes = "";
			var fieldArr = this.obj.fields;
			var resArr = this.obj.record;
			var valNum = 0;
			for(var i=0,len=fieldArr.length;i<len;i++){
				var field = fieldArr[i]; 
				var isHidden = field.Hidden == 'H' ? true : false;
				if(!isHidden){
				   frontStr = this.getHeadFront(field.Desc,field.fieldName);
				   tdStr = this.getCataHeadTd(frontStr);
			       contentTr = contentTr + tdStr;
			       valNum++;
				}
			}
			
			for(var i=0,len=resArr.length;i<len;i++){
				contentRes = contentRes + this.getRowRes(i,valNum,resArr[i]);
			}
			
			var content = this.getShowLineTr() + contentTr + contentRes;
			var res = this.getWrapp(this.getTable(content));
			return res;
		}
         
        return this;
}


