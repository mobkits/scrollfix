dev:
	@webpack example/index.js example/bundle.js
	@open example/index.html

build: components index.js
	@component-build --dev

components: component.json
	@component-install --dev

clean:
	rm -rf components build

.PHONY: clean
