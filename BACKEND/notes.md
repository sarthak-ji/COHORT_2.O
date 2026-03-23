Back-end Notes:

* How to run JS outside the browser?
- use command -> "node (filename).js" or, "npx nodemon (filename).js" 


* What are the packages?
- Packages are the codes that are written by other developers and are uploaded on the "npm-website", and we can use them eaisly by installing them in the form of node packages in our terminal. [Aur ye package node_modules me jaa kar add ho jata hai]

* How to install packages?
- Use command: npm install/(i) 'package_name'


* package.json: jo code humne JS me likha hai wo jin packages pe depend krta hai unhe rakhti (maintain) hai 
* node_modules: [Aur ye package node_modules me jaa kar add ho jata hai]
* package-lock.json: jo code humne JS me likha hai wo jin packages pe depend krta hai unhe rakhti (maintain) hai , aur unn packages ka code jin packages par depend karta hai... wo maintain karti hai ye file!

* What is Server?
- A machine which have its own OS, RAM, processor and, storage which is programmed in such a way that it accepts user request and generate response.


* Creating server with Express..
1. command: 'npm init -y' -> creates package.json
2. command: 'npm i express'


* RestAPI -> Used in client-server communication (And the rule is: "Either use HTTP/HTTPs protocol")
- Note: If any other protocol is used then, it is not RestAPI.
- Note: And, aap communication kis type ka kar rhe ho uske hisab se "method- (GET/POST/PUT/PATCH/DELETE)" decide hogi..

* DATABASE:
- Mongoose package -> helps in connecting express server to the Mongodb database. ("npm i mongoose")