var init_friend_lookup;

init_friend_lookup = function() {
    $('#friend-lookup-form').on('ajax:before', function (event, data, status) {
        showSpinner();
    });

    $('#friend-lookup-form').on('ajax:after', function (event, data, status) {
        hideSpinner();
    });

    $('#friend-lookup-form').on('ajax:success', function(event, data, status){
        $('#friend-lookup').replaceWith(data);
        init_friend_lookup();
    });

    $('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error) {
        hideSpinner();
        $('#friend-lookup-results').replaceWith(' ');
        $('#friend-lookup-errors').replaceWith("<p>Person was not found.</p>");
    });
}


$(document).ready(function() {
    init_friend_lookup();
})