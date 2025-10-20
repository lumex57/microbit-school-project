huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 10) {
        music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 300), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 300), music.PlaybackMode.UntilDone)
        } else {
        	
        }
    }
})
