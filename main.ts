let biraketa = 0
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.clearDistance(Motors.M1)
basic.forever(function () {
    basic.showNumber(parseFloat(DFRobotMaqueenPlus.readeDistance(Motors1.M1)))
})
basic.forever(function () {
    biraketa = parseFloat(DFRobotMaqueenPlus.readeDistance(Motors1.M1))
    if (biraketa < 6.5) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
