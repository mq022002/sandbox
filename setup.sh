echo "==================== START angular-demo ===================="
cd angular-demo
npm i
cd ../
echo "==================== FINISH angular-demo ===================="

echo "==================== START django-spotify-demo ===================="
python -m venv .venv
. .venv/Scripts/activate
cd django-spotify-demo
pip install -r requirements.txt
cd ../
echo "==================== FINISH django-spotify-demo ===================="

echo "==================== START firebase-functions ===================="
cd firebase-functions
npm i
cd ../
echo "==================== FINISH firebase-functions ===================="

echo "==================== START nextjs-financial-dashboard ===================="
cd nextjs-financial-dashboard
npm i
cd ../
echo "==================== FINISH nextjs-financial-dashboard ===================="

echo "==================== START nextjs-progressive-web-app ===================="
cd nextjs-progressive-web-app
npm i
cd ../
echo "==================== FINISH nextjs-progressive-web-app ===================="

echo "==================== START nextjs-pages-router ===================="
cd nextjs-pages-router
npm i
cd ../
echo "==================== FINISH nextjs-pages-router ===================="

echo "==================== START react-native-to-do-list ===================="
cd react-native-to-do-list
npm i
cd ../
echo "==================== FINISH react-native-to-do-list ===================="
