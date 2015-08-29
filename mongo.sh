#/bin/sh

mkdir -p ~/.mongodb/siohigari
mkdir -p ~/.mongodb/logs/

mongod --dbpath ~/.mongodb/siohigari --logpath ~/.mongodb/logs/mongodb_siohigari.log


