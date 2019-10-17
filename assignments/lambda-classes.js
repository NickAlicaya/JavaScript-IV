// CODE here for your Lambda Classes
class Person {
	constructor(attrib) {
		this.name = attrib.name,
			this.location = attrib.location,
			this.age = attrib.age
	}
	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
	}
}
class Instructor extends Person {
	constructor(attrib) {
		super(attrib);
		this.specialty = attrib.specialty,
			this.favLanguage = attrib.favLanguage,
			this.catchPhrase = attrib.catchPhrase
		// this.student = attrib.student,
		// this.subject = attrib.subject;
	}
	demo(subject) {
		return `Today we are learning about ${subject}.`;
	}
	grade(student, subject) {
		return (`${student.name} receives a perfect score on ${subject}.`);
		//Need to clarify student object
	}
}

class Student extends Person {
	constructor(attrib) {
		super(attrib);
		this.previousBackground = attrib.previousBackground,
			this.className = attrib.className,
			this.favSubjects = attrib.favSubjects; //looks like an array or list
		this.subject = attrib.subject;
	}
	listsSubjects() {
		this.favSubjects.forEach(subject => {
			return console.log(subject);
		});
	}

	PRAssignment() {
		return `${this.name} has submitted a PR for ${this.subject}`;
	}
	sprintChallenge() {
		return `${this.name} has begun sprint challenge on ${this.subject}.`;
	}
}
class ProjectManager extends Instructor {
	constructor(attrib) {
		super(attrib);
		this.gradClassName = attrib.gradClassName,
			this.favInstructor = attrib.gradClassName;
	}
	standUp(channel) {
		return `${this.name} announces to ${channel} @channel standby times!`;
	}
	debugsCode(student, subject) {
		return `${this.name} debugs ${student} code on ${subject}`;
	}
}

const personOne = new Person({
	name: "Barney",
	location: "Bedrock",
	age: 32
});
const personTwo = new Person({
	name: "Jake",
	location: "NY",
	age: 23
});

const instructorOne = new Instructor({
	name: "Fred",
	location: "Bedrock",
	age: 37,
	specialty: "Front-end",
	favLanguage: "JavaScript",
	catchPhrase: "Dont forget the homies",
	// student: "James",
	// subject: "HTML"
});

const instructorTwo = new Instructor({
	name: "Harry",
	location: "Ohio",
	age: 40,
	specialty: "Back-end",
	favLanguage: "HTML",
	catchPhrase: "You got this!",
	// student: "John",
	// subject: "CSS"
});

const studentOne = new Student({
	name: "Barney",
	location: "Bedrock",
	age: 32,
	previousBackground: "Engineer",
	className: "CS101",
	favSubjects: ["CSS", "Python", "Ruby"]
});
const studentTwo = new Student({
	name: "Louis",
	location: "CA",
	age: 27,
	previousBackground: "Healthcare",
	className: "CS201",
	favSubjects: ["HTML", "Python", "Ruby"]
});

const projManagerOne = new ProjectManager({
	name: "Rudy",
	location: "DC",
	age: 49,
	specialty: "Android",
	favLanguage: "HTML",
	catchPhrase: "Just relax!",
	student: "Jen",
	subject: "Ruby",
	gradClassName: "CS303",
	favInstructor: "Jenny"
});

const projManagerTwo = new ProjectManager({
	name: "Laura",
	location: "NY",
	age: 28,
	specialty: "Data Science",
	favLanguage: "Algoriths",
	catchPhrase: "Just show up!",
	student: "Nicky",
	subject: "Java",
	gradClassName: "CS400",
	favInstructor: "Arnold"
});

console.log(personOne.name);
console.log(personOne.speak());
console.log(instructorOne.demo());
console.log(instructorOne.grade(studentOne, 'HTML'));
// console.log(studentOne.listsSubjects());
console.log(projManagerOne.standUp('channel'))
console.log(projManagerTwo.debugsCode('Nicky', 'Java'))