control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    morse.keyUp()
    music.stopAllSounds()
    basic.pause(1)
    if (PTTon == 1) {
        radio.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_UP
        )
        radio.sendNumber(0)
    } else {
        pins.analogWritePin(AnalogPin.P15, 1023)
    }
})
radio.onReceivedNumber(function (receivedNumber) {
    if (PTTon == 1) {
        music.stopAllSounds()
        PTTon = 0
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
})
function playMusic (tuneNumber: number) {
    if (tuneNumber == 1) {
        music.setTempo(160)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(415, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(415, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(311, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
    }
    if (tuneNumber == 2) {
        music.setTempo(175)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(466, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(466, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Double))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
    }
    if (tuneNumber == 3) {
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
    }
    if (tuneNumber == 4) {
        music.setTempo(153)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(466, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(622, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(622, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(622, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(622, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(466, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(622, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(622, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(622, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(622, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
    }
    if (tuneNumber == 5) {
        music.setTempo(153)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(622, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(466, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(466, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(831, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(740, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(622, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(554, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(466, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
    }
}
function checkGameOn (codeCharc: string) {
    if (!(codeCharc == "#" || codeCharc == "_")) {
        if (codeCharc == gameOnCode[gameOnPointer]) {
            gameOnPointer += 1
            if (gameOnPointer >= 2) {
                gameOnPointer = 0
                gameStatus = 1
                giantDisplayRed = 0
                giantDisplayGreen = 100
                giantDisplayBlue = 0
                range02 = strip_1.range(1, 90)
                range02.showColor(neopixel.rgb(0, randint(1, 100), 0))
                showStringNow("#")
                code = "#"
                playMusic(1)
                range02.showColor(neopixel.rgb(randint(1, 255), 0, randint(1, 255)))
            } else {
                giantDisplayRed = 0
                giantDisplayGreen = gameOnPointer * 100
                giantDisplayBlue = 0
                basic.showLeds(`
                    . # . . .
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    `)
                giantDisplayUpdate(giantDisplayRed, giantDisplayGreen, giantDisplayBlue)
                range02 = strip_1.range(1, 45)
                range02.showColor(neopixel.rgb(0, randint(1, 100), 0))
            }
        } else {
            if (!(codeCharc == "#" || codeCharc == "_")) {
                range02 = strip_1.range(1, 90)
                range02.showColor(neopixel.rgb(randint(1, 50), 50, randint(1, 50)))
                gameOnPointer = 0
                giantDisplayRed = 100
                giantDisplayGreen = 0
                giantDisplayBlue = 0
                showStringNow(codeCharc)
                range02 = strip_1.range(1, 90)
                range02.showColor(neopixel.rgb(randint(1, 100), randint(1, 100), randint(1, 100)))
            }
        }
    }
}
function safeDial (charcSent: string) {
    safeDialSymbolIndex = safeDialSymbols.indexOf(charcSent)
    servoAngle = safeDialSymbolIndex * 5
    if (servoAngle > safeDialIndex2) {
        for (let safeDialIndex = 0; safeDialIndex <= servoAngle; safeDialIndex++) {
            servos.P1.setAngle(safeDialIndex)
            basic.pause(10)
        }
    }
    if (servoAngle < safeDialIndex2) {
        for (let safeDialIndex = 0; safeDialIndex <= safeDialIndex2 - servoAngle; safeDialIndex++) {
            servos.P1.setAngle(safeDialIndex2 - safeDialIndex)
            basic.pause(10)
        }
    }
    safeDialIndex2 = servoAngle
}
function Pattern02 (pattern02Length: number) {
    if (Pattern02StartStop == 1) {
        strip_0.clear()
        strip_1.clear()
        if (pattern02Start < 1) {
            pattern02Direction = 1
        } else {
            if (pattern02Start > 75) {
                pattern02Direction = -1
            }
        }
        pattern02Start += pattern02Direction
        rangeRed = 5 * randint(0, 51)
        rangeGreen = randint(0, 5) * (rangeRed / 5)
        rangeBlue = randint(0, 5) * (rangeGreen / 5)
        range = strip_0.range(randint(pattern02Start, pattern02Start + pattern02Length), pattern02Length)
        range01 = strip_1.range(randint(pattern02Start, pattern02Start + pattern02Length), pattern02Length)
        range.showColor(neopixel.rgb(rangeRed, rangeGreen, rangeBlue))
        range01.showColor(neopixel.rgb(rangeRed, rangeGreen, rangeBlue))
        range02Red = randint(0, 51) * (5 * (pattern02Start - 75))
        range02Green = range02Red / (pattern02Start * 4)
        range02Blue = range02Green / (pattern02Start * 4)
        range02 = strip_0.range(randint(pattern02Start + pattern02Length, pattern02Start + pattern02Length + pattern02Start * 2), pattern02Length)
        range03 = strip_1.range(randint(pattern02Start + pattern02Length, pattern02Start + pattern02Length + pattern02Start * 2), pattern02Length)
        range02.showColor(neopixel.rgb(range02Red, range02Green, range02Blue))
        range03.showColor(neopixel.rgb(range02Red, range02Green, range02Blue))
    }
}
// Show a string "now" without a delay / scrolling
function showStringNow (theString: string) {
    if (PTTon == 0 && mode == 0) {
        basic.showString(theString, 0)
giantDisplayUpdate(giantDisplayRed, giantDisplayGreen, giantDisplayBlue)
    } else if (PTTon == 1 && mode < 2) {
        basic.showString(theString, 0)
giantDisplayUpdate(giantDisplayRed, giantDisplayGreen, giantDisplayBlue)
    }
}
function Pattern01 (pattern01Length: number) {
    if (pattern01StartStop == 1) {
        strip_0.clear()
        strip_1.clear()
        pattern01Start = randint(0, pattern01Length)
        pattern01Red = 5 * randint(0, 51)
        pattern01Green = randint(0, 5) * (pattern01Red / 5)
        pattern01Blue = randint(0, 5) * (pattern01Green / 5)
        range = strip_0.range(pattern01Start, pattern01Length)
        range01 = strip_1.range(pattern01Start, pattern01Length)
        range.showColor(neopixel.rgb(pattern01Red, pattern01Green, pattern01Blue))
        range01.showColor(neopixel.rgb(pattern01Red, pattern01Green, pattern01Blue))
    }
}
morse.onCodeSelected(function (code, sequence) {
    // Make silences visible.
    if (code == " ") {
        if (gameStatus == 1) {
            code = "#"
            giantDisplayRed = 255 - livesLeft * 100
            giantDisplayGreen = 0
            giantDisplayBlue = livesLeft * 100 - 50
            showStringNow(code)
        } else {
            code = "_"
            giantDisplayRed = 100
            giantDisplayGreen = 0
            giantDisplayBlue = 0
            showStringNow(code)
        }
    }
    serial.writeLine("Code: " + code)
    if (gameStatus == 1) {
        checkSentCode(code)
    } else {
        checkGameOn(code)
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    morse.keyDown()
    basic.pause(1)
    if (PTTon == 1) {
        music.ringTone(494)
        radio.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_DOWN
        )
        radio.sendNumber(0)
    } else {
        PTTon = 0
        pins.analogWritePin(AnalogPin.P15, 0)
    }
})
// Show dot/dash
morse.onNewSymbol(function (newSymbol) {
    serial.writeLine(newSymbol)
    showStringNow(newSymbol)
})
input.onButtonPressed(Button.AB, function () {
    music.stopAllSounds()
    if (mode == 2) {
        mode = 0
    } else {
        mode = mode + 1
    }
    if (mode == 0) {
        basic.showLeds(`
            # # . . .
            # . # . #
            # # . # .
            # . . # .
            # # . # .
            `)
    }
    if (mode == 1) {
        basic.showLeds(`
            # # # # #
            . # . # .
            . # . # #
            . # . # .
            . . . # #
            `)
    }
    if (mode == 2) {
        basic.showLeds(`
            # # . . .
            # . # . #
            # # . # .
            # . # . #
            # # . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 1)
})
function checkSentCode (codeCharc: string) {
    if (!(codeCharc == "#" || codeCharc == "_") && livesLeft >= 0) {
        safeDialCode = codeCharc
        if (codeCharc == safeCode[safeCodePointer]) {
            basic.showLeds(`
                . # . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            range02.showColor(neopixel.rgb(randint(1, 255), 0, randint(1, 255)))
            giantDisplayRed = 0
            giantDisplayGreen = 100
            giantDisplayBlue = 0
            giantDisplayUpdate(giantDisplayRed, giantDisplayGreen, giantDisplayBlue)
            basic.pause(200)
            giantDisplayRed = 255 - livesLeft * 100
            giantDisplayGreen = 0
            giantDisplayBlue = livesLeft * 100 - 50
            range02 = strip_1.range(1, 90 / 4 * (1 + safeCodePointer))
            range02.showColor(neopixel.rgb(0, 200, 0))
            safeCodePointer += 1
            safeDial(safeDialCode)
            if (safeCodePointer >= 4) {
                safeCodePointer = 0
                livesLeft = 2
                gameStatus = 0
                gameWin()
            }
        } else {
            livesLeft += -1
            if (livesLeft == 1) {
                safeDial(safeDialCode)
                basic.showLeds(`
                    . . . . #
                    . . . . #
                    # . # . #
                    . # . . .
                    # . # . #
                    `)
            }
            giantDisplayRed = 255
            giantDisplayGreen = 50
            giantDisplayBlue = 0
            giantDisplayUpdate(giantDisplayRed, giantDisplayGreen, giantDisplayBlue)
            basic.pause(200)
            if (livesLeft == 0) {
                safeCodePointer = 0
                gameStatus = 0
                livesLeft = 2
                safeDial(safeDialCode)
                gameLose()
            }
        }
    }
}
function giantDisplayUpdate (giantDispRed: number, giantDispGreen: number, giantDispBlue: number) {
    for (let dispColumnIndex = 0; dispColumnIndex <= 4; dispColumnIndex++) {
        for (let dispRowIndex = 0; dispRowIndex <= 4; dispRowIndex++) {
            startGiantPixelNumber = dispRowIndex * 3 + 1 + dispColumnIndex * 15
            if (led.point(dispColumnIndex, dispRowIndex)) {
                rangeGiantPixels = strip_0.range(startGiantPixelNumber, 3)
                rangeGiantPixels.showColor(neopixel.rgb(giantDispRed, giantDispGreen, giantDispBlue))
            } else {
                rangeGiantPixels = strip_0.range(startGiantPixelNumber, 3)
                rangeGiantPixels.showColor(neopixel.rgb(0, 0, 0))
            }
        }
    }
}
function ledTestSequence01 () {
    pattern01StartStop = 1
    pattern01Length = 5
    for (let safeDialIndex = 0; safeDialIndex <= 300; safeDialIndex++) {
        Pattern01(pattern01Length)
        safeDialIndex += 1
        basic.pause(5)
    }
    Pattern02StartStop = 1
    pattern02Length = 10
    while (Pattern02StartStop == 1) {
        for (let index = 0; index < 1 * 75; index++) {
            Pattern02(pattern02Length)
            basic.pause(3)
        }
        Pattern02StartStop = 0
    }
    pattern02Start = 0
    strip_0.clear()
    strip_1.clear()
    strip_0.show()
    strip_1.show()
}
function gameWin () {
    strip_1.showRainbow(1, 255)
    playMusic(4)
    safeDial("A")
    ledTestSequence01()
    strip_1.showRainbow(1, 255)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1000)
    range02 = strip_1.range(1, 90)
    range02.showColor(neopixel.rgb(randint(1, 50), randint(1, 50), 0))
    strip_0.clear()
    strip_0.show()
    playMusic(5)
}
function gameLose () {
    safeDial(safeDialCode)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        . # . # .
        `)
    giantDisplayRed = 255
    giantDisplayGreen = 0
    giantDisplayBlue = 0
    giantDisplayUpdate(giantDisplayRed, giantDisplayGreen, giantDisplayBlue)
    range02 = strip_1.range(1, 90)
    range02.showColor(neopixel.rgb(255, 0, 0))
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    for (let index = 0; index < 2; index++) {
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        370,
        1688,
        255,
        255,
        5000,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        1639,
        370,
        255,
        255,
        2000,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
    pins.digitalWritePin(DigitalPin.P14, 1)
    safeDial("A")
    range02 = strip_1.range(1, 90)
    range02.showColor(neopixel.rgb(randint(1, 50), randint(1, 10), randint(1, 10)))
}
/**
 * Radio frequency band 5 is 2.405 Ghz.
 * 
 * MicroBit has 32 1 Mhz steps from 2.400 Ghz
 */
let logoIntensity = 0
let rangeGiantPixels: neopixel.Strip = null
let startGiantPixelNumber = 0
let safeDialCode = ""
let pattern01Blue = 0
let pattern01Green = 0
let pattern01Red = 0
let pattern01Length = 0
let pattern01StartStop = 0
let range03: neopixel.Strip = null
let range02Blue = 0
let range02Green = 0
let range02Red = 0
let range01: neopixel.Strip = null
let pattern02Length = 0
let range: neopixel.Strip = null
let rangeBlue = 0
let rangeGreen = 0
let rangeRed = 0
let pattern02Direction = 0
let Pattern02StartStop = 0
let safeDialSymbolIndex = 0
let code = ""
let range02: neopixel.Strip = null
let safeDialSymbols: string[] = []
let safeDialIndex2 = 0
let servoAngle = 0
let giantDisplayBlue = 0
let giantDisplayGreen = 0
let giantDisplayRed = 0
let pattern02Start = 0
let pattern01Start = 0
let strip_1: neopixel.Strip = null
let strip_0: neopixel.Strip = null
let gameOnCode: string[] = []
let safeCode: string[] = []
let gameStatus = 0
let gameOnPointer = 0
let safeCodePointer = 0
let livesLeft = 0
let mode = 0
let PTTon = 0
morse.setMaxDurationDotDash(
200,
1000
)
morse.setMaxSilenceBetweenSymbolsLetters(
500,
2000
)
PTTon = 0
mode = 0
livesLeft = 2
safeCodePointer = 0
gameOnPointer = 0
gameStatus = 0
gameStatus = 0
pins.digitalWritePin(DigitalPin.P13, 1)
pins.digitalWritePin(DigitalPin.P14, 1)
safeCode = [
"T",
"A",
"S",
"K"
]
gameOnCode = ["S", "F"]
radio.setGroup(0)
radio.setFrequencyBand(5)
strip_0 = neopixel.create(DigitalPin.P2, 76, NeoPixelMode.RGBW)
strip_1 = neopixel.create(DigitalPin.P8, 91, NeoPixelMode.RGBW)
strip_0.setBrightness(100)
strip_1.setBrightness(99)
strip_0.clear()
strip_1.clear()
strip_0.show()
strip_1.show()
pattern01Start = 0
pattern02Start = 0
giantDisplayRed = 100
giantDisplayGreen = 0
giantDisplayBlue = 0
servos.P0.setRange(0, 180)
servos.P1.setPulse(2500)
servos.P1.setAngle(0)
servoAngle = 0
let safeDialIndex = 0
safeDialIndex2 = 0
basic.pause(100)
music.setBuiltInSpeakerEnabled(false)
basic.showLeds(`
    . . . . #
    . . . # .
    # . # . .
    . # . . #
    . . . # #
    `)
giantDisplayUpdate(giantDisplayRed, giantDisplayGreen, giantDisplayBlue)
basic.pause(100)
safeDialSymbols = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9"
]
range02 = strip_1.range(1, 90)
range02.showColor(neopixel.rgb(randint(1, 50), randint(1, 50), randint(1, 50)))
loops.everyInterval(500, function () {
    if (logoIntensity < 100) {
        logoIntensity = 1023
    } else {
        logoIntensity += -100
    }
    pins.analogWritePin(AnalogPin.P15, logoIntensity)
})
