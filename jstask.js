/**
 * Created by Кристина on 25.11.2015.
 */
var Categories = [
    { name: 'notebook', parent: 'computer' },
    { name: '15inch', parent: 'notebook' },
    { name: 'computer', parent: 'catalog' },
    { name: 'desktop', parent: 'computer' }
];

function makeTree(tree, obj, parent) {
    if (tree) { // дерево уже есть
        for (var i = 0; i < obj.length; i++) {
            if (parent === obj[i].parent) {
                var newTree = { name: obj[i].name, child: [] };//для каждого найденного ребенка новое дерево
                makeTree(newTree, obj, newTree.name);
                tree.child.push(newTree);
            }
        }
        return tree;
    } else { // дерева ещё нет,находим корень
        var root = null;
        for (var i = 0; i < obj.length; i++) {
            root = obj[i].parent;
            for (var j = 0; j < obj.length; j++) {
                if (root === obj[j].name) {
                    root = obj[j].parent;
                }
            }
        }
        if (root) { // создать дерево
            tree = { name: root, child: [] };
            return makeTree(tree, obj, root);
        }
    }
}

console.log(makeTree(null, Categories, null));