function fizzBuzz() {
    $('#number-chooser').submit(function(event) {
      event.preventDefault();
      let count = $('#number-choice').val();
      console.log(count);
      let result = [];
      for (let i = 1; i <= count; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            result.push(`
                <div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>
                `);
        } else if (i % 3 === 0) {
            result.push(`
                <div class="fizz-buzz-item fizz"><span>fizz</span></div>
                `);
        } else if (i % 5 === 0) {
            result.push(`
                <div class="fizz-buzz-item buzz"><span>buzz</span></div>
                `);
        } else {
            result.push(`
                <div class="fizz-buzz-item"><span>${i}</span></div>
                `);
        }
          
     
        }
        $('.js-results').append(result);
        $('#number-choice').val(" ");
    })
}
    
    $(fizzBuzz);
    //something