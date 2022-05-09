const ppt2html=require('./lib/ppt2html')

let tagFn=(args,content)=>{
    console.log(args[0])
    content=ppt2html(args[0]);
    return content;
}
hexo.extend.tag.register('ppt',tagFn);
