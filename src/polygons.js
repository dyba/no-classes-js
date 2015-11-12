function Polygon() {
    var vertices = [];

    return Object.freeze(Object.create(Polygon.prototype, {
        vertices: {
            value: function() {
                return vertices;
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

    return Object.freeze(Object.create(FilledPolygon.prototype, {
        fillPattern: {
            value: function() {
                return fillPattern;
            }
        }
    }));
}

FilledPolygon.prototype = Object.freeze(Object.create(Polygon.prototype, {
    draw: {
        value: function() {
            return 'I draw filled.';
        }
    }
}));

function Rectangle() {
    return Object.freeze(Object.create(Rectangle.prototype, {
    }));
};

Rectangle.prototype = Object.freeze(Object.create(Polygon.prototype, {
    draw: {
        value: function() {
            return 'I draw rectangle.';
        }
    }
}));

module.exports = {
    Polygon: Polygon,
    FilledPolygon: FilledPolygon,
    Rectangle: Rectangle
}
