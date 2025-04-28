let i: number;
let Exalt = 5
led.toggleAll()
while ((1 as any) == (1 as any)) {
    i = 1
    while (i < 10) {
        led.setBrightness(i * 25.5)
        pause(100)
        i += 1
    }
    i = 1
    while (i < 10) {
        led.setBrightness(255 - i * 25.5)
        pause(100)
        i += 1
    }
}
