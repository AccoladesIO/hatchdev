"use strict";
class Hashmap {
    constructor() {
        this.map = {};
    }
    set(key, value) {
        this.map[String(key)] = value;
    }
    has(key) {
        for (const k in this.map) {
            if (k === key) {
                return true;
            }
        }
        return false;
    }
    get(key) {
        return this.map[String(key)];
    }
    delete(key) {
        if (this.has(key)) {
            delete this.map[String(key)];
        }
    }
    clear() {
        this.map = {};
    }
    keys() {
        return Object.keys(this.map);
    }
}
const myMap = new Hashmap();
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);
console.log(myMap);
console.log(myMap.get("two"));
console.log(myMap.has("four"));
myMap.delete("two");
console.log(myMap.keys());
