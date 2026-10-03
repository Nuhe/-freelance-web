pipeline {
  agent any

  options {
    disableConcurrentBuilds()
    buildDiscarder(logRotator(numToKeepStr: '10'))
  }

  triggers {
    pollSCM('H/5 * * * *')
  }

  stages {
    stage('Build') {
      steps {
        sh '''#!/usr/bin/env bash
set -euo pipefail

npx --yes -p node@22.12.0 -c 'npm ci --include=optional'
npx --yes -p node@22.12.0 -c 'npm run lint'
npx --yes -p node@22.12.0 -c 'npm run build'
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
