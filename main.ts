let Right = 0
let Left = 0
RingbitCar.init_wheel(AnalogPin.P2, AnalogPin.P1)
basic.forever(function () {
    Left = randint(-100, 100)
    Right = randint(-100, 100)
    basic.pause(1000)
    RingbitCar.freestyle(Left, Right)
})
