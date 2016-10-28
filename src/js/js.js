/**
 * Created by Administrator on 15-10-20.
 */
function fontAuto(){
    var winW=document.documentElement.clientWidth;
    if(winW>=750)
    {
        document.documentElement.style.fontSize="625%";
    }
    else
    {
        document.documentElement.style.fontSize=(winW/750*625)+"%";
    }
}
fontAuto();
window.onresize=fontAuto;

function parentObj(obj){
    obj=obj.parentNode;
    if(obj.id)
    {
        return obj;
    }
    else
    {
        return parentObj(obj);
    }
}