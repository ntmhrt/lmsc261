const activities = ["babysit tadpoles", "flies for lunch", "tongue stretch", "swimming lesson"];
let userIndex = Number(prompt("Enter an activity index:"));
let wrappedIndex = userIndex % activities.length;
let activityToPrint = activities[wrappedIndex];
print(activityToPrint);

