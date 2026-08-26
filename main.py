def on_microbit_id_button_a_evt_up():
    morse.key_up()
    music.stop_all_sounds()
    basic.pause(1)
    if PTTon == 1:
        radio.raise_event(EventBusSource.MICROBIT_ID_BUTTON_A,
            EventBusValue.MICROBIT_BUTTON_EVT_UP)
        radio.send_number(0)
    else:
        pins.analog_write_pin(AnalogPin.P15, 1023)
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_UP,
    on_microbit_id_button_a_evt_up)

def on_received_number(receivedNumber):
    global PTTon
    if PTTon == 1:
        music.stop_all_sounds()
        PTTon = 0
        pins.digital_write_pin(DigitalPin.P14, 0)
radio.on_received_number(on_received_number)

def checkGameOn(codeCharc: str):
    global gameOnPointer, gameStatus
    if not (codeCharc == "#" or codeCharc == "_"):
        if codeCharc == gameOnCode[gameOnPointer]:
            gameOnPointer += 1
            if gameOnPointer >= 2:
                gameOnPointer = 0
                gameStatus = 1
            basic.show_leds("""
                . # . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                """)
            giantDisplayUpdate(giantDisplayRed, giantDisplayGreen, giantDisplayBlue)
        else:
            if not (codeCharc == "#" or codeCharc == "_"):
                gameOnPointer = 0
def Pattern02(pattern02Length: number):
    global pattern02Direction, pattern02Start, rangeRed, rangeGreen, rangeBlue, range2, range01, range02Red, range02Green, range02Blue, range02, range03
    if Pattern02StartStop == 1:
        strip_0.clear()
        strip_1.clear()
        if pattern02Start < 1:
            pattern02Direction = 1
        else:
            if pattern02Start > 75:
                pattern02Direction = -1
        pattern02Start += pattern02Direction
        rangeRed = 5 * randint(0, 51)
        rangeGreen = randint(0, 5) * (rangeRed / 5)
        rangeBlue = randint(0, 5) * (rangeGreen / 5)
        range2 = strip_0.range(randint(pattern02Start, pattern02Start + pattern02Length),
            pattern02Length)
        range01 = strip_1.range(randint(pattern02Start, pattern02Start + pattern02Length),
            pattern02Length)
        range2.show_color(neopixel.rgb(rangeRed, rangeGreen, rangeBlue))
        range01.show_color(neopixel.rgb(rangeRed, rangeGreen, rangeBlue))
        range02Red = randint(0, 51) * (5 * (pattern02Start - 75))
        range02Green = range02Red / (pattern02Start * 4)
        range02Blue = range02Green / (pattern02Start * 4)
        range02 = strip_0.range(randint(pattern02Start + pattern02Length,
                pattern02Start + pattern02Length + pattern02Start * 2),
            pattern02Length)
        range03 = strip_1.range(randint(pattern02Start + pattern02Length,
                pattern02Start + pattern02Length + pattern02Start * 2),
            pattern02Length)
        range02.show_color(neopixel.rgb(range02Red, range02Green, range02Blue))
        range03.show_color(neopixel.rgb(range02Red, range02Green, range02Blue))
# Show a string "now" without a delay / scrolling
def showStringNow(theString: str):
    if PTTon == 0 and mode == 0:
        basic.show_string(theString, 0)
        giantDisplayUpdate(giantDisplayRed, giantDisplayGreen, giantDisplayBlue)
    elif PTTon == 1 and mode < 2:
        basic.show_string(theString, 0)
        giantDisplayUpdate(giantDisplayRed, giantDisplayGreen, giantDisplayBlue)
