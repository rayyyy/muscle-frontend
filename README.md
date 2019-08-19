# MuscleFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## 起動させ方
先にmuscle-apiを起動させる
```
docker-compose up
```

## Componentsについて(Atomic designを踏襲)

|種類|説明|
|---|---|
| atoms | これ以上分解できない最小単位 buttonなど<br>意味を持たないもの |
| molecules | atomsを複数まとめたもの 入力フォームなど<br>意味をもつ物もmoleculesで作る |
| organisms | moleculesが集まったもの ヘッダーなど<br> ![organisms](https://blog.kubosho.com/images/using-atomic-design/organisms.png "organisms") |
| pages | organismsを組み合わせて作るページ! |
から構成される。

基本的にpagesディレクトリでページを適当に作っていき  
リファクタリング時にこの原則に沿って  
DRYにしていく。

## ページ追加のとき
ページごとにmoduleとroutingファイルを作る（非同期読み込みのため）
```
npx ng g module pages/mypage/mentor --routing
npx ng g component pages/mypage/mentor
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
