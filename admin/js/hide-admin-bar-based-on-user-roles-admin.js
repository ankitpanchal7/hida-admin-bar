! function(e) {
    "use strict";
    jQuery(document).on("click", ".roleLabel", function(e) {
        jQuery(this).closest("[type=checkbox]").prop("checked", !0)
    });

    

    jQuery(document).on("click", "#hab_remove_image", function(e) {
        jQuery("#image-preview").attr("src","");
        jQuery(this).hide();
        jQuery(".image-preview-wrapper").hide();
    });

    
    jQuery(document).on("click", "#submit_roles", function(r) {
        var c = new Array;
        jQuery("input:checked").each(function() {
            c.push(jQuery(this).val())
        });
        var s = jQuery("#hab_capabilties").val(),
            a = [];
        var image_attachment_id = jQuery("#image_attachment_id").val();

        if (jQuery(".icheck-square .tag").each(function(e) {
                var r = jQuery.trim(jQuery(this).children("span").html());
                r.replace(/\s/g, ""), a.push(r)
            }), s = a.join(","), jQuery("#hide_for_all").is(":checked")) var i = "yes";
        else i = "no";
        if (jQuery("#hide_for_all_guests").is(":checked")) var o = "yes";
        else o = "no";

        var u = {
            action: "save_user_roles",
            UserRoles: c,
            caps: s,
            disableForAll: i,
            forGuests: o,
            image_attachment_id: image_attachment_id
        };
        e.post(ajaxVar.url, u, function(e) {
            window.location.reload()
        })
    });
}(jQuery);