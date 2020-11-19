let tempFi = input.temperature(TemperatureUnit.Fahrenheit)
let tempF = 78
while (true) {
    console.log("Temperature" + input.temperature(TemperatureUnit.Fahrenheit))
    // if tempF > 60:
    // light.set_pixel_color(5, light.rgb (255, 0 ,0))
    if (tempF > 70) {
        light.setPixelColor(5, light.rgb(255, 0, 0))
    } else if (tempF > 40) {
        light.setPixelColor(5, light.rgb(0, 255, 0))
    } else {
        light.setPixelColor(5, light.rgb(0, 0, 255))
    }
    
}
