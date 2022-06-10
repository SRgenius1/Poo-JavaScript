//! CLASS COURSE
class Course {
    constructor({name, clases = [], isFree = false, lang = 'spanish'}) {
        this._name = name;
        this.clases = clases;
        this.isFree = isFree;
        this.lang = lang;
    };
    
    get name () {
        return this._name;
    };

    set name (newName) {
        if (newName === "curso malito de programacion Basica") {
            console.error("you can not put this name");
        } else {
            this._name = newName;
        };
    };
};