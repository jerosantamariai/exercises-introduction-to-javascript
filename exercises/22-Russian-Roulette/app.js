var bulletPosition = 4;

function spinChamber() {
    var chamberPosition = Math.floor((Math.random() * 6) + 1);
    console.log(chamberPosition);
    return chamberPosition;
}

function fireGun() {
    let position = spinChamber();
    if (bulletPosition == position)
        return true;
    else
        return false;
    //you code here
}

if (fireGun() == true) {
    console.log('you are dead!');
} else {
    console.log('Keep playing :)');
}