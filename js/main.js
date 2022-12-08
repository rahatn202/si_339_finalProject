    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
        }
    }
    let x = document.querySelectorAll('img');
    for (i = 0; i<x.length; i++){
        x[0].setAttribute('tabindex','0')
    }

    (function() {
        $( "#datepicker" ).datepicker({ dateFormat: 'yy-mm-dd' });
        });

    
       
