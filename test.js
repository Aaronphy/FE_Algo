const { lc102,lc103,lc236 } = require('./src/binarytree/lc.js');

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


console.log(lc236(nodes,3,4));






