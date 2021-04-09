let lecture = 0
let note = 0
basic.forever(function () {
    lecture = pins.analogReadPin(AnalogPin.P1)
    note = pins.map(
    lecture,
    4,
    1023,
    131,
    988
    )
    music.ringTone(note)
})
