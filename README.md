# Dollarsigns

A teeny tiny jQuery-inspired library for typing slightly less when working with DOM. It's nothing more than a set of shorthand wrappers really.

# What's included?
Almost nothing, really.
- `$` wraps around `document.getElementById`
- `$$` wraps around `document.querySelector`
- `$$$` wraps around `document.querySelectorAll`

There's also a `DOM` object if you want to include all three but still have relatively short calls.

# Usage

```
import { $ } from "dollarsigns";
$("message-body").textContent = "It's actually working";
```

Or if you want all three in a neat object
```
import { DOM } from "dollarsigns";

DOM.$("message-body").textContent = "It's actually working";
DOM.$$$(".menu a").forEach(el => (
  el.addEventListener("click", () => console.log("just clicked"))
))
```

# Typescript
Type declarations are included, enjoy.
