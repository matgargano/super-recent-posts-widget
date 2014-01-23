Super Recent Posts Widget
===================
Contributors: matstars  
Tags: post, widget  
Tested up to: 3.8  
Requires at least: 3.6 
Tested up to: 3.8  
Stable tag: 0.1.1 
License: GPLv2 or later  
License URI: http://www.gnu.org/licenses/gpl-2.0.html

## Description
A prettier, filterable and more functional recent posts widget that allows you to choose a custom post type or specific taxonomy.

## Installation
> See [Installing Plugins](http://codex.wordpress.org/Managing_Plugins#Installing_Plugins).


## Usage

#### Example of using a custom template from within your theme pre-PHP 5.3

```php
<?php
    function customize_srpw_template_filter( $template ){
        $template_dir = get_template_directory();
        return $template_dir . '/views/custom-srpw.php';    
    }
    add_filter( 'srpw_template', 'customize_srpw_template_filter' );
?>
```


#### Example of using a custom template from within your theme PHP 5.3+ which allows anonymous functions

```php
<?php

    add_filter( 'srpw_template', function( $template ){
        $template_dir = get_template_directory();
        return $template_dir . '/views/custom-srpw.php';
    });
?>
```

## Grunt

This plugin takes advantage of Grunt for validating JavaScript, SASS compilation and minification. To take advantage of Grunt you have to have both [npm](https://npmjs.org/) and [Grunt](http://gruntjs.com/) installed. Visit the respective sites for the applications and make sure they are installed. Once installed, if you want to edit/fork this plugin, it will be helpful to be familiar with these two tools.

## Changelog

**0.1.1**  
*Initial release
