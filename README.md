# pecan

![Screenshot 1](/screenshots/1.jpg)

A bar for macOS. Reports — by default — the current workspace, cpu load, network bandwidth, date, battery percentage and time.

[![Support via PayPal](https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg)](https://www.paypal.me/zzzeyez/)

## Instructions

_pecan_ requires [Übersicht](http://tracesof.net/uebersicht/).

Once Übersicht is installed, download this repository to wherever your widgets are stored (by default ~/Library/Application Support/Übersicht/widgets/).

This can be done via the terminal like so:

```sh
brew tap caskroom/cask
brew install --cask ubersicht
git clone https://github.com/zzzeyez/pecan.git "$HOME/Library/Application Support/Übersicht/widgets/pecan"
```

If Übersicht is running, then the bar should appear.

## Customization & Themes

![Screenshot 4](/screenshots/4.jpg)

This is a picture of my current config with all optional features enabled.

To edit the appearance you can place a config at `~/.config/pecan.css` – the included `config.css` can be placed there to discover options.

```sh
mv "$HOME/Library/Application Support/Übersicht/widgets/pecan/config.css" "${HOME}/.config/pecan.css"
```

## Optional features

![Screenshot 2](/screenshots/2.jpg)

This is _pecan_'s default appearance with _ifstat_, _yabai_, [_xanthia_](https://github.com/zzzeyez/xanthia/) and [_landscape_](https://github.com/zzzeyez/landscape/) installed.

### Ifstat

_Ifstat_ displays current upload and download speeds. Current download and upload speeds may be shown in the 2nd-to-left element via _Ifstat_. If _Ifstat_ is not found, then the current WiFi network will be displayed instead. To install _Ifstat via_ Homebrew:

```sh
brew install ifstat
```

### Yabai

_Yabai_ is a window manager. Current workspace ID can be shown on the left element if [_Yabai_](https://github.com/koekeishiya/yabai) is installed, otherwise a power symbol will be shown instead. To install _Yabai_:

```sh
brew install yabai
```

### xanthia

_xanthia_ is a notification system. If _xanthia_ is installed then it will display notifications on the left (useful for showing current song playing, chat notifications, etc.) _xanthia_ will use _pecan_'s config at `~/.config/pecan.css`. Install [_xanthia_](https://github.com/zzzeyez/xanthia/blob/master/README.md#Installation).

### landscape

_landscape_ is a workspace selector. If _landscape_ is installed then it will display clickablle images of available workspaces on the left. _landscape_ will use _pecan_'s config at `~/.config/pecan.css`. Install [_landscape_](https://github.com/zzzeyez/xanthia/blob/master/README.md#Installation).

### pywal

![Screenshot 3](/screenshots/3.jpg)

This is _pecan_ with all optional features and [_pywal_](https://github.com/dylanaraps/pywal/tree/master/pywal) installed.

_Pywal_ is a system colorscheme manager. If _Pywal_ is installed then _pecan_ will grab it's colors from that by default.
