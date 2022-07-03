export APP_NAME=my-react-app
cd "$RESEARCH_HOME/reactjs/prime-react/03/$APP_NAME"

mkdir src/pages; rm src/logo.svg public/logo192.png public/logo512.png
 

rm src/App.js
echo " function App() {
  return <div>APP</div>;
}
export default App;
" >  src/App.js