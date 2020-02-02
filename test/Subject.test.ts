let describe = require('mocha').describe;
let it = require('mocha').it;
let assert = require('assert');

import Subject from '../src/Subject'

class FinalSubject extends Subject<any> {
    constructor() {
        super();
    }
}

describe('Subject', function() {
    // public
    describe('#subscribe', function() {
        let subj = new FinalSubject();
        it('subscribe adds callback to array', function() {
            function fn() {}
            subj.subscribe(fn);
            assert.equal(subj['callbacks'][0], fn);
        })
    })

    // protected
    describe('#emit', function() {
        let subj = new FinalSubject();
        let val = 0;
        let val2 = 'hello';
        function fn(e) { val = e; }
        function fn2() { val2 = 'goodbye'; }

        subj.subscribe(fn, fn2);
        it('emit calls each callback function', function() {
            subj['emit'](2);
            assert.equal(val, 2);
            assert.equal(val2, 'goodbye');
        })
    })

    // private
    describe('#callbacks', function() {
        let subj = new FinalSubject();
        it('Subject.callbacks is an array', function() {
            assert.equal(typeof subj['callbacks'], typeof []);
        })
    })
})

