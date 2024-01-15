/**
 * č-P0
 * 
 * ž-P1
 * 
 * z-P2
 */
function Faza3zelena () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function Faza2_červena_žlta () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function Faza4_žlta () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function Faza1_červena () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
basic.forever(function () {
    Faza1_červena()
    basic.pause(5000)
    Faza2_červena_žlta()
    basic.pause(2000)
    Faza3zelena()
    basic.pause(5000)
    Faza4_žlta()
    basic.pause(2000)
})
