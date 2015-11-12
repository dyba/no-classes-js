var expect = require('expect.js');
var PG = require('../src/polygons.js');
var Polygon = PG.Polygon;
var FilledPolygon = PG.FilledPolygon;

describe('Polygon prototype', function() {
    var subject;

    beforeEach(function() {
        subject = Polygon.prototype
    });

    it('can copy', function() {
        expect(subject.copy()).to.equal('I copy.');
    });

    it('can draw', function() {
        expect(subject.draw()).to.equal('I draw.');
    });
});

describe('Polygon instances', function() {
    var subject;

    var polygonInstanceTests = function(theSubject) {
        return function() {
            beforeEach(function() {
                subject = theSubject;
            });

            it('can copy', function() {
                expect(subject.copy()).to.equal('I copy.');
            });

            it('can draw', function() {
                expect(subject.draw()).to.equal('I draw.');
            });

            it('contains no vertices', function() {
                expect(subject.vertices()).to.eql([]);
            });

            it('is frozen', function() {
                expect(Object.isFrozen(subject)).to.be.ok();
            });
        };
    };

    describe('when using the new keyword', polygonInstanceTests(new Polygon()));
    describe('when not using the new keyword', polygonInstanceTests(Polygon()));
});

describe('FilledPolygon instances', function() {
    var subject;

    var filledPolygonInstanceTests = function(theSubject) {
        return function() {
            beforeEach(function() {
                subject = new FilledPolygon();
            });

            it('fills when it draws', function() {
                expect(subject.draw()).to.equal('I draw filled.');
            });

            it('has a fill pattern', function() {
                expect(subject.fillPattern()).to.equal('fill pattern');
            });

            it('can copy', function() {
                expect(subject.copy()).to.equal('I copy.');
            });

            it('is frozen', function() {
                expect(Object.isFrozen(subject)).to.be.ok();
            });
        };
    };

    describe('when using the new keyword', filledPolygonInstanceTests(new FilledPolygon()));
    describe('when not using the new keyword', filledPolygonInstanceTests(FilledPolygon()));
});
