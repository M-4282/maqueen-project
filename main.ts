bluetooth.onBluetoothConnected(function () {
    absmouse.startAbsoluteMouseService()
})
media.startMediaService()
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
keyboard.sendSimultaneousKeys(keyboard.modifiers(keyboard._Modifier.rightControl))
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
media.sendCode(media.keys(media._MediaKey.stop))
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 78)
media.sendCode(media.keys(media._MediaKey.stop))
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
media.sendCode(media.keys(media._MediaKey.stop))
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 78)
media.sendCode(media.keys(media._MediaKey.stop))
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
media.sendCode(media.keys(media._MediaKey.stop))
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 78)
media.sendCode(media.keys(media._MediaKey.stop))
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
media.sendCode(media.keys(media._MediaKey.stop))
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 78)
media.sendCode(media.keys(media._MediaKey.stop))
