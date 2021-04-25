exports.lc102 = (nodes) => {
    const result = [];
    const queue= [];
    queue.push(nodes);
    while(queue.length){
        let res = [];
        let size = queue.length;
        for(let i = 0;i < size;i++){
            let item = queue.shift();
            res.push(item.node);
            item.left && queue.push(item.left);
            item.right && queue.push(item.right);
        }
        result.push(res);
    }
    return result;
};


exports.lc103 = (nodes)=>{
    const result = [];
    const queue = [];
    queue.push(nodes);
    while(queue.length){
        let res = [];
        let size = queue.length;
        for(let i=0;i<size;i++){
            let item = queue.shift();
            res.push(item.node);
            item.left&&queue.push(item.left);
            item.right&&queue.push(item.right);
        }
        res = (result.length+1)%2==0?res.reverse():res; //偶数层就反转
        result.push(res);
    }
    return result;
}


exports.lc236 = (nodes)=> {

}



