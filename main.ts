radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
    led.toggle(0, 4)
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
