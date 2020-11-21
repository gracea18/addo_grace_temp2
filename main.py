tempF = input.temperature(TemperatureUnit.FAHRENHEIT)

while True:
    print("Temperature" + input.temperature(TemperatureUnit.FAHRENHEIT))
    #if tempF > 60:
    #light.set_pixel_color(5, light.rgb (255, 0 ,0))

    #if tempF > 70:
        #light.set_pixel_color(5, light.rgb (255, 0, 0))
    #elif tempF > 40:
        #light.set_pixel_color(5, light.rgb (0, 255, 0))
    #else:
        #light.set_pixel_color(5, light.rgb (0, 0, 255))

    if tempF > 70: 
        light.set_all(light.rgb (255,0,0))
    elif tempF > 40:
        light.set_all(light.rgb(0,255,0))
    else:
        light.set_all(light.rgb (0,0,255)) 