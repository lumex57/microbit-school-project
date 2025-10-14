let geori: number
// sonar.ping(DigitalPin.P2, DigitalPin.P2, PingUnit.MicroSeconds)
basic.forever(function () {
    console.log(geori)
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 10) {
        music.play(music.stringPlayable("C5 - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    }
})
