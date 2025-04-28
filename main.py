Exalt = 5
led.toggle_all()
while 1 == 1:
    i = 1
    while i < 10:
        led.set_brightness(i * 25.5)
        pause(100)
        i += 1
    i = 1
    while i < 10:
        led.set_brightness(255 - i * 25.5)
        pause(100)
        i += 1