var _buildingBlocks = _buildingBlocks ? _buildingBlocks : {};
(function($) {
	$.extend(_buildingBlocks, {
		curveText: {
      // DOM Objects
      _CurveText: null,
      // Selectors
      curveTextSelector: '.curve-text',
      // Classes
      // Misc
      init() {
        const self = this;

        self._CurveText = document.querySelectorAll(self.curveTextSelector);
        if (!self._CurveText || self._CurveText.length < 1) {
          return;
        }

        for (const _CurveText of self._CurveText) {
          self.applyCurve(_CurveText);
        }
      },
      applyCurve(_CurveText) {
        const self = this;

        if (!_CurveText) {
          return;
        }

        // get current width and apply as all text will be pos absolute after curve applied
        const width = _CurveText.clientWidth;
        _CurveText.style.width = `${width}px`;

        // dir(-1) = bend down, like a smile. Remove to bend up
        new CircleType(_CurveText).dir(-1).radius(200);
      }
		}
	});
	$.subscribe('pageReady', function() {
		_buildingBlocks.curveText.init();
	});
}(jQuery));
