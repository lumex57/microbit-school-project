basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 10) {
        music.play(music.stringPlayable("C5 - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    }
})
