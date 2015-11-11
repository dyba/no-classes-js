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

    beforeEach(function() {
        subject = new Polygon();
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
});

describe('FilledPolygon instances', function() {
    var subject;

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
});
