// Write your test here
// Write your test here
"use strict";

const {  foundDuplicateString} = require('./challenge02');


describe('make test for function ', () => {
    it('input tree and the target ', () => {
        let string = "ASAC is a department at LTUC. ASAC teaches programming in LTUC";
        expect(foundDuplicateString(string)).toEqual('asac');
     
        });
   
})// Write your test here
