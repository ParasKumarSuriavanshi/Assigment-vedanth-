let people = [
    { firstName: "Rahul", gender: "male" },
    { firstName: "Anita", gender: "female" },
    { firstName: "Amit", gender: "male" }
];

for (let i = 0; i < people.length; i++) {
    if (people[i].gender === "male") {
        console.log(people[i].firstName);
    }
}