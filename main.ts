radio.onReceivedNumber(function (receivedNumber) {
    EstadoAlarma = receivedNumber
})
let EstadoAlarma = 0
radio.setGroup(123)
basic.forever(function () {
    if (EstadoAlarma == 0) {
        basic.showIcon(IconNames.Yes)
    } else if (EstadoAlarma == 1) {
        basic.showIcon(IconNames.No)
    }
})
