// let age = 17;
// let ticketType = "";

// if (age < 5) {
//     ticketType = "infant";
// } else if (age <= 12) {
//     ticketType = "child";
// } else if (age <= 17) {
//     ticketType = "teen";
// } else if (age <= 64) {
//     ticketType = "adult";
// } else {
//     ticketType = "senior";
// }

// switch (ticketType) {
//     case "infant":
//         console.log("Free ticket – Infant");
//         break;
//     case "child":
//         console.log("Child ticket – Discounted price");
//         break;
//     case "teen":
//         console.log("Teen ticket – Standard price");
//         break;
//     case "adult":
//         console.log("Adult ticket – Full price");
//         break;
//     case "senior":
//         console.log("Senior ticket – Discounted price");
//         break;
//     default:
//         console.log("Invalid age category");
// }

let firstName = "Mohamed";

switch (firstName) {
    case "Mohamed":
        console.log("Welcome back, Mohamed! Your dashboard is ready.");
        break;
    case "Amina":
        console.log("Hello Amina! You have new notifications.");
        break;
    case "Ali":
        console.log("Hi Ali! Your subscription expires soon.");
        break;
    case "Fatima":
        console.log("Good to see you again, Fatima!");
        break;
    default:
        console.log("Hello! Please sign up or log in.");
}
