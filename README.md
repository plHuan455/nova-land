# Hi, We are <a href="https://3forcom.com" target="_blank">3FORCOM</a> <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">

## Glad to see you here!
## About Project

In this project, we will create a website about NovaLand Website

## Repository

<https://bitbucket.org/binhnguyenthien/3forcom-nova-novaland-website-2021/src/develop/>

## Design Workspace

<https://www.figma.com/file/1gGj7JY4vZupZXs37p70NY/G1-NOVALAND-GROUP?node-id=0%3A1>


## Languages and Frameworks

- CRA
- TypeScript v4.1.2
- SCSS (node-sass) v5
- React v17
- Babel v8
- Hygen
- Storybook v6
- ESLint
- Stylelint
- Prettier
- Redux
- Redux-toolkit
- ...

## Files/Directories

| Path                    | Purpose                                                     |
| ----------------------- | ----------------------------------------------------------- |
| /.storybook/            | contains Storybook config files                             |
| /.eslintrc              | settings for `ESLint`                                       |
| /.hygen.js              | settings for `Hygen`                                        |
| /_templates/            | contains scaffolding templates based on `Hygen`             |
| /.stylelintrc.js        | settings for `Stylelint`                                    |
| /.vscode/               | settings for `Visual Studio Code` workspace                 |
| /package.json           | manifest file for Node.js projects                          |
| /tsconfig.json          | settings for `TypeScript`                                   |
| /dist/                  | contains production build codes                             |
| /public/                | root folder that gets served up as our react app.                             |
| /src/components/        | contains Atomic Design components                           |
| /src/pages/             | contains pages                                              |
| /src/assets/            | contains images, movies, fonts                              |
| /src/store/             | contains shared store                                       |
| /src/services/          | contains shared services                                    |
| /src/services/          | contains shared services                                    |
| /src/styles/            | contains common styles: breakpoints, colors, font, mixin, function               |
| /src/index.tsx/         | contains root file                                          |
| /src/App.tsx            | contains application page index                             |
| /src/index.scss         | contains shared styles                                      |
| /src/react-app-env.d.ts | contains shared types                                       |
---

## Command Line

| Path                    | Purpose                                                     |
| ----------------------- | ----------------------------------------------------------- |
| yarn start              | start the project                                           |
| yarn buid               | build the project                                           |
| yarn test               | run unit test                                               |
| gen:component           | generate new `atomic` component                             |
| gen:page                | generate new page                            |
| yarn storybook          | run the storybook                                           |
| yarn lint:script        | run `Eslint` to check the syntax                            |
| yarn lint:style         | run `Stylelint` to check the syntax                         |
---

### `Abem`

<https://css-tricks.com/abem-useful-adaptation-bem/>

**Note: Use only the `lowercase` format for `className`.**

```tsx
  //GOOD ????????????
  export const Sample:React.FC = ({ children }) => (
    <div className="a-sample">{children}</div>
  );


  //NOT GOOD ????????????
  export const Sample:React.FC = ({ children }) => (
    <div className="a-Sample">{children}</div>
  );
```

**Note: Use only the `Single_Underscore(_) && Single-Dash(-)` format for `className`.**

```tsx
  //GOOD ????????????
  export const Sample = () => (
    <div className="a-sample">
      <span className="a-sample_title">Title</span>
    </div>
  );


  //NOT GOOD ????????????
  export const Sample = () => (
    <div className="a--sample">
      <span className="a--sample__title">Title</span>
    </div>
  );
```

**Note: The `className` must be formatted as `block_element-modifier`. But `Sometimes` it will be formatted as `block_element_element-modifier`.**

```tsx
  //GOOD ????????????
  export const Sample = () => (
    <div className="a-sample">
      <span className="a-sample_element">One Element</span>
    </div>
  );

  export const Sample = () => (
    <div className="a-sample">
      <span className="a-sample_element1_element2">Two elements</span>
    </div>
  );


  //NOT GOOD ????????????
  export const Sample = () => (
    <div className="a-sample">
      <span className="a-sample_element1_element2_element3">Greater than 2 elements</span>
    </div>
  );
```

### `Atomic`

<https://bradfrost.com/blog/post/atomic-web-design/>

### `Components`

