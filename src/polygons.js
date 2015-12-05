"use strict";

function Polygon() {
    var vertices = [];

    let self = this instanceof Polygon ? this : Object.create(Polygon.prototype);

    self.vertices = function() {
        return vertices;
    }
    self.addVertex = function(vertex) {
        vertices.push(vertex);
    }
    self.parent = function() {
        return Object.getPrototypeOf(self);
    }

    return self;
};

// copy and draw are shared by all instances of Polygon
// We call Polygon.prototype the traits object, because it shares its
// traits like any parent would with its children
Polygon.prototype = {
    copy: function() {
        return 'return a copy of the receiver';
    },
    draw: function() {
        return 'draw on some display';
    }
};

function FilledPolygon() {
    var fillPattern = 'fill pattern';
    var vertices = [];

    let self = this instanceof FilledPolygon ? this : Object.create(FilledPolygon.prototype);

    self.fillPattern = function() {
        return fillPattern;
    }
    self.addVertex = function(vertex) {
        vertices.push(vertex);
    }
    self.vertices = function() {
        return vertices;
    }

    return self;
}

FilledPolygon.prototype = Object.create(Polygon.prototype, {
    draw: {
        value: function() {
            return 'draw and fill on some display';
        },
        enumerable: true
    }
});

function Rectangle() {
    let self = this instanceof Rectangle ? this : Object.create(Rectangle.prototype);
    var height = 0;
    var width = 0;

    self.height = function() {
        return height;
    }
    self.width = function() {
        return width;
    }
    self.setHeight = function(h) {
        height = h;
    }
    self.setWidth = function(w) {
        width = w;
    }

    return self;
};

Rectangle.prototype = Object.create(Polygon.prototype, {
    draw: {
        value: function() {
            return 'draw rectangle efficiently';
        },
        enumerable: true
    },
    vertices: {
        value: function() {
            return 'construct a list from coords';
        },
        enumerable: true
    }
});

function SmoothPolygon() {
    let self = this instanceof SmoothPolygon ? this : Object.create(SmoothPolygon.prototype);

    return self;
};

SmoothPolygon.prototype = Object.create(Polygon.prototype, {
    draw: {
        value: function() {
            return 'draw smooth polygon';
        }
    }
});

function BoxedPolygon() {
    let self = this instanceof BoxedPolygon ? this : Object.create(BoxedPolygon.prototype);

    return self;
};

BoxedPolygon.prototype = Object.create(Polygon.prototype, {
    draw: {
        value: function() {
            return 'draw boxed polygon';
        }
    }
});

module.exports = {
    Polygon: Polygon,
    FilledPolygon: FilledPolygon,
    Rectangle: Rectangle,
    SmoothPolygon: SmoothPolygon,
    BoxedPolygon: BoxedPolygon
}
