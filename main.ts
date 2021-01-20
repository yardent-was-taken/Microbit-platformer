input.onButtonPressed(Button.A, function () {
    led.unplot(playerx, playery)
    if (led.point(playerx - 1, playery)) {
        playerx += 1
    }
    playerx += -1
    led.plotBrightness(playerx, playery, 100)
})
input.onButtonPressed(Button.AB, function () {
    if (led.pointBrightness(playerx, playery + 1) == 255) {
        playery = playery - 3
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(playerx, playery)
    if (led.point(playerx + 1, playery)) {
        playerx += -1
    }
    playerx += 1
    led.plotBrightness(playerx, playery, 100)
})
let gravity = 0
let playerx = 0
let playery = 0
let level = 1
playery = 3
playerx = 0
basic.forever(function () {
    if (4 == playerx) {
        level += 1
        playerx = 0
    } else {
        if (4 < playery) {
            playerx = 0
            playery += -3
        } else {
            if (-1 > playery) {
                playery = 3
                playerx = 0
            }
        }
    }
})
basic.forever(function () {
    led.unplot(playerx, playery)
    if (!(gravity == 0)) {
        basic.pause(100)
        playery += gravity
    }
    basic.pause(50)
    led.plotBrightness(playerx, playery, 100)
})
basic.forever(function () {
    if (level == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # # .
            # # # # #
            `)
    } else {
        if (level == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # . # #
                `)
        } else {
            if (level == 3) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . # #
                    . . # # #
                    # # # # #
                    `)
            } else {
                if (level == 4) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . # .
                        . . . # .
                        # . # # #
                        `)
                } else {
                    if (level == 5) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . # # .
                            . . . # .
                            # # # # #
                            `)
                    } else {
                        if (level == 6) {
                            basic.showLeds(`
                                . . . # .
                                . . . . .
                                . . . . .
                                . # . . .
                                # # # . #
                                `)
                        } else {
                            if (level == 7) {
                                basic.showLeds(`
                                    . . . . .
                                    . . . . .
                                    . . . . .
                                    . . . # .
                                    # # . . .
                                    `)
                            } else {
                                if (level == 8) {
                                    basic.showLeds(`
                                        . . . . .
                                        . . . . .
                                        . . . # .
                                        # # . . .
                                        . . . . .
                                        `)
                                } else {
                                    if (level == 9) {
                                        basic.showLeds(`
                                            . . . . .
                                            . . . . .
                                            . . . # .
                                            # # . . .
                                            . . . . .
                                            `)
                                    } else {
                                        if (level == 10) {
                                            basic.showLeds(`
                                                . . . . .
                                                . . . . #
                                                . # . . .
                                                . . . # .
                                                # . . . .
                                                `)
                                        } else {
                                            basic.showString("You beat the game!")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (!(led.point(playerx, playery + 1))) {
        gravity = 1
    } else {
        gravity = 0
    }
})
