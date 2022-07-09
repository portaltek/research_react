##############################################################################
# Source Tutorial:
# https://www.youtube.com/watch?v=fzxEECHnsvU

##############################################################################

cd "$RESEARCH_HOME/reactjs/Test003"

npx create-react-app $APP_NAME; cd $APP_NAME; npm start;

export APP_NAME=my-react-app
cd "$RESEARCH_HOME/reactjs/Test003/$APP_NAME"

npm i @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom

# TODO: 
# Login, use local store and auto-logout warning.
# Master-Detail crud.
# - Create Form
# - Update Form
# - Delete Form
# Unit Test and Light Component Test.
# Dynamic side menu options rendering.
# Fix Profile Menu.


<Box flex={1} p={2} sx={{ display: "flex" }}>