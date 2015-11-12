function Polygon() {
    var vertices = [];

    return Object.freeze(Object.create(Polygon.prototype, {
        addVertex: {
            value: function(vertex) {
                vertices.push(vertex);
            }
        },
        vertices: {
            value: function() {
                return vertices;
            }
        },
        parent: {
            value: function() {
                return Object.getPrototypeOf(this);
            }
        },
        createWithParent: {
            value: function(parent) {
                return Object.create(parent);
            }
        }
    }));
};

// copy and draw are shared by all instances of Polygon
// We call Polygon.prototype the traits object, because it shares its
// traits like any parent would with its children
Polygon.prototype = Object.freeze({
    copy: function() {
        return 'return a copy of the receiver';
    },
    draw: function() {
        return 'draw on some display';
    }
});

function FilledPolygon() {
    var fillPattern = 'fill pattern';
    var vertices = [];

    return Object.freeze(Object.create(FilledPolygon.prototype, {
        fillPattern: {
            value: function() {
                return fillPattern;
            }
        },
        addVertex: {
            value: function(vertex) {
                vertices.push(vertex);
            }
        },
        vertices: {
            value: function() {
                return vertices;
            }
        }
    }));
}

FilledPolygon.prototype = Object.freeze(Object.create(Polygon.prototype, {
    draw: {
        value: function() {
            return 'draw and fill on some display';
        }
    }
}));

function Rectangle() {
    return Object.freeze(Object.create(Rectangle.prototype, {
        parent: {
            value: function() {
                return Object.getPrototypeOf(this);
            }
        }
        // Add functions left, right, top, bottom
        // You can't manipulate the vertices directly
    }));
};

Rectangle.prototype = Object.freeze(Object.create(Polygon.prototype, {
    draw: {
        value: function() {
            return 'draw rectangle efficiently';
        }
    },
    vertices: {
        value: function() {
            return 'construct a list from coords';
        }
    }
}));

function SmoothPolygon() {
    return Object.freeze({});
};

SmoothPolygon.prototype = Object.freeze(Object.create(Polygon.prototype, {
    draw: {
        value: function() {
            return 'draw smooth polygon';
        }
    }
}));

function BoxedPolygon() {
    return Object.freeze({});
};

BoxedPolygon.prototype = Object.freeze(Object.create(Polygon.prototype, {
    draw: {
        value: function() {
            return 'draw boxed polygon';
        }
    }
}));

module.exports = {
    Polygon: Polygon,
    FilledPolygon: FilledPolygon,
    Rectangle: Rectangle,
    SmoothPolygon: SmoothPolygon,
    BoxedPolygon: BoxedPolygon
}
