let tempF = input.temperature(TemperatureUnit.Fahrenheit)
while (true) {
    console.log("Temperature" + input.temperature(TemperatureUnit.Fahrenheit))
    // if tempF > 60:
    // light.set_pixel_color(5, light.rgb (255, 0 ,0))
    // if tempF > 70:
    // light.set_pixel_color(5, light.rgb (255, 0, 0))
    // elif tempF > 40:
    // light.set_pixel_color(5, light.rgb (0, 255, 0))
    // else:
    // light.set_pixel_color(5, light.rgb (0, 0, 255))
    if (tempF > 70) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (tempF > 40) {
        light.setAll(light.rgb(0, 255, 0))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
