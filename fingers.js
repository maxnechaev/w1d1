var left = process.argv[2];
var right = process.argv[3];

console.log("Left: ", left);
console.log("Right: ", right);

// thumb - 6
// index - 7
// middle - 8
// ringer - 9
// pinky - 10


var leftJoinedFingers = left - 5;
var rightJoinedFingers = right - 5;
var leftRoamingFingers = 10 - left;
var rightRoamingFingers = 10 - right;


console.log("Left Hand: Joined - Roaming: ", leftJoinedFingers, leftRoamingFingers);
console.log("Right Hand: Joined - Roaming: ", rightJoinedFingers, rightRoamingFingers);

var joinedFingers = leftJoinedFingers + rightJoinedFingers;
joinedFingers *= 10;
console.log("Joined Fingers: ", joinedFingers);

var roamingFingers = leftRoamingFingers * rightRoamingFingers;
console.log("Roaming Fingers: ", roamingFingers);

console.log("Final: ", joinedFingers + roamingFingers);
console.log("Proof: ", left * right);

//var joinedFingers = leftJoinedFingers + rightJoinedFingers;
