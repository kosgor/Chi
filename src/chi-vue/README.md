# chi-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# CHANGELOG
## 2.6.0 (October 17, 2023)
### Components
#### Added
* Added: Data table Vue component now supports row states support.

## 2.5.0 (October 4, 2023)
### Components
#### Added
* Added: Advanced filters Vue component now supports perform actions when several data tables in the same page.

## 2.4.0 (September 27, 2023)
### Components
#### Added
* Added: Save view event `chiSaveViewInput`.
#### Fixed
* Fixed: Column customization cancel behavior that was removing items from columns.

## 2.3.0 (September 15, 2023)
### Components
#### Added
* Added: Data table Vue component now supports empty actionable view with `emptyActionable` config.
* Added: Column customization reset button now supports tooltip.
* Added: Column customization now supports `wildcard` config for columns that enable a specified column to appear before locked columns.
* Added: Data table Vue component now supports configurable and responsive behavior actions column. 
#### Changed
* Changed: Data table Vue component pagination footer is always present in empty states (`no results`, `no filters` and `empty actionable`) for consistency with Brand guidelines.
* Changed: Column customization reset button.
#### Fixed
* Fixed: Column customization chevrons icon button disabled states.

## 2.2.0 (July 12, 2023)
### Components
#### Added
* Added: Data table header now supports icons with `icon` property.

## 2.1.2 (June 14, 2023)
### Components
#### Fixed
* Fixed: Expansion panel margin-left alignment when `state-icon` is present in `active` state.
* Fixed: Expansion panel Vue component was missing `-done-only` class to render correct font-size in `done` state.

## 2.1.1 (May 30, 2023)
### Components
#### Changed
* Changed: Data table description popover in header has been repositioned in the DOM to improve rendering.

## 2.1.0 (May 12, 2023)
### Components
#### Added
* Added: Data table Vue component header now supports two lines in a cell when `cellWrap` config is set to true.
#### Changed
* Changed: Toolbar `Column customization` tooltip text to `Customize columns`.
#### Fixed
* Fixed: Data table description popover in header has removed `modal` class that was causing incorrect width.

## 2.0.0 (April 12, 2023)
### Components
#### Added
* Added: Expansion panel now supports state icons.
* Added: Save View supports new attributes for `saveButtonDisabled`, `readonly`,`label`, and `input` inside its config.
#### Fixed
* Fixed: Data table description popover in header now supports column customization.
