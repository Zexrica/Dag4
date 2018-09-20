// Opdracht 1
let grade = 6;

if (grade >= 0 && grade < 6) {
    console.log('onvoldoende');
} else if (grade >= 6 && grade < 7) {
    console.log('voldoende');
} else if (grade >= 7 && grade < 9) {
    console.log('goed');
} else if (grade >= 9 && grade <= 10) {
    console.log('uitmuntend');
} else {
    console.log('something went wrong');
};

// Opdracht 2
switch(true) {
    case (grade >= 0 && grade < 6):
        console.log('onvoldoende');
        break;
    case (grade >= 6 && grade < 7):
        console.log('voldoende');
        break;
    case (grade >= 7 && grade < 9):
        console.log('goed');
        break;
    case (grade >= 9 && grade <= 10):
        console.log('uitmuntend');
        break;
    default:
        console.log('something went wrong');
};

// Opdracht 3
const purchasedBook = true;
const job = 'techer';
const inTrain = false;

if (purchasedBook == true && job == 'teacher' && inTrain == true) {
    console.log('Finally, I can enjoy my book!');
} else if (purchasedBook == false && job == 'teacher' && inTrain == true) {
    console.log('I wish I had bought a book for this traintrip');
} else if (purchasedBook == true && job == 'teacher' && inTrain == false) {
    console.log("In just a little while I'll be able to read my newly bought book");
} else if (purchasedBook == false && job == 'teacher' && inTrain == false) {
    console.log('No book, no train, no worries');
} else if (job != 'teacher') {
    console.log("I don't seem to be a teacher, so I don't have to read books in trains");
} else {
    console.log('something went wrong.....');
};