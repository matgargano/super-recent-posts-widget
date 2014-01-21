/*global srpwAjax,alert,console,jQuery,ajaxurl */
var srpwForms, srpwSetupForms;
jQuery(document).ready(function($){
    srpwForms = function(){
        $(".srpw-form").on("change", ".post-types", function(){
            var $parent = $(this).closest('.srpw-form'),
                $taxonomiesWrap = $parent.find('.taxonomies-wrap'),
                $termsWrap = $parent.find('.terms-wrap'),
                $loading = $parent.find('.loading'),
                postType = $(this).val(),
                data = {
                    action: "srpw_post_type_selected",
                    postType: postType,
                    srpwNonce: srpwAjax.srpwNonce
                };
            if (postType) {
                $loading.show();
                $.post(ajaxurl, data, function(response) {
                    $taxonomiesWrap.find(".taxonomies").empty().html(response);
                    $taxonomiesWrap.show();
                    $termsWrap.hide();
                    $loading.hide();
                });        
            } else {
                $taxonomiesWrap.hide();
                $termsWrap.hide();
            }
        });
        $(".srpw-form").on("change", ".taxonomies", function(){
            var $parent = $(this).closest('.srpw-form'),
                $termsWrap = $parent.find('.terms-wrap'),
                taxonomy = $(this).val(),
                $loading = $parent.find('.loading'),
                data = {
                    action: "srpw_taxonomy_selected",
                    taxonomy: taxonomy,
                    srpwNonce: srpwAjax.srpwNonce
                };
            if (taxonomy) {
                $loading.show();
                $termsWrap.hide();
                $.post(ajaxurl, data, function(response) {
                    $parent.find(".terms").empty().html(response);
                    $termsWrap.show();
                    $loading.hide();
                    $termsWrap.show();
                });   
            } else {
                $termsWrap.hide();
            }

        });
    };
    srpwSetupForms = function(){
        $(".srpw-form").each(function(){
            var $postTypesWrap = $(this).find('.post-types-wrap'),
                $taxonomiesWrap = $(this).find('.taxonomies-wrap'),
                $termsWrap = $(this).find('.terms-wrap'),
                $postTypes = $postTypesWrap.find('.post-types'),
                $taxonomies = $taxonomiesWrap.find('.taxonomies'),
                $terms = $termsWrap.find('.terms');
            if ($postTypes.val()){
                $taxonomiesWrap.show();
            } else {
                $taxonomiesWrap.hide();
            }
            if ($taxonomies.val()){
                $termsWrap.show();
            } else {
                $termsWrap.hide();
            }            
        });
    };
    srpwForms();
    srpwSetupForms();
});