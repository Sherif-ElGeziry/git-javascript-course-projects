const taskOne = [4, 34, 46, 6, 25, 757];
console.log(taskOne);

const taskOne1 = taskOne.filter(num => num > 6);
console.log(taskOne1);

const taskOne2 = taskOne.map(number => ({ number: number }));
console.log(taskOne2);

const taskOne3 = taskOne.reduce((mult, number) => mult * number, 1);
console.log(taskOne3);

// const taskTwo = Math.max(...taskOne);
// console.log(taskTwo);

function taskTwo(...nums) {
    let curMax = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
    }
    return curMax;
}
console.log(taskTwo(...taskOne));

function taskThree(...nums) {
    let curMax = nums[0];
    let curMin = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
        if (num < curMin) {
            curMin = num;
        }
    }
    return [curMin, curMax];
}
const [taskThreeMin, taskThreeMax] = taskThree(...taskOne);
console.log(taskThreeMin, taskThreeMax);

const taskFour = new Set();
taskFour.add(3);
taskFour.add(34534);
taskFour.add(3534);
taskFour.add(3453);
taskFour.add(3);
taskFour.add(3453);
console.log(taskFour);