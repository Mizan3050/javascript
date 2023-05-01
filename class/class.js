function ClassRepresentation(){
    /**
     * without using new keyword for this funtion, value 'this' will be the global window object
     * with new keyword the value of 'this' will be the empty object of this function itself
     * new keyword creates a empty object {} which will be value of 'this' here 
     */
    console.log(this);
}

const newClass = new ClassRepresentation();
console.log(newClass);