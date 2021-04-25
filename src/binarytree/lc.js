const lc102 = (nodes) => {
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


const lc103 = (nodes) => {
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


/**
 * 有点难理解
 *
    1.使用递归遍历所有节点，如果一个节点的左右子树中同时含有 p 和 q，则它就是最近公共祖先。
    2.递归终止条件有两种：
    * 如果当前节点是 p 或 q，则将其返回。
    * 如果当前节点为空，则退出循环。
   3.递归分别下探到左右子节点，同时获取他们的返回值，返回值存在两种情况：
    * 如果返回值同时含有 p 和 q，表示当前节点为公共祖先，则将其返回。由于第一次遇到公共祖先后，就会将其返回，其上层的递归不会在遇到 p 或 q，那么这个节点必然为最近公共祖先。
    * 如果返回值不同时含有 p 或 q，则将其中之一返回给上层递归判断。如果 p 或 q 自身就是最近公共祖先，其自身就会不断被返回，成为递归的最终结果
    *
 */
const lc236 = (root,p,q)=> {
    // 如果root不存在，直接退出循环
    // 如果查询到p或q，则将其返回，供上层递归判断
    if (!root || root.node === p || root.node === q) {
        return root
    }
    // 获取在子树中匹配到的p和q节点
    const left = lc236(root.left, p, q);
    const right = lc236(root.right, p, q);
    // 如果p和q同时匹配到，当前节点即为最近公共祖先
    if (left && right) {
        return root
    }
    // 如果没有同时匹配到p和q，就将匹配到的节点返回给上层判断
    // 最近公共祖先是其本身的情况，会通过该步骤返回
    return left || right;
}


module.exports = {
    lc102,
    lc103,
    lc236
}
