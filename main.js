
const hexadecimal_characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function get_random_color() {
    color = '#'
    for (let i = 0; i < 6; i++ ) {
        color += hexadecimal_characters[Math.floor(Math.random() * 16)]
    }
    return color
}

function get_random_deg(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    deg_value =  Math.floor(Math.random() * (max - min)) + min

    return deg_value + 'deg'
}

function get_radial_bg(n) {
    let percent = 100 / (n - 1) 
    let radial_gradient = 'radial-gradient(circle'
    
    for (let i = 0; i < n; i++) {
        radial_gradient += `, ${get_random_color()} ${parseInt(percent * i)}% `
    }

    return radial_gradient + ')'
}



