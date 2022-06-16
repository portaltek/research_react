##############################################################################
# Source Tutorial: https://www.youtube.com/watch?v=sxylafSufqc
##############################################################################
cd $RESEARCH_HOME/reactjs/prime-react/02
npx create-react-app prime-app; cd prime-app; npm start;
npm install primereact primeicons --save
npm install classnames react-transition-group axios 
npm i react-router-dom #Nav / Route&Switch pages

# MONGODB + MONGO_EXPRESS
cd "$RESEARCH_HOME/java/mongodb/02/mymongodb/_infra/local/"
docker-compose up -d

# MY_MONGODB_BKEND_APP
cd "$RESEARCH_HOME/java/mongodb/02/mymongodb"
./gradlew clean bootRun

# MY_REACT + PRIMEREACT WEB_APP
cd $RESEARCH_HOME/reactjs/prime-react/02/prime-app
npm start


/jsx/pages/
/product
Product
ProductEmptyObject
ProductPage
ProductScreen
ProductTable

/product/form
CreateProductForm
DeleteProductForm
SearchProductForm
UpdateProductForm


Product