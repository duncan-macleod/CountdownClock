
casper.test.begin('Testing Google', 3, function(test){
    casper.start('Home.html', function(){
		
	});

    casper.then(function(){
        test.assertTitle('Countdown!', 'Page has correct title');
		//error shown
		test.assertVisible('.error');
		
		//fill in field
		casper.fill('form#timeinput', {
			'time' : 1
		}, false);
		
		//ensure error is hidden
		test.assertNotVisible('.error');
    });

    casper.run(function(){
        test.done();
    });
});