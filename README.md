# JQuery ul select plugin
This is a plugin to replace the HTML `<select>` element for styling purposes.

## Features:

* Multiple sizes: small (same size as normal HTML `<select>`), medium and large
* Stylable: Each `<select>` is now customisable!

## Coming soon:

* `<optgroup>` support
* Multiple select option

## To use:

Surround your `<select>` with a div:

```
<div class="AnyClassWillDo">
  <select>
    <option>Option 1 - Meat</option>
    <option>Option 2 - Fruit</option>
    <option>Option 3 - Vegetables</option>
    <option>Option 4 - Dairy Products</option>
    <option>Option 5 - Eggs + Fish</option>
    <option>Option 6 - Other</option>
  </select>
</div>
```
Include JQuery and this plugin in the `<head>` tag:

```
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="/path-to-plugin/jquery-ul-select.js"></script>
</head>
```
And call the function for the desired `<div>`:

```
$('.AnyClassWillDo').ulSelect('small');
```
This is the result:  
![Result](https://s8.postimg.org/5hg6z5mat/Screen_Shot_2017-06-12_at_22.09.25.png)  
Alternatively, you can use this:
```
$('.AnyClassWillDo').ulSelect('medium');
```
Or this
```
$('.AnyClassWillDo').ulSelect('large');
```
To produce this:  
![Result2](https://s29.postimg.org/jppostst3/Screen_Shot_2017-06-12_at_22.13.12.png)  
Or this:  
![Result3](https://s29.postimg.org/hwms4i7mf/Screen_Shot_2017-06-12_at_22.13.26.png)  

Depending on the size required.

**Warning!** Avoid calling the `.ulSelect()` function more than once on the same element.
