function bmi(weight, height) {
    let CalcdBmi = weight / (height ** 2)
    if (CalcdBmi <= 18.5){ 
        return "Underweight"
    } else if (CalcdBmi <= 25.0){ 
        return "Normal"
    } else if (CalcdBmi <= 30.0){ 
        return "Overweight"
    } else if (CalcdBmi > 30){ 
        return "Obese"
    }
}
