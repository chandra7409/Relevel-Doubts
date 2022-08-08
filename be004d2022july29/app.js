
Inorder
Preorder
PostOrder
        4
    2       5
1       3
        A
    B       C
D       E
function inOrder(node){
    if(node === null) return
    inOrder(node.left)
    console.log(node.data)
    inOrder(node.right)
    1 2 3 4 5
}
function preOrder(node){
    if(node === null) return
    console.log(node.data)
    inOrder(node.left)
    inOrder(node.right)
    A B D E C
}
function postOrder(node){
    if(node === null) return
    inOrder(node.left)
    inOrder(node.right)
    console.log(node.data)
    D E B C A
}