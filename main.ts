input.onButtonPressed(Button.A, function () {
    i += 1
    z = z + x
    w = z / i
    basic.pause(1000)
    basic.showNumber(i)
    if (i == 3) {
        basic.showNumber(w)
    }
})
let w = 0
let x = 0
let i = 0
let z = 0
z = 0
i = 0
basic.forever(function () {
    x = pins.analogReadPin(AnalogPin.P0)
})
