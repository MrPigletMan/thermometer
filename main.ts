input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    CFK = "C"
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    CFK = "K"
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    CFK = "F"
})
let Temperature = 0
let CFK = ""
CFK = "C"
basic.forever(function () {
    if (CFK == "C") {
        Temperature = input.temperature()
    } else if (CFK == "F") {
        Temperature = input.temperature() * 1.8 + 32
    } else {
        Temperature = input.temperature() + 273.15
    }
})
basic.forever(function () {
    basic.showString("" + Temperature + CFK)
})
