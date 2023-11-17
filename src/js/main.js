import $ from './lib/lib';

$('button').on('click', function() {
    $(this).hide().show().toogleClass('active');
});