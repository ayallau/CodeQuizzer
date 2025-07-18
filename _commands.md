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
# Git commands:
````bash
git init # יצירת ריפוזיטורי חדש
git clone <repository_url> # שכפול ריפוזיטורי קיים  
git add . # הוספת כל הקבצים לשלב הבא
git commit -m "commit message" # יצירת קומיט עם הודעה
git push origin <branch_name> # דחיפת שינויים לסניף מרוחק
git pull origin <branch_name> # משיכת שינויים מסניף מרוחק
git branch <branch_name> # יצירת סניף חדש
git checkout <branch_name> # מעבר לסניף אחר
git merge <branch_name> # מיזוג סניף לתוך הסניף הנוכחי
git status # בדיקת מצב הריפוזיטורי  
git log # הצגת היסטוריית הקומיטים
git reset --hard <commit_hash> # החזרת הריפוזיטורי למצב קומם
git stash # שמירת שינויים זמניים  
git stash pop # החזרת השינויים ששמרנו
git remote add origin <repository_url> # הוספת ריפוזיטורי מרוחק
git remote -v # הצגת ריפוזיטורי מרוחק
git fetch origin # משיכת שינויים מרוחקים ללא מיזוג
git rebase <branch_name> # מיזוג סניף עם שמירה על ה היסטוריה
git cherry-pick <commit_hash> # העתקת קומיט מסניף אחר לסניף הנוכחי
git tag <tag_name> # יצירת תגית לקומיט
git diff <commit_hash1> <commit_hash2> # השוואת שינויים בין שני קומיטים
git revert <commit_hash> # יצירת קומיט חדש שמבטל קומיט קודם 
git rm <file_name> # הסרת קובץ מהריפוזיטורי
git mv <old_name> <new_name> # שינוי שם קובץ    
git config user.name "Your Name" # הגדרת שם משתמש
git config user.email "Your Email "   # הגדרת אימייל        

# Docker commands:
````bash    
docker build -t <image_name> .
docker run -d -p 8000:8000 <image_name>
docker ps # בדיקה אילו קונטיינרים פועלים
docker stop <container_id> # עצירת קונטיינר
docker rm <container_id> # מחיקת קונטיינר
docker rmi <image_name> # מחיקת תמונה
docker-compose up -d # הרצת קונטיינרים לפי docker-compose.yml
docker-compose down # עצירת קונטיינרים לפי docker-compose.yml
docker-compose logs # הצגת לוגים של קונטיינרים
docker-compose exec <service_name> bash # כניסה לקונטיינר של שירות מסוים
docker-compose build # בניית קונטיינרים לפי docker-compose.yml
docker-compose ps # הצגת קונטיינרים רלוונטיים
docker-compose run <service_name> <command> # הרצת פקודה בתוך קונטיינר של שירות מסוים
docker-compose pull # הורדת תמונות של קונטיינרים
docker-compose push # העלאת תמונות של קונטיינרים
docker-compose config # הצגת קובץ התצורה של docker-compose
docker-compose restart # הפעלת קונטיינרים מחדש
docker-compose scale <service_name>=<number> # שינוי מספר הקונטיינרים של שירות
docker-compose logs <service_name> # הצגת לוגים של שירות מסוים
docker-compose port <service_name> <port> # הצגת פורט של שירות מסוים
docker-compose up --build # בניית קונטיינרים והפעלתם
docker-compose down --volumes # עצירת קונטיינרים ומחיקת וול
````


