var nodes = {
    node: 6,
    left: {
      node: 5, 
      left: { 
        node: 4 
      }, 
      right: { 
        node: 3 
      }
    },
    right: { 
      node: 2, 
      right: { 
        node: 1 
      } 
    }
}

var dfs = function(nodes) {
    var result = []
    var stack = []
    var item = nodes
    stack.push(nodes)
    while (stack.length) {
      if(item.left && !item.touched) {
        item.touched = true
        item = item.left
        stack.push(item)
        continue
      }
      item.touched && delete item.touched // 清理标记
      item = stack.pop()
      result.push(item.node)
      item.right && stack.push(item.right)
    }
    return result
}

// 结果数组中依次进入的是节点的左孩子，右孩子，节点本身，注意使用的是
// unshift，与前序遍历push不同，每次数组头部添加元素，实际上就是前序 遍历的逆序过程
const postorderTraversal = function(root) {
  const res = [], stack = []
  while (root || stack.length) {
      res.unshift(root.node)
      root.left && stack.push(root.left)
      root.right && stack.push(root.right)
      root = stack.pop()
  }
  return res
};


console.log(postorderTraversal(nodes));