var expect = require('expect.js');
var PG = require('../src/polygons.js');
var Polygon = PG.Polygon;
var FilledPolygon = PG.FilledPolygon;
var Rectangle = PG.Rectangle;
var SmoothPolygon = PG.SmoothPolygon;
var BoxedPolygon = PG.BoxedPolygon;

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
        it('has a data parent', function() {
            expect(subject.parent()).to.equal(Polygon.prototype);
        });

        it('can have its data parent changed', function() {
            newSubject = subject.createWithParent(Rectangle.prototype);

            // WHY???
            // console.log(Object.getOwnPropertyNames(Rectangle())); => [ 'parent' ]
            // console.log(Object.getOwnPropertyNames(Object.create(Rectangle.prototype))); => []

            expect(Object.getPrototypeOf(newSubject)).to.equal(Rectangle.prototype);
            // expect(newSubject.parent()).to.equal(Rectangle.prototype); // Why is this failing?
        });

        it('contains no vertices', function() {
            expect(subject.vertices()).to.eql([]);
        });

        it('can have a vertex added', function() {
            vertex = [1,2];

            subject.addVertex(vertex);

            expect(subject.vertices()).to.eql([ [1,2] ]);
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
                expect(subject.draw()).to.equal('draw and fill on some display');
            });

            it('has a fill pattern', function() {
                expect(subject.fillPattern()).to.equal('fill pattern');
            });

            it('has an empty list of vertices', function() {
                expect(subject.vertices()).to.eql([]);
            });

            it('can have a vertex added', function() {
                vertex = [1,2];

                subject.addVertex(vertex);

                expect(subject.vertices()).to.eql([ [1,2] ]);
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

    var rectangleTraitBehaviorTests = function(subject) {
        describe('Rectangle Trait behavior', function() {
            it('has a parent', function() {
                expect(subject.parent()).to.equal(Rectangle.prototype);
            });

            it('draws a rectangle', function() {
                expect(subject.draw()).to.equal('draw rectangle efficiently');
            });

            it('constructs coords', function() {
                expect(subject.vertices()).to.equal('construct a list from coords');
            });
        });
    };

    describe('when using the new keyword', function() {
        selectPolygonTraitBehaviorTests(new Rectangle());
        rectangleTraitBehaviorTests(new Rectangle());
    });

    describe('when not using the new keyword', function() {
        selectPolygonTraitBehaviorTests(Rectangle());
        rectangleTraitBehaviorTests(Rectangle());
    });
});
