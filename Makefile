install: # установить зависимости
	npm ci

brain-games:
	node bin/brain-games.js

brain-even: #Запуск игры на четность
	node bin/brain-even.js	

brain-calc: #Запуск игры калькулятор
	node bin/brain-calc.js

publish:
	 npm publish --dry-run

make lint:
	npx eslint .
