$(document).ready( function(){
    $(" #title-1 ").textillate({
        loop: true,
        minDisplayTime: 6000,
        initialDelay: 3000,
        in:{
            effect: "fadeInRight",
            delay: 100,
            shuffle: true,
            sequence: true
        },
        out:{
            effect: "fadeInLeft",
            delay: 100,
            sequence: true
        }
    });
    $(" #title-2 ").animated("fadeInDown", "fadeOutUp");
    $(" #title-3 ").animated("fadeInLeft", "fadeOutRight");
    $(" #title-4 ").animated("fadeInLeft", "fadeOutRight");
    $(" #statistic-box-1 ").animated("fadeInLeft", "fadeOutLeft");
    $(" #statistic-box-2 ").animated("fadeInDown", "fadeOutUp");
    $(" #statistic-box-3 ").animated("fadeInRight", "fadeOutRight");
});