def Pattern01(pattern01Length: number):
    global pattern01Start, pattern01Red, pattern01Green, pattern01Blue, range2, range01
    if pattern01StartStop == 1:
        strip_0.clear()
        strip_1.clear()
        pattern01Start = randint(0, pattern01Length)
        pattern01Red = 5 * randint(0, 51)
        pattern01Green = randint(0, 5) * (pattern01Red / 5)
        pattern01Blue = randint(0, 5) * (pattern01Green / 5)
        range2 = strip_0.range(pattern01Start, pattern01Length)
        range01 = strip_1.range(pattern01Start, pattern01Length)
        range2.show_color(neopixel.rgb(pattern01Red, pattern01Green, pattern01Blue))
        range01.show_color(neopixel.rgb(pattern01Red, pattern01Green, pattern01Blue))

def on_code_selected(code, sequence):
    # Make silences visible.
    if code == " ":
        if gameStatus == 1:
            code = "#"
        else:
            code = "_"
    serial.write_line("Code: " + code)
    if gameStatus == 1:
        checkSentCode(code)
    else:
        checkGameOn(code)
    showStringNow(code)
morse.on_code_selected(on_code_selected)

def on_microbit_id_button_a_evt_down():
    global PTTon
    morse.key_down()
    basic.pause(1)
    if PTTon == 1:
        music.ring_tone(494)
        radio.raise_event(EventBusSource.MICROBIT_ID_BUTTON_A,
            EventBusValue.MICROBIT_BUTTON_EVT_DOWN)
        radio.send_number(0)
    else:
        music.ring_tone(494)
        PTTon = 0
        pins.analog_write_pin(AnalogPin.P15, 0)
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
    on_microbit_id_button_a_evt_down)

# Show dot/dash

def on_new_symbol(newSymbol):
    serial.write_line(newSymbol)
    showStringNow(newSymbol)
morse.on_new_symbol(on_new_symbol)

