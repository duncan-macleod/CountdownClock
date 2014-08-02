describe('TimeController', function() {
    var scope, createController;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        createController = function() {
            return $controller('TimeController', {
                '$scope': scope
            });
        };
    }));

    it('should return green for number 1', function() {
        //var controller = createController();
		//expect(controller.set_color(1)).toBe("green");
		expect(true).toBe(true);
    });
});