- Use only `React-Hook`
- Follow the `rules of hook` (<https://reactjs.org/docs/hooks-rules.html>)

**Note: Use `mapModifiers` to generate `modifiers`.**

```tsx
  export const Component: React.FC<Props> = props => (
    <div className={mapModifiers('a-sample', props.modifiers)}>{props.children}</div>
  );
```

**Note: Use `// eslint-disable-next-line react-hooks/exhaustive-deps` when you want to avoid checking of the `useEffect` syntax (also on `useMemo & useCallback`)**

```tsx
  useEffect(() => {
    Todo Something...
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
```

**Note: Use simple syntax when the component has no properties.**

```tsx
  //GOOD ????????????
  export const Component = () => (
    <div>Without children...</div>
  );

  export const Component: React.FC = ({ children }) => (
    <div>{children}</div>
  );


  //NOT GOOD ????????????
  export const Component: React.FC = () => (
    <div>Without children...</div>
  );
```

**Note: Clearly define the data type of the property.**

```tsx
  //GOOD ????????????
  interface Props {
    title: string;
  }

  //NOT GOOD ????????????
  interface Props {
    title: any;
  }
```

**Note: Please leave TODO when you encounter some unresolved issues immediately.**

```tsx
  export const Component = () => {

    // TODO: bla...bla...bla
    const Problems = 'Problems';

    return (
      <div>Todo Something...</div>
    );
  };
```

**Note: Use the filename as the component name. For example, Example.tsx should have a reference name of Example. However, for root components of a directory, use index.jsx as the filename and use the directory name as the component name:**

```tsx
  //GOOD ????????????
  import Example from 'components/atoms/Example';

  //NOT GOOD ????????????
  import Example from 'components/atoms/Example/index';
```

### `CSS/SCSS`

**Note: Instead of using `Color Variables`, do `NOT` use `Color Codes`. If the color code has not been defined. Please leave `TODO` about that.**

```scss
  .a-sample {
    // TODO: Replace with color variable
    color: rgb(0, 0, 0);
  }
```

**Note: Instead of using `Color Variable` defined at `styles/colors.scss` and you can get name of color at   https://hexcol.com/   , do `NOT` use `Color Names | Color Hexs | ...`.**

```scss
  //GOOD ????????????
  .a-sample {
    // TODO: Replace with color variable
    color: $black;
  }

  //NOT GOOD ????????????
  .a-sample {
    // TODO: Replace with color variable
    color: black; /* stylelint-disable-line color-named */
  }
```

**Note:  Please Use `font-family: $font-family-variable`, not Use `font-family: 'Font Name'` .**

```scss
  //GOOD ????????????
  .a-sample {
    // TODO: Replace with font-family variable
    font-family: $anotherFont;
  }

  //NOT GOOD ????????????
  .a-sample {
    font-family: 'AnotherFont';
  }
```

**Note: Please use `@function rem` with the properties have dynamic values (Scale-up and Scale-down). rem($SizeOnDesign)**

```scss
  //GOOD ????????????
  .a-sample {
    border-radius: 4px;
    font-size: rem(16);
  }

  //NOT GOOD ????????????
  .a-sample {
    border-radius: 4px;
    font-size: 16px;
  }
```

**Note: Instead of using `z-index: $variables`, do `NOT` use `z-index value`. Please define the `zIndex variable` before using that function. Please follow the instructions at `styles/variables.scss`**

```scss
  //GOOD ????????????
  .a-sample {
    z-index: $z-sample;
  }

  //NOT GOOD ????????????
  .a-sample {
    z-index: 4;
  }
```

### `Storybook`

**Note: Make sure that you have included all instances of the component in the storybook when building it.**

### `Unit Test`

- enzyme: <https://enzymejs.github.io/enzyme/docs/api/>
- jest: <https://jestjs.io/docs/en/25.x/getting-started.html>
- testing-library/react-hooks: <https://react-hooks-testing-library.com/usage/basic-hooks>

**Note: Make full test coverage for the component. If `NOT`, please notify your Leader.**

### `Typescript`

<https://www.typescriptlang.org/index.htm>

### `Redux/Redux-Toolkit`

- redux: <https://redux.js.org/>
- redux-toolkit: <https://redux-toolkit.js.org/>

### `React-router-dom`

<https://reactrouter.com/web/guides/quick-start>

### `Git`

- Rebase: <https://git-scm.com/docs/git-rebase>
- Git branch format: <http://karma-runner.github.io/5.0/dev/git-commit-msg.html>

**Note: When create a new branch. The `type` will include `feature | bugfix | hotfix | release | support`**

```ssh
  git checkout -b type/feature-name
```

**Note: When committed. The `type` will include `feat | fix | hotfix | release | support`**

```ssh
  git commit -m ':emoji: type(feature-name): messages'
```

Commit Type | Emoji
----------  | -----
Initial Commit | [????  Party Popper](http://emojipedia.org/party-popper/)
Version Tag | [????  Bookmark](http://emojipedia.org/bookmark/)
New Feature | [???  Sparkles](http://emojipedia.org/sparkles/)
Bugfix | [????  Bug](http://emojipedia.org/bug/)
Security Fix | [????  Lock](https://emojipedia.org/lock/)
Metadata | [????  Card Index](http://emojipedia.org/card-index/)
Refactoring | [??????  Black Universal Recycling Symbol](http://emojipedia.org/black-universal-recycling-symbol/)
Documentation | [????  Books](http://emojipedia.org/books/)
Internationalization | [????  Globe With Meridians](http://emojipedia.org/globe-with-meridians/)
Accessibility | [???  Wheelchair](https://emojipedia.org/wheelchair-symbol/)
Performance | [????  Horse](http://emojipedia.org/horse/)
Cosmetic | [????  Artist Palette](http://emojipedia.org/artist-palette/)
Tooling | [????  Wrench](http://emojipedia.org/wrench/)
Tests | [????  Police Cars Revolving Light](http://emojipedia.org/police-cars-revolving-light/)
Deprecation | [????  Pile of Poo](http://emojipedia.org/pile-of-poo/)
Removal | [???????  Wastebasket](http://emojipedia.org/wastebasket/)
Work In Progress (WIP) | [????  Construction Sign](http://emojipedia.org/construction-sign/)
See more | [Be creative](http://www.emoji-cheat-sheet.com/)

## Generate Template
-   Generate component: `yarn gen:component ??? select level ??? enter component's name`
-   Generate page: `yarn gen:page ??? enter component's name`
## Quy Tr??nh Rebase
### Rebase ????? l??m g???
- D??ng ????? thay th??? cho merge, nh??ng ti???p c???n theo 1 h?????ng kh??c
- X??? l?? conflict
- L???y code m???i t??? nh??nh ch??nh v???
### T???i sao l???i l?? rebase?
- Khi merge s??? gi???i quy???t t???t c??? conflict trong m???t commit, s??? g??y kh?? kh??n trong vi???c gi???i quy???t conflict
- Rebase s??? gi???i quy???t conflict ??? ngay ch??nh commit g??y ra conflict, s??? gi??p d??? d??ng x??? l?? conflict
- Khi rebase ????? x??? l?? conflict, tr?????ng h???p x???u nh???t m??nh v???n c?? th??? checkout v?? code l???i commit ???? t??? ?????u theo n???i dung c???a commit message
- Merge s??? l???y code c???a nh??nh ph??? l??m code ch??nh, n??n d??? g??y ???? code, c??n rebase s??? l???y code c???a nh??nh ch??nh l??m ch??nh
- Khi rebase th?? nh??nh git s??? g???n v?? tr???c quan h??n
- Rebase c??n gi??p ??ch cho c??c c??ng vi???c qu???n l?? kh??c
### Khi n??o th?? c???n rebase?
- Rebase khi mu???n l???y code t??? nh??nh develop v??? nh??nh m??nh
- Khi g???p conflict ph???i resolve b???ng rebase,
- N??n rebase th?????ng xuy??n (khi c?? commit m???i ??? develop) v?? rebase tr?????c khi t???o pull request, tr??nh tr?????ng h???p g???p kh?? kh??n khi rebase qu?? nhi???u commit
### Quy tr??nh rebase
1. l???y code m???i nh???t t??? remote v??? v?? ti???n h??nh rebase l??n nh??nh ch??nh
- ```git fetch```
- ```git rebase origin/develop```
2. x??? l?? conflict n???u c??
trong tr?????ng h???p x???u nh???t th?? checkout l???i file b??? conflict v?? code l???i theo commit c?? t????ng ???ng

// rebase tr??n branch ch??? c?? 1 ng?????i code ?????ng th???i th?? s??? ????n gi???n, nh??ng n???u 2 ng?????i code c??ng l??c th?? s??? th??m nhi???u case ph???i handle h??n, nh??ng theo git-flow th?? m??nh ???? h???n ch??? tr?????ng h???p 1 branch nhi???u ng?????i code c??ng 1 th???i ??i???m r???i

3. c???n ph???i check k??? code hi???n t???i sau khi rebase, ph???i ?????m b???o t????ng ??????ng code c??, kh??ng b??? l???i, ...

4. ch???y l???nh sau ????? ch??nh th???c ???? code c???a m??nh l??n remote ```git push --force-with-lease```