def on_button_pressed_ab():
    global mode
    music.stop_all_sounds()
    if mode == 2:
        mode = 0
    else:
        mode = mode + 1
    if mode == 0:
        basic.show_leds("""
            # # . . .
            # . # . #
            # # . # .
            # . . # .
            # # . # .
            """)
    if mode == 1:
        basic.show_leds("""
            # # # # #
            . # . # .
            . # . # #
            . # . # .
            . . . # #
            """)
    if mode == 2:
        basic.show_leds("""
            # # . . .
            # . # . #
            # # . # .
            # . # . #
            # # . . .
            """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global PTTon
    if PTTon == 1:
        PTTon = 0
        basic.show_leds("""
            # # # . .
            # . . . .
            # . # . #
            # . . # .
            . . # . #
            """)
    else:
        basic.show_leds("""
            # # # . .
            . # . . .
            . # # . #
            . # . # .
            . . # . #
            """)
        PTTon = 1
    morse.reset_timing()
    morse.reset_decoding()
    music.stop_all_sounds()
input.on_button_pressed(Button.B, on_button_pressed_b)

def checkSentCode(codeCharc2: str):
    global safeCodePointer, livesLeft, gameStatus
    if not (codeCharc2 == "#" or codeCharc2 == "_") and livesLeft >= 0:
        if codeCharc2 == safeCode[safeCodePointer]:
            basic.show_leds("""
                . # . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                """)
            giantDisplayUpdate(giantDisplayRed, giantDisplayGreen, giantDisplayBlue)
            basic.pause(100)
            safeCodePointer += 1
            if safeCodePointer >= 4:
                safeCodePointer = 0
                livesLeft = 2
                gameStatus = 0
                ledTestSequence01()
                basic.show_string("Open")
        else:
            basic.show_leds("""
                . . . . #
                . . . . #
                # . # . #
                . # . . .
                # . # . #
                """)
            giantDisplayUpdate(giantDisplayRed, giantDisplayGreen, giantDisplayBlue)
            livesLeft += -1
            basic.pause(100)
            if livesLeft == 0:
                basic.show_leds("""
                    . # . # .
                    . # . # .
                    . # . # .
                    . . . . .
                    . # . # .
                    """)
                giantDisplayUpdate(giantDisplayRed, giantDisplayGreen, giantDisplayBlue)
                safeCodePointer = 0
                gameStatus = 0
                livesLeft = 2
                basic.pause(100)
def giantDisplayUpdate(giantDispRed: number, giantDispGreen: number, giantDispBlue: number):
    global startGiantPixelNumber, rangeGiantPixels
    for dispColumnIndex in range(5):
        for dispRowIndex in range(5):
            startGiantPixelNumber = dispRowIndex * 3 + 1 + dispColumnIndex * 15
            if led.point(dispColumnIndex, dispRowIndex):
                rangeGiantPixels = strip_0.range(startGiantPixelNumber, 3)
                rangeGiantPixels.show_color(neopixel.rgb(100, 0, 0))
            else:
                rangeGiantPixels = strip_0.range(startGiantPixelNumber, 3)
                rangeGiantPixels.show_color(neopixel.rgb(0, 0, 0))
def ledTestSequence01():
    global pattern01StartStop, pattern01Length2, Pattern02StartStop, pattern02Length2, pattern02Start
    pattern01StartStop = 1
    pattern01Length2 = 5
    for index in range(301):
        Pattern01(pattern01Length2)
        index += 1
        basic.pause(5)
    Pattern02StartStop = 1
    pattern02Length2 = 10
    while Pattern02StartStop == 1:
        for index2 in range(1 * 75):
            Pattern02(pattern02Length2)
            basic.pause(3)
        Pattern02StartStop = 0
    pattern02Start = 0
    strip_0.clear()
    strip_1.clear()
    strip_0.show()
    strip_1.show()
logoIntensity = 0
rangeGiantPixels: neopixel.Strip = None
startGiantPixelNumber = 0
pattern01Blue = 0
pattern01Green = 0
pattern01Red = 0
pattern01Length2 = 0
pattern01StartStop = 0
range03: neopixel.Strip = None
range02: neopixel.Strip = None
range02Blue = 0
range02Green = 0
range02Red = 0
range01: neopixel.Strip = None
pattern02Length2 = 0
range2: neopixel.Strip = None
rangeBlue = 0
rangeGreen = 0
rangeRed = 0
pattern02Direction = 0
Pattern02StartStop = 0
giantDisplayBlue = 0
giantDisplayGreen = 0
giantDisplayRed = 0
pattern02Start = 0
pattern01Start = 0
strip_1: neopixel.Strip = None
strip_0: neopixel.Strip = None
gameOnCode: List[str] = []
safeCode: List[str] = []
gameStatus = 0
gameOnPointer = 0
safeCodePointer = 0
livesLeft = 0
mode = 0
PTTon = 0
morse.set_max_duration_dot_dash(200, 1000)
morse.set_max_silence_between_symbols_letters(500, 2000)
PTTon = 0
mode = 0
livesLeft = 2
safeCodePointer = 0
gameOnPointer = 0
gameStatus = 0
gameStatus = 0
safeCode = ["N", "T", "X", "1"]
gameOnCode = ["S", "F"]
radio.set_group(0)
strip_0 = neopixel.create(DigitalPin.P2, 76, NeoPixelMode.RGBW)
strip_1 = neopixel.create(DigitalPin.P8, 91, NeoPixelMode.RGBW)
strip_0.set_brightness(100)
strip_1.set_brightness(100)
strip_0.clear()
strip_1.clear()
strip_0.show()
strip_1.show()
pattern01Start = 0
pattern02Start = 0
giantDisplayRed = 100
giantDisplayGreen = 0
giantDisplayBlue = 0
basic.pause(100)
basic.show_leds("""
    . . . . #
    . . . # .
    # . # . .
    . # . . #
    . . . # #
    """)
giantDisplayUpdate(giantDisplayRed, giantDisplayGreen, giantDisplayBlue)
basic.pause(100)

def on_every_interval():
    global logoIntensity
    if logoIntensity < 500:
        logoIntensity = 1023
    else:
        logoIntensity += -100
    pins.analog_write_pin(AnalogPin.P15, logoIntensity)
loops.every_interval(500, on_every_interval)
