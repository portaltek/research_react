##############################################################################
# Source Tutorial: https://www.youtube.com/watch?v=sxylafSufqc
##############################################################################
cd $RESEARCH_HOME/reactjs/prime-react/02
npx create-react-app prime-app; cd prime-app; npm start;
npx create-react-app prime-app2; cd prime-app2; npm start;
npm install primereact primeicons --save
npm install classnames react-transition-group axios

Components
- MenuBar
- MenuBarElement
- SideBar
- SideBarElement
- CreateItemPage
---

# MONGODB + MONGO_EXPRESS
cd "$RESEARCH_HOME/java/mongodb/02/mymongodb/_infra/local/"
docker-compose up -d
# MY_MONGODB_BKEND_APP
cd "$RESEARCH_HOME/java/mongodb/02/mymongodb"
./gradlew clean bootRun
