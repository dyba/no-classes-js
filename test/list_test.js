var expect = require('expect.js');
var List = require('../src/list.js');

describe('List instances', function() {
    var subject;

    beforeEach(function() {
        subject = new List.List();
    });

    it('is empty', function() {
        expect(subject.isEmpty()).to.equal(true);
    });

    describe('head', function() {
        describe('for empty lists', function() {
            it('throws an error when calling head', function() {
                expect(subject.head).to.throwError();
            });
        });
    });

    describe('consing', function() {
        it('returns a new list with the consed value', function() {
            fresh = subject.cons(1);

            expect(fresh.head()).to.equal(1);
            expect(subject.isEmpty()).to.be(true);
        });
    });
});
