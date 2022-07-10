##############################################################################
# Source Tutorial:


##############################################################################

export APP_NAME=my-react-app
export PROJECT_DIR=$RESEARCH_HOME/reactjs/Test004
cd "$PROJECT_DIR"
npx create-react-app $APP_NAME; cd $APP_NAME; npm start;

# STOP PROJECT, DOWNLOAD DEPENDENCIES AND FILE CLEAN UP
npm i @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom
mkdir src/pages; rm src/logo.svg public/logo192.png public/logo512.png
rm src/App.js
echo "function App() {  return <div>APP</div>; } export default App;" >  src/App.js