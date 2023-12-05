const c = 299792;


function Calculate() {
    var velocity = document.getElementById("velocity")
    var gamma = document.getElementById("gamma");
    var time_rest = document.getElementById("time_rest")
    var distance_rest = document.getElementById("distance_rest")
    var time_moving = document.getElementById("time_moving")
    var distance_moving = document.getElementById("distance_moving")

    var gammaval = 1;


    if(Number(velocity.value) > 0 && Number(velocity.value) < c) {
        //Calculate Gamma
        gammaval = 1 / (Math.sqrt(1 - (velocity.value ** 2) / (c ** 2)))
        gamma.value = gammaval;

        if(Number(time_rest.value) > 0) {
            time_moving.value = gammaval * Number(time_rest.value)
        } else if(Number(time_moving.value) > 0){
            time_rest.value = gammaval * Number(time_moving.value)
        }

        if(Number(distance_rest.value) > 0) {
            distance_moving.value =  Number(distance_rest.value) / gammaval
        } else if(Number(distance_moving.value) > 0){
            distance_rest.value = Number(distance_moving.value) / gammaval
        }

    } else {
        if(Number(time_moving.value) > 0 && Number(time_rest.value) > 0) {
            gammaval = Number(time_rest.value) / Number(time_moving.value)
            gamma.value = gammaval;

            var vel = gammaval ** 2 

            vel = 1 / vel

            vel = 1 - vel

            vel = Math.sqrt(vel)


            velocity.value = vel * c

            

        } else if(Number(distance_moving.value) > 0 && Number(distance_rest.value) > 0) {
            gammaval = Number(distance_rest.value) / Number(distance_moving.value)
            gamma.value = gammaval;

            var vel = 1 / gammaval 

            vel = vel ** 2

            vel = 1 - vel

            velocity.value = vel * c
        }
    }
}

