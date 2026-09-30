pipeline {
  agent any

  tools {
    nodejs 'Node 22'
  }

  options {
    disableConcurrentBuilds()
    buildDiscarder(logRotator(numToKeepStr: '10'))
  }

  triggers {
    pollSCM('H/5 * * * *')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build') {
      steps {
        sh '''#!/usr/bin/env bash
set -euo pipefail

npm ci
npm run lint
npm run build -- --base=/

sed -i 's#https://nuhe.github.io/-freelance-web/#https://foxops.digital/#g' \
  dist/index.html dist/robots.txt dist/sitemap.xml
test -s dist/index.html
'''
      }
    }

    stage('Deploy') {
      steps {
        sh '''#!/usr/bin/env bash
set -euo pipefail

target=/srv/foxops-dist
test -d "$target"
test -w "$target"

# Copy assets before switching the HTML entry point.
tar -C dist --exclude='./index.html' -cf - . | tar -C "$target" -xf -
cp dist/index.html "$target/.index.html.new"
mv -f "$target/.index.html.new" "$target/index.html"
'''
      }
    }
  }
}
