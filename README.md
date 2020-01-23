# TThemeMap

TThemeMap is repository for map files for telegram theme converters

## Map Files

- [ ] [Android to Desktop](android_desktop.map) [[transparency]](android_desktop_trans.map)
- [ ] [Android to iOS](android_ios.map) [[transparency]](android_ios_trans.map)
- [ ] [Desktop to Android](desktop_android.map) [[transparency]](desktop_android_trans.map)
- [ ] [Desktop to iOS](desktop_ios.map) [[transparency]](desktop_ios_trans.map)
- [ ] [iOS to Android](ios_android.map) [[transparency]](ios_android_trans.map)
- [ ] [iOS to Desktop](ios_desktop.map) [[transparency]](ios_desktop_trans.map)

## Contributing

- Map files should named `from_to.map`
```
...
to_theme_parameter33=from_theme_parameter1
to_theme_parameter34=from_theme_parameter2
to_theme_parameter35=from_theme_parameter3
...
```
- If you need different transparency, please provide a `from_to_trans.map` file
```
...
to_theme_parameter33=33
to_theme_parameter34=FF
to_theme_parameter35=66
...
```
