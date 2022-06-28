export APP_NAME=my-react-app
cd "$RESEARCH_HOME/reactjs/prime-react/03/$APP_NAME"
mkdir src/pages
rm src/logo.svg

rm src/App.js
echo "import \"./App.css\";
function App() {
  return <div className=\"App\">APP</div>;
}
export default App;
" >  src/App.js