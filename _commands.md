# Python commands:
````bash

venv\Scripts\activate.bat

pip install -r requirements.txt

uvicorn main:app --reload

venv\Scripts\deactivate.bat

````

# MongoDB commands:
````bash

net start MongoDB # הפעלה ב- service של window
net stop MongoDB
sc query MongoDB # בדיקה אם השרת פועל
mongod # הרצה חד פעמית
mongosh # mongoDB Cli

````
# Angular commands:
````bash

npm start
npx ng build

npx ng g m <module_name>
npx ng g c <component_name> --module=home --path=/src/app/<component>
npx ng g s <service_name> --path=/src/app/core/services
npx ng g d <directive_name>
npx ng g p <pipe_name>
npx ng g guard <guard_name>
npx ng g interface <interface_name>
npx ng g class <class_name>
npx ng g enum <enum_name>
npx ng g service <service_name>

````


