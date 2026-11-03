#!/bin/sh
# Uso: ./release.sh 2.16.3  → actualiza la versión en la app, version.txt y los enlaces a las traducciones
v="$1"; [ -z "$v" ] && { echo "falta la versión"; exit 1; }
sed -i -E "s/const APP_VERSION = \"[^\"]+\";/const APP_VERSION = \"$v\";/" index.html
sed -i -E "s#<script src=\"i18n(-[a-z]+)?\.js(\?v=[^\"]*)?\"></script>#<script src=\"i18n\1.js?v=$v\"></script>#g" index.html
printf '%s' "$v" > version.txt
sed -i -E "s#<script src=\"recetas-esp\.js(\?v=[^\"]*)?\"></script>#<script src=\"recetas-esp.js?v=$v\"></script>#g" index.html
