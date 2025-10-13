let geori: number

basic.forever(function () {
    // if (geori)
    console.log(geori)
    // sonar.ping(DigitalPin.P2, DigitalPin.P2, PingUnit.MicroSeconds)
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 10) {
        music.play(music.stringPlayable("C5 - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    }
})
