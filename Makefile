install: # установить зависимости
	npm ci

brain-games:
	node bin/brain-games.js

brain-even: #Запуск игры на четность
	node bin/brain-even.js	

publish:
	 npm publish --dry-run

make lint:
	npx eslint .
