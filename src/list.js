"use strict";

function List(vals) {
    if (vals !== undefined) {
        var values = vals;
    } else {
        var values = [];
    }

    this.isEmpty = function() {
        return values.length === 0;
    }

    this.head = function() {
        if (this.isEmpty()) {
            throw new Error("Can't read the head of an empty list.");
        } else {
            return values[0];
        }
    }

    this.cons = function(val) {
        return new List(values.concat([val]));
    }
}

module.exports = {
    List: List
}
