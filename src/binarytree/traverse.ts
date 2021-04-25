/**
 * binaryTree 来表示二叉树 ，node 表示当前节点，left表示左子树，right表示右子树
 *
 */

interface binaryTree {
    node:number,
    left?:binaryTree,
    right?:binaryTree
}

/**
 * 前序遍历 ,DFS，递归
 */
let preOrder =  (nodes:binaryTree) =>{
    const res:number[] = [];
    if(nodes.node){
        res.push(nodes.node);
        nodes.left&&preOrder(nodes.left);
        nodes.right&&preOrder(nodes.right);
    }
    return res;
}

/**
 * 前序遍历 ,DFS，非递归
 */

let preOrderPro = (nodes:binaryTree) =>{
    const res:number[]=[];
    const stack:binaryTree[]=[];
    nodes && stack.push(nodes);
    while(stack.length){
        let item = stack.pop();
        if(item?.node)res.push(item.node);
        if(item?.right)stack.push(item.right);
        if(item?.left)stack.push(item.left);
    }
    return res;
}

/**
 * 中序遍历 ，DFS， 递归
 */
 let inOrder =  (nodes:binaryTree) =>{
    const res:number[] = [];
    if(nodes.node){
        nodes.left&&preOrder(nodes.left);
        res.push(nodes.node);
        nodes.right&&preOrder(nodes.right);
    }
    return res;
}


/**
 * 中序遍历 ，DFS， 非递归
 */
let inOrderPro = (nodes:binaryTree)=>{

    const res:number[]=[];
    const stack:binaryTree[] = [];
    let tempnode:binaryTree = nodes;

    while(stack.length||tempnode!==null){
        if(tempnode){
            stack.push(tempnode);
            tempnode = tempnode.left as binaryTree;
        }else{
            let item:binaryTree = stack.pop() as binaryTree;
            res.push(item.node);
            tempnode = item.right as binaryTree
        }
    }
}


/**
 * 后续遍历 ，DFS， 递归
 */
 let postOrder =  (nodes:binaryTree) =>{
    const res:number[] = [];
    if(nodes.node){
        nodes.left&&preOrder(nodes.left);
        nodes.right&&preOrder(nodes.right);
        res.push(nodes.node);
    }
    return res;
}

/**
 * 后序遍历 ，DFS， 非递归
 */
 let postOrderPro = (nodes:binaryTree)=>{
    const res:number[]=[];
    const stack:binaryTree[]=[];
    while(nodes||stack.length){
        res.unshift(nodes.node);
        nodes.left&&stack.push(nodes.left);
        nodes.right&&stack.push(nodes.right);
        nodes = stack.pop() as binaryTree;
    }
}


/**
 * 层序遍历， BFS ，递归
 */



/**
 * 层序遍历， BFS ，非递归
 */