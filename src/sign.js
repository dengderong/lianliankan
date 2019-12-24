export default {
    setItem:function(){
        alert(11111)
    },
    saveSign:function(obj){
        var headers = {"content-type":"application/json;charset=utf-8"}
        headers.h5sign =  'object' === typeof(obj) && obj.sign ? this.setItem: ''
        return headers
    }

}