basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P0) < 10) {
        music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    }
})
