install: # установить зависимости
	npm ci

brain-games:
	node bin/brain-games.js

brain-even: #Запуск игры: на четность
	node bin/brain-even.js	

brain-calc: #Запуск игры: калькулятор
	node bin/brain-calc.js

brain-calc: #Запуск игры: НОД
	node bin/brain-gcd.js

brain-calc: #Запуск игры: Арифметическая прогрессия
	node bin/brain-progression.js

brain-calc: #Запуск игры: Простое ли число?
	node bin/brain-prime.js

publish:
	 npm publish --dry-run

make lint:
	npx eslint .
