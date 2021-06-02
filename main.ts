radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(2)
basic.forever(function () {
    if (input.lightLevel() < 200) {
        radio.sendString("Start produksjon")
    } else {
        radio.sendString("Stopp produksjon")
    }
})
