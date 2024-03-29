# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## 機能
- [ ] 指定されたデザインに合わせたコーヒーリストページを作成します。
- [ ] このチャレンジにはReactまたは他のフロントエンドライブラリを使用します。  
- [ ] 再利用可能なカードコンポーネントを作成します。
- [ ] カードコンポーネントには、写真、名前、価格、評価、存在する場合は投票数を含める必要があります。 
- [ ] カードコンポーネントは、人気のタグ、利用可能なステータスを条件付きでレンダリングする必要があります。
- [ ] 指定されたデータでコーヒーリストをレンダリングします。
- [ ] データは指定されたAPIまたはダウンロードしたJSONファイルから取得する必要があります。 
- [ ] ユーザーは、すべての製品をリストするか、利用可能な製品のみをリストすることを選択できます。  
- [ ] ソリューションをデプロイし、リポジトリURLとデモURLを提出します。

## API
https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json
