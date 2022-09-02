# Dropdown
A small script for priming dropdown menus. The dropdown function expects two identifiers for the dropdown button and the associated menu. Those identifiers are expected to be classes and the relationship between the button and the identifier is expected to be that of siblings. The `dropdown()` function will then listen for clicks on the document and append the class `active-dropdown` to the dropdown menu if the click is on the button.

eg

```html
<div>
  <a class="expandable">
  <div class="dropdown-menu">
    <a href="#" class="link">2021</a>
    <a href="#" class="link">2022</a>
  </div>
</div>
```

Calling the function
```js
import dropdown from "ofm-dropdown";

dropdown("expandable","dropdown-menu");
```

# Demo

![demo](./src/demo.gif)
