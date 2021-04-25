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
    const _preOrder = (n:binaryTree)=>{
        if(n.node){
            res.push(nodes.node);
            nodes.left&&_preOrder(nodes.left);
            nodes.right&&_preOrder(nodes.right);
        }
    }
   _preOrder(nodes);
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
    const _inOrder = (n:binaryTree)=>{
        if(n.node){
            nodes.left&&_inOrder(nodes.left);
            res.push(nodes.node);
            nodes.right&&_inOrder(nodes.right);
        }
    }
    _inOrder(nodes);
    return res;
}


/**
 * 中序遍历 ，DFS， 非递归
 */
let inOrderPro = (nodes:binaryTree)=>{

    const res:number[]=[];
    const stack:binaryTree[] = [];
    let tempNode:binaryTree = nodes;

    while(stack.length||tempNode!==null){
        if(tempNode){
            stack.push(tempNode);
            tempNode = tempNode.left as binaryTree;
        }else{
            let item:binaryTree = stack.pop() as binaryTree;
            res.push(item.node);
            tempNode = item.right as binaryTree
        }
    }
}


/**
 * 后续遍历 ，DFS， 递归
 */
 let postOrder =  (nodes:binaryTree) =>{
    const res:number[] = [];
    const _postOrder = (n:binaryTree)=>{
        if(n.node){
            res.push(nodes.node);
            nodes.left&&_postOrder(nodes.left);
            nodes.right&&_postOrder(nodes.right);
        }
    }
    _postOrder(nodes);
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
 * 层序遍历， BFS ，非递归, 从下至上
 */
let leverOrder = (nodes:binaryTree)=>{

}

/**
 * 层序遍历， BFS ，非递归, 从上至下
 */

let levelOrderPro = (nodes:binaryTree)=>{
    const res:number[]=[];
    const queue:binaryTree[] = [];
    queue.push(nodes);
    while(queue.length){
        let item = queue.shift() as binaryTree;
        res.push(item.node);
        item.left&& queue.push(item.left);
        item.right&& queue.push(item.right);
    }
    return res;
}