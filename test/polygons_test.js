var expect = require('expect.js');
var PG = require('../src/polygons.js');
var Polygon = PG.Polygon;
var FilledPolygon = PG.FilledPolygon;
var Rectangle = PG.Rectangle;

var polygonCopyTraitTest = function(subject) {
    return function() {
        expect(subject.copy()).to.equal('return a copy of the receiver');
    };
};

var polygonTraitBehaviorTests = function(subject) {
    describe('Polygon Trait behavior', function() {
        it('can copy', polygonCopyTraitTest(subject));

        it('can draw', function() {
            expect(subject.draw()).to.equal('draw on some display');
        });
    });
};

var polygonTraitPropertiesTests = function(subject) {
    describe('Polygon Trait properties', function() {
        it('is frozen', function() {
            expect(Object.isFrozen(subject)).to.be.ok();
        });
    });
};

var polygonInstanceBehaviorTests = function(subject) {
    describe('Polygon Instance behavior', function() {
        it('contains no vertices', function() {
            expect(subject.vertices()).to.eql([]);
        });
    });
};

describe('Polygon instances', function() {
    describe('when using the new keyword', function() {
        polygonTraitBehaviorTests(new Polygon());
        polygonTraitPropertiesTests(new Polygon());
        polygonInstanceBehaviorTests(new Polygon());
    });

    describe('when not using the new keyword', function() {
        polygonTraitBehaviorTests(Polygon());
        polygonTraitPropertiesTests(Polygon());
        polygonInstanceBehaviorTests(Polygon());
    });
});

describe('FilledPolygon instances', function() {
    var filledPolygonBehaviorTests = function(subject) {
        describe('FilledPolygon Instance behavior', function() {
            it('fills when it draws', function() {
                expect(subject.draw()).to.equal('I draw filled.');
            });

            it('has a fill pattern', function() {
                expect(subject.fillPattern()).to.equal('fill pattern');
            });
        })
    };

    var selectPolygonTraitBehaviorTests = function(subject) {
        describe('Polygon Trait behavior', function() {
            it('can copy', polygonCopyTraitTest(subject));
        });
    };

    describe('when using the new keyword', function() {
        selectPolygonTraitBehaviorTests(new FilledPolygon());
        filledPolygonBehaviorTests(new FilledPolygon());
    });

    describe('when not using the new keyword', function() {
        selectPolygonTraitBehaviorTests(FilledPolygon());
        filledPolygonBehaviorTests(FilledPolygon());
    });
});

describe('Rectangle instances', function() {
    var selectPolygonTraitBehaviorTests = function(subject) {
        describe('Polygon Trait behavior', function() {
            it('can copy', polygonCopyTraitTest(subject));
        });
    };

    describe('when using the new keyword', function() {
        selectPolygonTraitBehaviorTests(new Rectangle());
    });

    describe('when not using the new keyword', function() {
        selectPolygonTraitBehaviorTests(Rectangle());
    });
});
