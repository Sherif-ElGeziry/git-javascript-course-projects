class Course {
    #price;

    set price(value) {
        if (value < 0) {
            throw 'Invalid value!';
        }
        this.#price = value;
    }

    get price() {
        return '$' + this.#price;
    }

    constructor(courseTitle, courseLength, coursePrice) {
        this.title = courseTitle;
        this.length = courseLength;
        this.price = coursePrice;
    }

    pricePerLength(length, price) {
        return this.length / this.#price;
    }

    printSummary() {
        console.log(`Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`)
    }
}

const javaScript = new Course('Java Script', 52, 10);
const css = new Course('CSS', 25, 5);

console.log(javaScript);
console.log(css);

console.log(javaScript.pricePerLength());
console.log(css.pricePerLength());

javaScript.printSummary();
css.printSummary();

class PracticalCourse extends Course {
    constructor(title, length, price, exercisesCount) {
        super(title, length, price)
        this.numOfExercises = exercisesCount;
    }
}

const html = new PracticalCourse('HTML', 13, 4, 10);
console.log(html);
html.printSummary();

class TheoreticalCourse extends Course {
    publish() {
        console.log('Publishing...');
    }
}

const nodeJs = new TheoreticalCourse('NodeJs', 25, 7)
nodeJs.price = 8;
// nodeJs.#price = 100; //Error
nodeJs.printSummary();
nodeJs.publish();