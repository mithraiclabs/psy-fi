# psyoptions-euros-UI

Coming Soon

```

⊹  ✦  　　　 ·　 ✹  . 🚀
　 　 　 · ✺  ⋆ 　 · 　
　    　 · 　　
　　.✷  　    

 ✧　.

<h3>Status</h3>
<ul>
  <li>Project planning</li>
  <li>First iterations blockchain setup</li>
  <li>Build out UX lo-res with mock data</li>
  <li>Hi-Res blockchain integration</li>
  <li>Devnet</li>
  <li>Hi-Res UX Iteration 1</li>
  <li>Mainnet</li>
  <li>Hi-Res UX Iteration X</li>
</ul>

Testing Current Build
----------------------

Present focus is scaffolding the app by way of select components.

The markets view could be tested here:

http://localhost:1414/market

To toggle different settings, change the recoil config code:

- root/state/help (toggle help)
- root/state/levels (toggle different levels of data)
- root/state/markets (toggle underlying & assets etc, toggle grid & table views)

```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### DevTools

The project uses recoil and some experimental dev tools.

`src/components/DevTools`

In the browser, you can use these commands:

- changeMonitorKey `ctrl-m`
- changePositionKey `ctrl-q`
- toggleVisibilityKey `ctrl-h`

The console and dock monitor will update after recoil state changes

## Getting Started with Solana

At present time this is not required to run the app. Stay tuned

* Run the Solana blockchain with the dependent programs
    * `npx ts-node buildlab/whole-shebang/index.ts`
