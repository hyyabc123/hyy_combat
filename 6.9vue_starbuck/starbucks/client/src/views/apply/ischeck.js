class IsFile{
    constructor(el,options){
        this.type = el.type.match(/\/(\w+)$/i)[1]
        this.size = el.size        
        this.options=options
    }
    isType(){
        return this.options.type.includes(this.type) ? true : false
    }
    isSize(){
        return this.options.size*1024*1024 > this.size ? true :false
    }
}

export default IsFile