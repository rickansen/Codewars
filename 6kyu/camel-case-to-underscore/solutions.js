const toUnderScore = name => {
    let res = name.replace(/[A-Z]|\d{1,}/g, a => `_${a}`).replace(/_{1,}/g, "_")
    return /[a-z]|_/.test(name[0]) ? res : res.slice(1)
}

console.log(
    toUnderScore("ThisIsAUnitTest"), "This_Is_A_Unit_Test");
console.log(
    toUnderScore("ThisShouldBeSplittedCorrectIntoUnderscore"), "This_Should_Be_Splitted_Correct_Into_Underscore");    

console.log(
    toUnderScore("Calculate1Plus1Equals2"), "Calculate_1_Plus_1_Equals_2");
console.log(
    toUnderScore("Calculate15Plus5Equals20"), "Calculate_15_Plus_5_Equals_20");
console.log(
    toUnderScore("Calculate500DividedBy5Equals100"), "Calculate_500_Divided_By_5_Equals_100");

console.log(
    toUnderScore("This_Is_Already_Splitted_Correct"), "This_Is_Already_Splitted_Correct");
console.log(
    toUnderScore("ThisIs_Not_SplittedCorrect"), "This_Is_Not_Splitted_Correct");
console.log(
    toUnderScore("_IfATestStartAndEndsWithUnderscore_ItShouldBeTheSame_"), "_If_A_Test_Start_And_Ends_With_Underscore_It_Should_Be_The_Same_");
    console.log(
        toUnderScore("uIoB"), "This_Is_Already_Splitted_Correct");