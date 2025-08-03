let age = 17;

if (age < 5) {
    console.log("Free ticket – Infant");
} else if (age >= 5 && age <= 12) {
    console.log("Child ticket – Discounted price");
} else if (age >= 13 && age <= 17) {
    console.log("Teen ticket – Standard price");
} else if (age >= 18 && age <= 64) {
    console.log("Adult ticket – Full price");
} else {
    console.log("Senior ticket – Discounted price");
}
