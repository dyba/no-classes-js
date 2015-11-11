var Polygon = function Polygon() {
    var vertices = [];
    this.vertices = function() {
        return vertices;
    };
};

// copy and draw are shared by all instances of Polygon
// We call Polygon.prototype the traits object, because it shares its
// traits like any parent would with its children
Polygon.prototype = {
    copy: function() {
        return "I copy.";
    },
    draw: function() {
        return "I draw.";
    }
};

var FilledPolygon = function FilledPolygon() {
    var fillPattern = "fill pattern";
    this.fillPattern = function() {
        return fillPattern;
    };
}

FilledPolygon.prototype = Object.create(Polygon.prototype, {
    draw: {
        value: function() {
            return 'I draw filled.';
        }
    }
});

module.exports = {
    Polygon: Polygon,
    FilledPolygon: FilledPolygon
}
