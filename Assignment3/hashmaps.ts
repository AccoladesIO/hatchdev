class Hashmap<k, v> {
    private map: Record<string, v> = {}

    set(key: k, value: v): void {
        this.map[String(key)] = value;
    }
    has(key: k): boolean {
        for (const k in this.map) {
            if (k === key) {
                return true;
            }
        }
        return false;
    }
    get(key: k): v | undefined {
        return this.map[String(key)]
    }
    delete(key: k): void {
        if (this.has(key)) {
            delete this.map[String(key)];
        }
    }
    clear(): void {
        this.map = {};
    }
    keys(): string[] {
        return Object.keys(this.map);
    }

}

const myMap = new Hashmap<string, number>();
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);
console.log(myMap); 
console.log(myMap.get("two"));
console.log(myMap.has("four"));
myMap.delete("two");
console.log(myMap.keys());
