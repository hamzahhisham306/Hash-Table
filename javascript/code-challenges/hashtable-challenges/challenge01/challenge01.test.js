// Write your test here
// Write your test here
"use strict";

const { checkSum } = require('./challenge01');


describe('make test for function ', () => {
    it('input tree and the target ', () => {
        class NodeTRee {
            constructor(d) {
              this.data = d;
              this.left = null;
              this.right = null;
            }
          }
          
          class createTrees {
            constructor() {
              this.root = null;
            }
          
            addElement(key) {
              this.root = this.addElementRec(this.root, key);
            }
          
            addElementRec(root, data) {
              if (root == null) {
                root = new NodeTRee(data);
                return root;
              }
          
              if (data < root.data)
              root.left = this.addElementRec(root.left, data);
              else if (data > root.data)
                root.right = this.addElementRec(root.right, data);
          
              return root;
            }
          }
          var newTree = new createTrees();
          newTree.addElement(15);
          newTree.addElement(10);
          newTree.addElement(20);
          newTree.addElement(8);
          newTree.addElement(12);
          newTree.addElement(16);
          newTree.addElement(25);          

   let checkTree=checkSum(newTree, 33)

        expect(checkTree).toEqual(false);
     
        });
   
})